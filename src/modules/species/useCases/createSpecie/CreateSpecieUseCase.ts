import { getCustomRepository } from 'typeorm';
import { ISpecieRequest } from "../../dtos/ISpecieRequest";
import { SpeciesRepositories } from "../../infra/repositories/SpeciesRepositories";
import { Specie } from "../../infra/entities/Specie";

class CreateSpecieUseCase {
  async execute({name, description, user_id}): Promise<Specie> {
    const specieRepositories = getCustomRepository(SpeciesRepositories);

    const specieAlreadyExists = await specieRepositories.findOne({
      name,
      user_id
    });

    if(specieAlreadyExists){
      throw new Error("Species Already exists!");
    }


    if(!name) {
      throw new Error("Name is required!")
    }
    
    if(!description) {
      throw new Error("Description is required!")
    }

    const specie = specieRepositories.create({
      name, 
      description,
      user_id
    });

    await specieRepositories.save(specie);

    return specie;
  }
}

export { CreateSpecieUseCase}