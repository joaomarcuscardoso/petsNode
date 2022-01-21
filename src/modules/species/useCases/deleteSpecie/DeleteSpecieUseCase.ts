import { SpeciesRepositories } from "modules/species/infra/repositories/SpeciesRepositories";
import { ISpecieRequest } from 'modules/species/dtos/ISpecieRequest';
import { getCustomRepository } from "typeorm";

class DeleteSpecieUseCase {
  async execute({id, user_id}: ISpecieRequest): Promise<String> {
    const speciesRepositories = getCustomRepository(SpeciesRepositories);
  
    if(!id) {
      throw new Error("Specie's id is required!")
    }

    await speciesRepositories.createQueryBuilder()
    .delete()
    .where({user_id, id})
    .execute();

    return "The Species was been deleted";
    
  }
}

export { DeleteSpecieUseCase };