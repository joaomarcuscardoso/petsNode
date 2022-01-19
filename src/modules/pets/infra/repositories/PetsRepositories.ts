import { EntityRepository, Repository } from "typeorm";
import { Pet } from 'modules/pets/infra/entities/Pet';


@EntityRepository(Pet)
class PetsRepositories extends Repository<Pet> {}

export { PetsRepositories }