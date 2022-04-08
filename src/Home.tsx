import React from "react";
import styled from "styled-components";

function Home() {
	return (
		<>
			<p>
				Welcome to our online storefront! We are still setting things up, so you
				currently cannot buy anything, but feel free to look at our menu and
				prepare a cart in the meanwhile.
			</p>
			<Info>
				In case you didn&apos;t know, this is a fake store. You can find my
				GitHub{" "}
				<a
					href="https://github.com/AtomicChocolate"
					target="_blank"
					rel="noreferrer"
				>
					here
				</a>
				.
			</Info>
		</>
	);
}

const Info = styled.p`
	color: gray;
	font-style: italic;
`;

export default Home;
