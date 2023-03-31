import { Container } from "./styles";
import income_img from "../../assets/income.svg";
import total_img from "../../assets/total.svg";
import outcome_img from "../../assets/outcome.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";

export function Summary() {
	const { transactions } = useContext(TransactionsContext);

	const total_deposists = transactions.reduce((acc, transaction) => {
		if (transaction.type === "deposit") return acc + transaction.amount;
		return acc;
	}, 0);
	

	const summary = transactions.reduce((acc, transaction) => {
		if (transaction.type === "deposit") {
			acc.deposits += transaction.amount;
			acc.total += transaction.amount
		} else {
			acc.withdraw += transaction.amount;
			acc.total -= transaction.amount
		}

		return acc;
	}, {
		deposits: 0,
		withdraw: 0,
		total: 0,
	})

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>

					<img src={income_img} alt="" />
				</header>
				<strong>R${total_deposists}</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>

					<img src={outcome_img} alt="" />
				</header>
				<strong>R${summary.withdraw}</strong>
			</div>
			<div className="highlight-background">
				<header>
					<p>Total</p>

					<img src={total_img} alt="" />
				</header>
				<strong>R${summary.total}</strong>
			</div>
		</Container>
	);
}
