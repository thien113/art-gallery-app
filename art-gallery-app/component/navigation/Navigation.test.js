import Navigation from "./Navigation";
import { render } from "@testing-library/react";

test("should render a navigation bar ", () => {
  const component = render(<Navigation />);
  const NavBarElement = component.getByTestId("nav_bar");

  expect(NavBarElement).toBeInTheDocument();
});

// test("the Link in NavBar should display Spotlight", () => {
//   const link = render(<Link />);
//   const SpotlightLink = link.getByName("nav__link__spotlight");
//   expect(SpotlightLink.textContent).toBe("Spotlight");
// });
