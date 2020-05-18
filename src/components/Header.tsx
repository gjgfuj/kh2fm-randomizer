import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
	link: {
		color: "green",
		textDecoration: "none",
	},
}));

export const Header: React.FC = () => {
	const classes = useStyles();

	return (
		<header>
			<Container>
				<Typography variant="h4" align="center">
					<Link to="/" className={classes.link}>
						KH2FM Randomizer (Beta)
					</Link>
				</Typography>
				<Typography variant="subtitle1" align="center">
					by{" "}
					<a
						href="https://github.com/afresquet"
						target="_blank"
						rel="noopener noreferrer"
						className={classes.link}
					>
						Alvaro
					</a>{" "}
					(
					<a
						href="http://twitch.valaxor.com"
						target="_blank"
						rel="noopener noreferrer"
						className={classes.link}
					>
						Valaxor
					</a>
					)
				</Typography>
			</Container>
		</header>
	);
};