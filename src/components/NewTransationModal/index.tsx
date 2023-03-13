import ReactModal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";

import closeImg from "../../assets/close.svg"
import income_img from "../../assets/income.svg"
import outcome_img from "../../assets/outcome.svg";

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
			<button
				type="button"
				onClick={onRequestClose}
				className="react-modal-close"
			>
				{" "}
				<img src={closeImg} alt="close_image" />
			</button>
			<Container>
				<h2>Cadastrar transação</h2>
				<input placeholder="Título" />
				<input type="number" placeholder="Valor" />

				<TransactionTypeContainer>
					<button type="button">
						<img src={income_img} alt="Entrada" />
						<span>Entrada</span>
					</button>
					<button type="button">
						<img src={outcome_img} alt="Saida" />
						<span>Saida</span>
					</button>
				</TransactionTypeContainer>

				<input placeholder="Categoria" />

				<button type="submit">Cadastrar</button>
			</Container>
		</ReactModal>
	);
}
