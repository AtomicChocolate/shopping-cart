import React, { ChangeEvent } from "react";
import styled from "styled-components";

type Props = {
	buyAmount: number;
	setBuyAmount: (newAmount: number) => void;
	//compact: boolean;
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
			<DecreaseButton
				onClick={() => props.setBuyAmount(Math.max(props.buyAmount - 1, 1))}
			>
				-
			</DecreaseButton>
		</AmountContainer>
	);
};

const AmountContainer = styled.div`
	white-space: nowrap;
	display: inline-block;
	margin: 1%;
`;
const AmountInput = styled.input.attrs({ type: "number", min: 1 })`
	width: 5ch;
`;
const IncreaseButton = styled.button``;
const DecreaseButton = styled.button``;

export default BuyAmount;
