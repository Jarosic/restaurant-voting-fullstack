import { Meals } from "./meal";

export class Restaurant {
  id: number;
  name: string ;
  meals: Meals;
}
export type Restaurants = Restaurant[];
