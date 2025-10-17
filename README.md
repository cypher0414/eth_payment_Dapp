# Decentralized Payment Web App

This project is a simple decentralized payment web app that allows users to send ETH through a Solidity smart contract and stores transaction details in a SQLite database using a Node.js backend.

---

## Prerequisites

- Install [Node.js](https://nodejs.org/) (LTS version)
- Install [MetaMask](https://metamask.io/) extension in your browser
- Install [VS Code](https://code.visualstudio.com/) and optionally the [SQLite Viewer extension](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)
- Deploy the smart contract on [Sepolia Testnet](https://blog.ethereum.org/2023/03/01/ethereum-network-upgrade-march-2023/#sepolia)

---

## Backend Setup

1. Open the `backend` folder in VS Code
2. Run these commands in the terminal:
   ```bash
   npm init -y
   npm install express sqlite3 cors body-parser
3. Create a file named `backend.js` and paste the backend server code
4. Start the backend using the command:
   ```bash
   node backend.js

## Frontend Setup

1. Open the `frontend` folder and create a file `index.html`
2. Paste the frontend HTML and JavaScript code into `index.html`
3. Replace `YOUR_DEPLOYED_CONTRACT_ADDRESS` with the deployed contract address from Remix

---

## Smart Contract Deployment

1. Use [Remix IDE](https://remix.ethereum.org/) with MetaMask connected to the Sepolia Testnet.
2. Deploy the `PaymentContract` Solidity contract.
3. Copy the deployed contract address.
4. Paste the copied contract address into your frontend `index.html` file.

---

## Running the Application

1. Start the backend using the following command:
   ```bash
   node backend.js
2. Open `index.html` in your browser using [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or any local web server.
3. Connect your MetaMask wallet.
4. Enter the receiver address and amount, then click "Send Payment".
5. Transaction details will be stored in the SQLite database.

---

## Viewing the Database

1. Open `transactions.db` in VS Code using the [SQLite Viewer extension](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite).
2. Select the `payments` table to view all stored transactions.
3. Alternatively, open `http://localhost:3000/transactions` in your browser to view the data in JSON format.



