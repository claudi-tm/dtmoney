import { useState } from "react";
import ReactModal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransationModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsContext } from "./TransactionsContext";

ReactModal.setAppElement("#root");

export function App() {
	
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
		useState(false);
	

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true);
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false);
	}
	return (
		<TransactionsContext.Provider value={[]}>
			<GlobalStyle></GlobalStyle>
			<Header
				onOpenNewTransactionModal={handleOpenNewTransactionModal}
			></Header>

			<Dashboard></Dashboard>

			<NewTransactionModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			></NewTransactionModal>
		</TransactionsContext.Provider>
	);
}
