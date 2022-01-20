interface IPetRequest {
  name: string; 
  restrictions: string; 
  species_id: string;
  meals_id?: string;
  number_meals: number;
  user_id: string;
}
export { IPetRequest };