import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { User } from "../types.ts";
import Axios from "npm:axios";
import Usuario from "../../components/user.tsx";

export const handler: Handlers = {
  async GET(req: Request, ctx: FreshContext<unknown, User>) {
    try {
      const userAPI = "https://api.api-ninjas.com/v1/randomuser";

      const headers = {
        "X-Api-Key": "U1LShcW8Bde6i1y7qb9beA==VP7Y6SstDI5Ruq6E",
      };
      const response = await Axios.get(userAPI, { headers });
      return ctx.render(response.data);
    } catch (error) {
      console.error(error);
      return new Response("Error", { status: 500 });
    }
  },
};

const Page = (props: PageProps<User>) => {
  console.log(props);
  return (
    <div>
      <Usuario
        username={props.data.username}
        name={props.data.name}
        sex={props.data.sex}
        address={props.data.address}
        email={props.data.email}
      />
      <a href="/">Home</a>
    </div>
  );
};

export default Page;
