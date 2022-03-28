import React from "react";
import styled from "styled-components";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
	cartCount: number;
};

const NavBar = (props: Props) => {
	return (
		<Nav>
			<Header href="/">Shop</Header>
			<NavLink href="/catalog">Catalog</NavLink>
			<NavLink href="/cart">Cart({props.cartCount})</NavLink>
		</Nav>
	);
};

const Nav = styled.nav`
	margin: 0;
	background-color: ${(props) => props.theme.navBackground};
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const Header = styled.a`
	margin: 0;
	font-size: xx-large;
	text-decoration: none;
	color: ${(props) => props.theme.link};
	text-align: left;
	margin-right: auto;
`;

const NavLink = styled.a`
	margin: 0;
	font-size: large;
	text-decoration: none;
	color: ${(props) => props.theme.link};
	text-align: center;
	margin-left: 0.5em;
	margin-right: 0.5em;
`;

export default NavBar;
