
import { EntityRepository, Repository } from 'typeorm';
import { Specie } from '../entities/Specie';

@EntityRepository(Specie)
class SpeciesRepositories extends Repository<Specie> {}

export { SpeciesRepositories };