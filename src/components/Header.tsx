import { Link, NavLink } from 'react-router-dom';

function Header() {
  const hdrMainClasses =
    'min-h-[50px] mx-auto max-w-2xl font-semibold text-sky-700/50';
  const hdrContentClasses = 'flex justify-between items-center px-5';
  const hdrClasses = `${hdrContentClasses} ${hdrMainClasses}`;

  return (
    <section className="bg-gradient-to-b from-indigo-400/25 via-yellow-500/25">
      <nav className={hdrClasses}>
        <Link to="/">
          <span className="font-bold">Kamajor</span>'s gallery
        </Link>

        <ul className="flex gap-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export { Header };
