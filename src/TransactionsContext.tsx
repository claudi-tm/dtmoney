import { type } from "os";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
	id: number;
	title: string;
	amount: number;
	type: string;
	category: string;
	createdAt: string;
}

interface TransactionProviderProps {
	children: ReactNode;
}

interface TransactionsContextData {
	transactions: Transaction[];
	createTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

export const TransactionsContext = createContext<TransactionsContextData>(
	{} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
	const [transactions, setTransactios] = useState<Transaction[]>([]);

	useEffect(() => {
		api.get("transactions").then((response) =>
			setTransactios(response.data.transactions)
		);
	}, []);

	async function createTransaction(transaction: TransactionInput) {
		await api.post("/transactions", transaction);
	}

	return (
		<TransactionsContext.Provider
			value={{ transactions, createTransaction }}
		>
			{children}
		</TransactionsContext.Provider>
	);
}
