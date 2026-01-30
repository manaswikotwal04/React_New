import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
test("Should render Contact component correctly",()=>{
    render(<Contact/>)
    const heading =screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});
test("Should render Contact Button correctly",()=>{
    render(<Contact/>)
    const button =screen.getByRole("button");
    expect(button).toBeInTheDocument();
});