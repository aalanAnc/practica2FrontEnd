import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { Dog } from "../routes/types.ts";

const DogComponent: FunctionComponent<Dog> = (props) => {
  const {
    name,
    image_link,
    max_height_female,
    max_height_male,
    max_weight_female,
    max_weight_male,
    good_with_children,
    good_with_other_dogs,
  } = props;
  return (
    <div class="textDog">
      <div class="imageDog">
        <img src={image_link} />
      </div>
      <div class="textInfoDog">
        <p>· Name: {name}</p>
        <p>· Max height female: {max_height_female}</p>
        <p>· Max height male: {max_height_male}</p>
        <p>· Max weight female: {max_weight_female}</p>
        <p>· Max weight male: {max_weight_male}</p>
        <p>· Good with children: {good_with_children}</p>
        <p>· Good with other dogs: {good_with_other_dogs}</p>
      </div>
    </div>
  );
};

export default DogComponent;
