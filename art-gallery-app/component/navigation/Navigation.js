import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="nav__bar">
      <Link className="nav__link"href="/">Spotlight</Link>
      <Link className="nav__link" href="/art-pieces">Art Pieces</Link>
      <Link className="nav__link"href="/favorites">Favorites</Link>
    </nav>
  );
}
