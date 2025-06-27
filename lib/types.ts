export interface ICar {
  id: number | string;
  name: string;
  model: string;
  year: number;
  price: number;
  image: string;
  type: string;
  fuel: string;
  transmission: string;
  isNew?: boolean;
}
