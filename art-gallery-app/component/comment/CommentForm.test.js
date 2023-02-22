import CommentForm from "./CommentForm";

import { getByRole, render } from "@testing-library/react";

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
    const btnSubmit = getByDisplayValue("submit");
    expect(btnSubmit).toBeTruthy();
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
