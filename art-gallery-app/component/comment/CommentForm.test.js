import CommentForm from "./CommentForm";

import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

// <--- getting by queryByTitle for changing State, might be overkill... will try with getByTitle as well--->
it("inputRenderCheck", () => {
  const { queryByTitle } = render(<CommentForm />);
  const input = queryByTitle("dummyInputTitle");
  expect(input).toBeInTheDocument();
});

describe("Testing the Input from the CommentForm", () => {
  test("Input should render/ be visible on screen", () => {
    const { getByTitle } = render(<CommentForm />);
    const inputfield = getByTitle("dummyInputTitle");
    expect(inputfield).toBeInTheDocument();
  });

  test("Is the SubmitButton being rendered/ showen on the screen", () => {
    const { queryByRole } = render(<CommentForm />);
    const btnSubmit = queryByRole("button");
    expect(btnSubmit).toBeTruthy();
  });

  // <--- usinhg act()wrapper for State change to be rendered on screen, async-await for test input to be checked--!-->
  test("does the Input receive a Change on input", async () => {
    await act(async () => {
      const { queryByRole } = render(<CommentForm />);
      const InputForComments = queryByRole("input");
      const DummyText = "Is this Art? oder kann das weg...";
      fireEvent.change(InputForComments, {
        target: { value: DummyText },
      });
      await waitFor(() => {
        expect(InputForComments).toHaveTextContent(DummyText);
      });
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
