import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import Ciudad from "../../components/city.tsx";
import { City } from "../types.ts";

export const handler: Handlers = {
  async GET(req: Request, ctx) {
    try {
      console.log();
      const url = new URL(req.url);
      const city = url.searchParams.get("name");

      console.log(city);
      const headers = {
        "X-Api-Key": "U1LShcW8Bde6i1y7qb9beA==VP7Y6SstDI5Ruq6E",
      };
      const cityAPI = await Axios.get<City[]>(
        `https://api.api-ninjas.com/v1/city?name=${city}`,
        { headers },
      );
      console.log(cityAPI.data);
      return ctx.render({
        name: cityAPI.data[0].name,
        latitude: cityAPI.data[0].latitude,
        longitude: cityAPI.data[0].longitude,
        country: cityAPI.data[0].country,
        population: cityAPI.data[0].population,
        is_capital: cityAPI.data[0].is_capital,
      });
    } catch (error) {
      console.error(error);
      return new Response("Error aqui --", { status: 500 });
    }
  },
};

const Page = (props: PageProps<City>) => {
  console.log(props);
  const ciudad = props.data;
  return (
    <>
      <div>
        <Ciudad
          name={ciudad.name}
          latitude={ciudad.latitude}
          longitude={ciudad.longitude}
          country={ciudad.country}
          population={ciudad.population}
          is_capital={ciudad.is_capital}
        />
      </div>
      <a href="/">Home</a>
    </>
  );
};

export default Page;
