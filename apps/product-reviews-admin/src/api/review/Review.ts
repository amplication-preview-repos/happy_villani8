import { Product } from "../product/Product";
import { User } from "../user/User";

export type Review = {
  body: string | null;
  createdAt: Date;
  id: string;
  product?: Product | null;
  rating: number | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
