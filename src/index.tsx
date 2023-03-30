import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: "aaaa",
					type: "deposit",
					category: "Dev",
					amount: 600,
					createdAt: new Date("2021-02-12 09:00:00"),
				},
				{
					id: 2,
					title: "aaaa",
					type: "withdraw",
					category: "Dev",
					amount: 1000,
					createdAt: new Date("2021-02-12 09:00:00"),
				},
			],
		});
	},

	routes() {
		this.namespace = "api";

		this.get("/transactions", () => {

			// retorna todas as transacoes na base de dados
			return this.schema.all("transaction");
		});

		this.post("/transactions", (schema, request) => {
			const data = JSON.parse(request.requestBody);
			// cria um schema com todas as transacoes feitas
			return schema.create("transaction", data);
		});
	},
});

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<App></App>
	</React.StrictMode>
);
