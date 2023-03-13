import { useState } from "react";
import ReactModal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

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
		<>
			<GlobalStyle></GlobalStyle>
			<Header
				onOpenNewTransactionModal={handleOpenNewTransactionModal}
			></Header>
			<Dashboard></Dashboard>
			<ReactModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			>
				<h2>Cadastrar transação</h2>
			</ReactModal>
		</>
	);
}
