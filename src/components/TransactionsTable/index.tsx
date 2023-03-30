import { useEffect, useState } from "react";
import { json } from "stream/consumers";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
	id: number;
	title: string;
	amount: number;
	type: string;
	category: string;
	createAt: string;
}

export function TransactionsTable() {
	const [transactions, setTransactios] = useState([]);

	useEffect(() => {
		api.get("transactions").then((response) =>
			setTransactios(response.data)
		);
	}, []);

	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction) => (
						<tr>
							<td>Desenvolvimento de website</td>
							<td className="deposit">R$12.000</td>
							<td>Desenvolvimento</td>
							<td>20/02/2021</td>
						</tr>
					))}
				</tbody>
			</table>
		</Container>
	);
}
