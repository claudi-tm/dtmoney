import { createContext, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
	id: number;
	title: string;
	amount: number;
	type: string;
	category: string;
	createdAt: string;
}

export const TransactionsContext = createContext([]);

export function TransctionProvider() {
	const [transactions, setTransactios] = useState<Transaction[]>([]);

	useEffect(() => {
		api.get("transactions").then((response) =>
			setTransactios(response.data.transactions)
		);
	}, []);
}


