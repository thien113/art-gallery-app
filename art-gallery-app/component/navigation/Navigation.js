import Link from "next/link";

export default function Navigation() {
  return (
    <>
    <h2 className="header__homepage"></h2>
    <nav className="nav__bar">
      <Link className="nav__link"href="/">Spotlight</Link>
      <Link className="nav__link" href="/art-pieces">Art Pieces</Link>
      <Link className="nav__link"href="/favorites">Favorites</Link>
    </nav>

    </>
  );
}
