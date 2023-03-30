import { Container } from "./styles";
import income_img from "../../assets/income.svg";
import total_img from "../../assets/total.svg";
import outcome_img from "../../assets/outcome.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";

export function Summary() {
	const transactions = useContext(TransactionsContext);
	
	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>

					<img src={income_img} alt="" />
				</header>
				<strong>R$1000,00</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>

					<img src={outcome_img} alt="" />
				</header>
				<strong>R$1000,00</strong>
			</div>
			<div className="highlight-background">
				<header>
					<p>Total</p>

					<img src={total_img} alt="" />
				</header>
				<strong>R$1000,00</strong>
			</div>
		</Container>
	);
}
