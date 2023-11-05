import { products } from "../../fixtures";
import { ProductCard as ProductCardComp } from "./ProductCard";

const testProduct = products[0];

export const ProductCard = () => (
  <ProductCardComp
    image={testProduct.productImage}
    name={testProduct.productName}
    sizes={testProduct.productSize}
    brand={testProduct.productBrand}
    brandSize={"XL"}
  />
);

export default {
  component: ProductCardComp,
  title: "molecules/ProductCard",
};
