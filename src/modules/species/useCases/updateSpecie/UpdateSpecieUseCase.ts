import { ISpecieRequest } from "modules/species/dtos/ISpecieRequest";
import { Specie } from "modules/species/infra/entities/Specie";
import { getCustomRepository } from "typeorm";
import { SpeciesRepositories } from "modules/species/infra/repositories/SpeciesRepositories";
import { AppError } from "@shared/errors/AppError";

class UpdateSpecieUseCase {
  async execute({id, name, description, user_id}: ISpecieRequest): Promise<string> {
    const specieRepositories = getCustomRepository(SpeciesRepositories);

    if(!id || !name || !description || !user_id) {
      throw new AppError("All fields is required.");
    }

    await specieRepositories.createQueryBuilder()
    .update({name, description})
    .where({id, user_id})
    .execute();
    
    return "Species was been update";
  }
}

export { UpdateSpecieUseCase };