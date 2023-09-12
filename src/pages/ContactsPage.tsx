import { PageTitle } from '../components/PageTitle';

function ContactsPage() {
  return (
    <section className="container mx-auto max-w-2xl pt-5 grow">
      <PageTitle titleText={'Contacts'} />

      <ul className="flex flex-col justify-center items-center text-xl gap-4">
        <li className="text-center">
          <h2 className="font-bold">Location</h2>
          <p className="italic">Saint-Petersburg, Russia</p>
        </li>
        <li className="text-center">
          <h2 className="font-bold">Phone / WhatsApp</h2>
          <p className="italic">
            <a
              className="text-sky-700/70 font-semibold"
              href="tel:+79641872190"
            >
              +7 (964) 187-21-90
            </a>
          </p>
        </li>
        <li className="text-center">
          <h2 className="font-bold">Telegram</h2>
          <p className="italic">
            <a
              className="text-sky-700/70 font-semibold"
              href="https://t.me/KamajorQA"
              target="_blank"
              rel="noreferrer"
            >
              @KamajorQA
            </a>
          </p>
        </li>
        <li className="text-center">
          <h2 className="font-bold">Email</h2>
          <p className="italic">
            <a
              className="text-sky-700/70 font-semibold"
              href="mailto:kamajor@mail.ru"
            >
              kamajor@mail.ru
            </a>
          </p>
        </li>
      </ul>
    </section>
  );
}

export { ContactsPage };
