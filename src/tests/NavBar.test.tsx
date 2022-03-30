import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "../components/NavBar";
import Main from "../Main";

describe("Nav bar", () => {
	it("takes you to the catalog page", () => {
		render(<Main />);
		const catalogButton = screen.getByRole("button", { name: "Catalog" });
		userEvent.click(catalogButton);
	});
});
