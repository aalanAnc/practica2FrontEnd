import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { City } from "../routes/types.ts";

const Ciudad: FunctionComponent<City> = (props) => {
  const { name, latitude, longitude, country, population, is_capital } = props;
  return (
    <div class="textCentre">
      <p>Name: {name}</p>
      <p>latitude: {latitude}</p>
      <p>longitude: {longitude}</p>
      <p>country: {country}</p>
      <p>population: {population}</p>
      <p>Is_Capital: {is_capital}</p>
    </div>
  );
};

export default Ciudad;
