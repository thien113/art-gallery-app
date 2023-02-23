import { render } from "@testing-library/react";
import FavoriteButton from "./FavoriteButton";

test.todo("checkButtonRendered"),
  () => {
    const { queryByTitle } = render(<FavoriteButton />);
    const btn = queryByTitle("button__favorite-unactive");
    expect(btn).toBeTruthy();
  };

//   not quite working yet...
// describe("clickButton", () => {
//   it("onClick", () => {
//     const { queryByTitle } = render(<FavoriteButton />);
//     const btn = queryByTitle("button__favorite-unactive");
//     expect(btn).toBeTruthy();
//     fireEvent.click(btn);
//   });
// });
