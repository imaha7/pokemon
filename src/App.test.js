import { render, screen } from "@testing-library/react";
import App from "./App";

test("pokemon", () => {
    render(<App />);
    // const linkElement = screen.getByText("pokemon");
    // expect(linkElement).toBeInTheDocument();
});
