import CommentForm from "./CommentForm";

import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

// <--- getting by queryByTitle for changing State, might be overkill... will try with getByTitle as well--->
it("inputRenderCheck", () => {
  const { queryByTitle } = render(<CommentForm />);
  const input = queryByTitle("dummyInputTitle");
  expect(input).toBeTruthy();
});

describe("is the Input from the CommentForm being rendered to the screen", () => {
  test("should render the received Input", () => {
    const { getByTitle } = render(<CommentForm />);
    const inputfield = getByTitle("dummyInputTitle");
    expect(inputfield).toBeTruthy();
  });

  test("Is the SubmitButton being rendered?", () => {
    const { getByDisplayValue } = render(<CommentForm />);
    const btnSubmit = getByDisplayValue("Create a Comment");
    expect(btnSubmit).toBeTruthy();
  });

  // <--- usinhg act()wrapper for State change to be rendered on screen, async-await for test input to be checked--!-->
  test("change on Input is appearing in the Comments-Inputfield", async () => {
    await act(async () => {
      const { getByTitle } = render(<CommentForm />);
      const inputfield = getByTitle("dummyInputTitle");
      const DummyText = "Is this Art? oder kann das weg...";
      await fireEvent.change(inputfield, { target: { value: DummyText } });
      expect(inputfield).toBe(DummyText);
    });
  });
});

// Testing the Form-Input to receiving Dummytext-Input
// describe("change the Input in Comment-Inputfield", ()=>{
//   it("onChange",() = {
//     const { queryByTitle } = render(<CommentForm />);
//     const input = queryByTitle("dummyInputTitle");
//     fireEvent.change(input,{ target:{value:"test Value Bli Bla Blubb"}})
//     expect(input.value).toBe("test Value Bli Bla Blubb")

//   })
// })

// const dummyComment = "Is this art?"

// test('should receive a text Input', () => {

//  const input =

//     export(input).toBeInTheDocument()
// })
