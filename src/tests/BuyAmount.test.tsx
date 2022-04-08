import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BuyAmount from "../components/BuyAmount";

describe("Buy amount input form", () => {
	const amountMock = 0;
	const setAmountFunction = jest.fn();

	it("changes the value on input field edit", async () => {
		render(
			<BuyAmount buyAmount={amountMock} setBuyAmount={setAmountFunction} />
		);

		const input = screen.getByDisplayValue(0);
		await userEvent.type(input, "5");
		expect(setAmountFunction).toHaveBeenCalledWith(5);
	});
	it("increments the value on plus button click", async () => {
		render(
			<BuyAmount buyAmount={amountMock} setBuyAmount={setAmountFunction} />
		);

		const button = screen.getByText("+");
		await userEvent.click(button);
		expect(setAmountFunction).toHaveBeenCalledWith(1);
	});
	it("decrements the value on minus button click", async () => {
		render(
			<BuyAmount buyAmount={amountMock} setBuyAmount={setAmountFunction} />
		);

		const button = screen.getByText("-");
		await userEvent.click(button);
		expect(setAmountFunction).toHaveBeenCalledWith(-1);
	});
});
