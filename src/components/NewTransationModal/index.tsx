import ReactModal from "react-modal";
import { Container } from "./styles";

import closeImg from "../../assets/close.svg"

interface NewTransactionModalOpenProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({
	isOpen,
	onRequestClose,
}: NewTransactionModalOpenProps) {
	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<button type="button" onClick={onRequestClose} className="react-modal-close"> <img src={closeImg} alt="close_image" /></button>
			<Container>
				<h2>Cadastrar transação</h2>
				<input placeholder="Título" />
				<input type="number" placeholder="Valor" />
				<input placeholder="Categoria" />

				<button type="submit">Cadastrar</button>
			</Container>
		</ReactModal>
	);
}
