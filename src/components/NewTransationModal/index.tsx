import ReactModal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

import closeImg from "../../assets/close.svg";
import income_img from "../../assets/income.svg";
import outcome_img from "../../assets/outcome.svg";
import { FormEvent, useContext, useState } from "react";
import { TransactionsContext } from "../../TransactionsContext";

interface NewTransactionModalOpenProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({
	isOpen,
	onRequestClose,
}: NewTransactionModalOpenProps) {
	const { createTransaction } = useContext(TransactionsContext);

	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState(0);
	const [category, setCategory] = useState("");
	const [type, setType] = useState("deposit");

	async function handleCreateNewTransctionModal(event: FormEvent) {
		event.preventDefault();
		await createTransaction({ title, amount, category, type });

		resetModalInputs();

		onRequestClose();
	}

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
			<Container onSubmit={handleCreateNewTransctionModal}>
				<h2>Cadastrar transação</h2>
				<input
					placeholder="Título"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
				<input
					type="number"
					placeholder="Valor"
					value={amount}
					// onChange={(event) => setValue(Number(event.target.value))}
					onChange={(event) => setAmount(Number(event.target.value))}
				/>

				<TransactionTypeContainer>
					<RadioBox
						type="button"
						onClick={() => {
							setType("deposit");
						}}
						isActive={type === "deposit"}
						activeColor="green"
					>
						<img src={income_img} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>

					<RadioBox
						type="button"
						onClick={() => {
							setType("withdraw");
						}}
						isActive={type === "withdraw"}
						activeColor="red"
					>
						<img src={outcome_img} alt="Saida" />
						<span>Saida</span>
					</RadioBox>
				</TransactionTypeContainer>

				<input
					placeholder="Categoria"
					value={category}
					onChange={(event) => setCategory(event.target.value)}
				/>

				<button type="submit">Cadastrar</button>
			</Container>
		</ReactModal>
	);

	function resetModalInputs() {
		setTitle("");
		setAmount(0);
		setCategory("");
		setType("deposit");
	}
}
