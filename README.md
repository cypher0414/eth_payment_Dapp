This project is a simple decentralized payment web app that allows users to send ETH through a Solidity smart contract and stores transaction details in a SQLite database using a Node.js backend.

Prerequisites

Install Node.js (LTS version)

Install MetaMask extension in your browser

Install VS Code and optionally the SQLite Viewer extension

Deploy the smart contract on Sepolia Testnet

Backend Setup

Open the backend folder in VS Code

Run these commands

npm init -y

npm install express sqlite3 cors body-parser

Create a file named backend.js and paste the backend server code

Start the backend using the command node backend.js

Frontend Setup

Open the frontend folder and create a file index.html

Paste the frontend HTML and JavaScript code

Replace YOUR_DEPLOYED_CONTRACT_ADDRESS with your deployed contract address from Remix

Smart Contract Deployment

Use Remix IDE and MetaMask connected to Sepolia Testnet

Deploy the Solidity PaymentContract

Copy the deployed contract address and paste it into your frontend file

Running the Application

Start the backend using node backend.js

Open index.html in your browser using Live Server or any local web server

Connect MetaMask wallet

Enter receiver address and amount, then send payment

Transaction details will be stored in the database

Viewing Database

Open transactions.db in VS Code using the SQLite Viewer extension

Select the payments table to view all stored transactions

Alternatively, open http://localhost:3000/transactions
 in your browser to view data in JSON format

 
Author
SHAILESH ARUNKUMAR
GitHub Profile https://github.com/cypher0414