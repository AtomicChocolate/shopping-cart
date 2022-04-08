import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BuyAmount from "../components/BuyAmount";

describe("Buy amount input form", () => {
	const amountMock = 2;
	const setAmountFunction = jest.fn();

	it("changes the value on input field edit", async () => {
		render(
			<BuyAmount buyAmount={amountMock} setBuyAmount={setAmountFunction} />
		);

		const input = screen.getByDisplayValue(2);
		await userEvent.clear(input);
		await userEvent.type(input, "5");
		expect(setAmountFunction).toHaveBeenCalledWith(5);
	});
	it("increments the value on plus button click", async () => {
		render(
			<BuyAmount buyAmount={amountMock} setBuyAmount={setAmountFunction} />
		);

		const button = screen.getByText("+");
		await userEvent.click(button);
		expect(setAmountFunction).toHaveBeenCalledWith(3);
	});
	it("decrements the value on minus button click", async () => {
		render(
			<BuyAmount buyAmount={amountMock} setBuyAmount={setAmountFunction} />
		);

		const button = screen.getByText("-");
		await userEvent.click(button);
		expect(setAmountFunction).toHaveBeenCalledWith(1);
	});
	it("has a minimum limit to the minus button", async () => {
		render(
			<BuyAmount buyAmount={amountMock} setBuyAmount={setAmountFunction} />
		);

		const button = screen.getByText("-");
		await userEvent.dblClick(button);
		expect(setAmountFunction).toHaveBeenLastCalledWith(1);
	});
});
