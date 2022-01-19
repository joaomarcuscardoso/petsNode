import { v4 as uuid } from "uuid";
interface ISpecieRequest {
  id?: string;
  name?: string;
  description?: string;
  user_id: string;
}

export { ISpecieRequest };