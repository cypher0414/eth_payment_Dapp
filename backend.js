let provider, signer, contract;

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS"; // Replace this
const abi = [
  {
    "inputs": [{ "internalType": "address payable", "name": "_to", "type": "address" }],
    "name": "pay",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "to", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
    ],
    "name": "PaymentMade",
    "type": "event"
  }
];

async function connectWallet() {
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);
    document.getElementById("wallet").innerText =
      "Connected: " + await signer.getAddress();
    loadHistory();
  } else {
    alert("Please install MetaMask!");
  }
}

async function sendPayment() {
  const to = document.getElementById("to").value;
  const amount = document.getElementById("amount").value;
  try {
    const tx = await contract.pay(to, { value: ethers.utils.parseEther(amount) });
    document.getElementById("status").innerText = " Waiting for confirmation...";
    const receipt = await tx.wait();

    if (receipt.status === 1) {
      document.getElementById("status").innerText = " Transaction confirmed";
      fetch("http://localhost:3000/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: await signer.getAddress(),
          to,
          amount,
          txHash: tx.hash
        })
      });
      loadHistory();
    }
  } catch (err) {
    document.getElementById("status").innerText = " Error: " + err.message;
  }
}

async function loadHistory() {
  try {
    const res = await fetch("http://localhost:3000/transactions");
    const rows = await res.json();
    const historyList = document.getElementById("history");
    historyList.innerHTML = "";
    rows.forEach(r => {
      const li = document.createElement("li");
      li.textContent = `${r.fromAddr} → ${r.toAddr} : ${r.amount} ETH (tx: ${r.txHash.slice(0,10)}...)`;
      historyList.appendChild(li);
    });
  } catch {
    document.getElementById("history").innerHTML =
      "<li>Backend not running</li>";
  }
}
