import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  body?: string | null;
  product?: ProductWhereUniqueInput | null;
  rating?: number | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
