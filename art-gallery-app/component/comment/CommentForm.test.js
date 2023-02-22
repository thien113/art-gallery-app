import { iteratorSymbol } from "immer/dist/internal";
import CommentForm from "./CommentForm";

it("inputRenderCheck", () => {
  const { queryByTitle } = render(<CommentForm />);
  const input = queryByTitle("dummyInputTitle");
  expect(input).toBeTruthy();
});

// const dummyComment = "Is this art?"

// test('should receive a text Input', () => {

//  const input =

//     export(input).toBeInTheDocument()
// })
