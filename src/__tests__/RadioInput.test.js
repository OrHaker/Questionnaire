import "@testing-library/jest-dom";

import RadioInput from "components/RadioInput";
test("Sanity check", () => {
  expect(true).toBe(true);
});

it("should render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RadioInput />, div);
});
