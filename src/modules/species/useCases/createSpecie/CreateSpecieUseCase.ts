import { getCustomRepository } from 'typeorm';
import { ISpecieRequest } from "../../dtos/ISpecieRequest";
import { SpeciesRepositories } from "../../infra/repositories/SpeciesRepositories";
import { Specie } from "../../infra/entities/Specie";
import { AppError } from '@shared/errors/AppError';

class CreateSpecieUseCase {
  async execute({name, description, user_id}): Promise<Specie> {
    const specieRepositories = getCustomRepository(SpeciesRepositories);

    const specieAlreadyExists = await specieRepositories.findOne({
      name,
      user_id
    });

    if(specieAlreadyExists){
      throw new AppError("Species Already exists!");
    }


    if(!name) {
      throw new AppError("Name is required!")
    }
    
    if(!description) {
      throw new AppError("Description is required!")
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