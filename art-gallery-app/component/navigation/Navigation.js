import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="nav__bar" data-testid="nav_bar">
      <Link className="nav__link" href="/" data-testid="nav__link__spotlight">
        Spotlight
      </Link>
      <Link className="nav__link" href="/art-pieces">
        Art Pieces
      </Link>
      <Link className="nav__link" href="/favorites">
        Favorites
      </Link>
    </nav>
  );
}
