import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Dog } from "../types.ts";
import DogComponent from "../../components/dog.tsx";

export const handler: Handlers = {
  async GET(req: Request, ctx) {
    try {
      console.log();
      const url = new URL(req.url);
      const dogName = url.searchParams.get("name");

      console.log(dogName);
      const headers = {
        "X-Api-Key": "U1LShcW8Bde6i1y7qb9beA==VP7Y6SstDI5Ruq6E",
      };
      const dogAPI = await Axios.get<Dog[]>(
        `https://api.api-ninjas.com/v1/dogs?name=${dogName}`,
        { headers },
      );
      console.log(dogAPI.data);
      return ctx.render({
        image_link: dogAPI.data[0].image_link,
        name: dogAPI.data[0].name,
        max_height_female: dogAPI.data[0].max_height_female,
        max_height_male: dogAPI.data[0].max_height_male,
        max_weight_female: dogAPI.data[0].max_weight_female,
        max_weight_male: dogAPI.data[0].max_weight_male,
        good_with_other_dogs: dogAPI.data[0].good_with_other_dogs,
        good_with_children: dogAPI.data[0].good_with_children,
      });
    } catch (error) {
      console.error(error);
      return new Response("Error aqui --", { status: 500 });
    }
  },
};

const Page = (props: PageProps<Dog>) => {
  console.log(props);
  const dog = props.data;
  return (
    <>
      <div>
        <DogComponent
          image_link={dog.image_link}
          name={dog.name}
          max_height_female={dog.max_height_female}
          max_height_male={dog.max_height_male}
          max_weight_female={dog.max_weight_female}
          max_weight_male={dog.max_weight_male}
          good_with_other_dogs={dog.good_with_other_dogs}
          good_with_children={dog.good_with_children}
        />
      </div>
      <a href="/">Home</a>
    </>
  );
};

export default Page;
