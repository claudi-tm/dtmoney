import { useState } from "react";
import logo from "../../assets/logo.svg"
import ReactModal from "react-modal";
import { Container, Content } from "./styles";


export function Header() {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true);
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false)
	}

	return (
		<Container>
			<Content>
				<img src={logo} alt="dt money" />
				<button type="button" onClick={handleOpenNewTransactionModal}>Nova transação</button>

			</Content>
			<ReactModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
				<h2>Cadastrar transação</h2>
			</ReactModal>
		</Container>
	);
}
