import React from "react";
import { render } from "@testing-library/react";
import Layout from "../renderer/components/templates/MainLayout";

describe("Layout", () => {
  it("renders correctly", () => {
    const { container } = render(<Layout>Hello</Layout>);
    expect(container.firstChild).toBeInTheDocument();
  });
});
