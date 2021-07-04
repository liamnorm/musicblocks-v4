import { render } from "@testing-library/react";
import App from "./App";
import Wrapper from "./components/Wrapper"

test("renders app", () => {
  render(<Wrapper>
    <App date = {Date.now()}/>
  </Wrapper>);
});
