import { PageProps } from "$fresh/server.ts";

type Data = {
  name?: string;
};

const Page = (props: PageProps<Data>) => {
  return (
    <div>
      <form method="get" action="/dog/dog">
        <input type="text" name="name" />
        <button type="submit">Buscar Perro</button>
      </form>
      <button>
        <a href="/">Menu</a>
      </button>
    </div>
  );
};
export default Page;
