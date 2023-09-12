import telegram from '../assets/telegram.svg';
import gitHub from '../assets/gitHub.svg';
import linkedIn from '../assets/linkedIn.svg';

function Footer() {
  const ftrMainClasses = 'mx-auto max-w-2xl font-semibold';
  const ftrContentClasses =
    'flex flex-col justify-center items-center px-5 py-2 gap-2 h-full';
  const ftrClasses = `${ftrContentClasses} ${ftrMainClasses}`;

  return (
    <footer className="min-h-[85px]">
      <section className={ftrClasses}>
        <ul className="flex gap-3">
          <li>
            <a href="https://t.me/KamajorQA" target="_blank" rel="noreferrer">
              <img
                src={telegram}
                alt="Telegram Link"
                className="max-h-[30px]"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/KamajorQA"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gitHub} alt="GitHub Link" className="max-h-[30px]" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/KamajorQA"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedIn}
                alt="LinkedIn Link"
                className="max-h-[30px]"
              />
            </a>
          </li>
        </ul>
        <div className="text-sky-700/70">
          <p>Made by Kamajor © {new Date().getFullYear()}</p>
        </div>
      </section>
    </footer>
  );
}

export { Footer };
