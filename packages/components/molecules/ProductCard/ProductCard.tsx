import { Select } from "../../atoms";
import classes from "./ProductCard.module.css";

export const ProductCard = ({ image, name, sizes, brand, brandSize }) => {
  sizes = sizes.map((v) => ({
    value: v,
    label: v,
    selected: brandSize && brandSize,
  }));
  return (
    <div className={classes.root}>
      <i>{brand}</i>
      <h2>{name}</h2>
      <img className={classes.img} src={image} />
      <Select label={"Sizes"} options={sizes} />
    </div>
  );
};
