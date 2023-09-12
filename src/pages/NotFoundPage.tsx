import Vincent from '../assets/Vincent.jpg';
import { PageTitle } from '../components/PageTitle';

function NotFoundPage() {
  return (
    <section className="container mx-auto max-w-2xl pt-5 grow">
      <PageTitle titleText={'404'} />

      <figure className="flex flex-col justify-center items-center text-xl gap-5">
        <h1 className=" font-bold">Not Found</h1>
        <img
          src={Vincent}
          alt="Frustrated Vincent Vega img"
          className="rounded w-3/4"
        />
        <figcaption>...nothing to see here</figcaption>
      </figure>
    </section>
  );
}

export { NotFoundPage };
