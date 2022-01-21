import { ISpecieRequest } from "modules/species/dtos/ISpecieRequest";
import { Specie } from "modules/species/infra/entities/Specie";
import { getCustomRepository } from "typeorm";
import { SpeciesRepositories } from "modules/species/infra/repositories/SpeciesRepositories";

class UpdateSpecieUseCase {
  async execute({id, name, description, user_id}: ISpecieRequest): Promise<Specie> {
    const specieRepositories = getCustomRepository(SpeciesRepositories);

    if(!id) {
      throw new Error("specie's id is required!");
    }
  
    const specie = await specieRepositories.findOne({id, user_id});

    if(!specie) {
      throw new Error("Species not found!");
    }

    if(!name && !description) {
      throw new Error("Name or Description is required!");      
    }

    if(name) {
      specie.name = name;
    }
    
    if(description) {

      specie.description = description;
    }

    const specieUpdated = await specieRepositories.save(specie);
    
    return specieUpdated;
  }
}

export { UpdateSpecieUseCase };