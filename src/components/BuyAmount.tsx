import React, { ChangeEvent } from "react";
import styled from "styled-components";

type Props = {
	buyAmount: number;
	setBuyAmount: (newAmount: number) => void;
};

const BuyAmount = (props: Props) => {
	const amountInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		props.setBuyAmount(+e.target.value);
	};

	return (
		<AmountContainer>
			<AmountInput value={props.buyAmount} onChange={amountInputChange} />
			<IncreaseButton onClick={() => props.setBuyAmount(props.buyAmount + 1)}>
				+
			</IncreaseButton>
			<DecreaseButton onClick={() => props.setBuyAmount(props.buyAmount - 1)}>
				-
			</DecreaseButton>
		</AmountContainer>
	);
};

const AmountContainer = styled.div``;
const AmountInput = styled.input.attrs({ type: "number", min: 0 })``;
const IncreaseButton = styled.button``;
const DecreaseButton = styled.button``;

export default BuyAmount;
