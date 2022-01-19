import { ISpecieRequest } from "../dtos/ISpecieRequest";
import { getCustomRepository } from 'typeorm';
import { SpeciesRepositories } from "../infra/repositories/SpeciesRepositories";
import { Specie } from "../infra/entities/Specie";

class CreateSpecieUseCase {
  async execute({name, description}: ISpecieRequest): Promise<Specie> {
    const specieRepositories = getCustomRepository(SpeciesRepositories);


    if(!name) {
      throw new Error("Name is required!")
    }
    
    if(!description) {
      throw new Error("Description is required!")
    }

    const specie = specieRepositories.create({
      name, 
      description
    });

    await specieRepositories.save(specie);

    return specie;
  }
}

export { CreateSpecieUseCase}