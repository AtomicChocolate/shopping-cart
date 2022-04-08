import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
	cartCount: number;
};

const NavBar = (props: Props) => {
	return (
		<Nav>
			<Header to="/">Shop</Header>
			<NavLink to="/catalog">Catalog</NavLink>
			<NavLink to="/cart">Cart({props.cartCount})</NavLink>
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

const Header = styled(Link)`
	margin: 0;
	font-size: xx-large;
	text-decoration: none;
	color: ${(props) => props.theme.link};
	text-align: left;
	margin-right: auto;
`;

const NavLink = styled(Link)`
	margin: 0;
	font-size: large;
	text-decoration: none;
	color: ${(props) => props.theme.link};
	text-align: center;
	margin-left: 0.5em;
	margin-right: 0.5em;
`;

export default NavBar;
