import {useState, useEffect} from "react";
import {ethers} from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";
import styles from './styles.module.css';

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [depositAmount, setDepositAmount] = useState(1); 
  const [withdrawAmount, setWithdrawAmount] = useState(1); 
  const [transactionHistory, setTransactionHistory] = useState([]);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  const getWallet = async() => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({method: "eth_accounts"});
      handleAccount(account);
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log ("Account connected: ", account);
      setAccount(account);
    }
    else {
      console.log("No account found");
    }
  }

  const connectAccount = async() => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    // once wallet is set we can get a reference to our deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);
 
    setATM(atmContract);
  }

  const getBalance = async() => {
    if (atm) {
      setBalance((await atm.getBalance()).toNumber());
    }
  }

  const deposit = async () => {
    if (atm) {
      try {
        const tx = await atm.deposit(depositAmount); // Use input value
        await tx.wait();
        getBalance();
        fetchTransactionHistory();
      } catch (error) {
        console.error("Error depositing:", error);
      }
    }
  }

  const withdraw = async () => {
    if (atm) {
      try {
        const tx = await atm.withdraw(withdrawAmount); // Use input value
        await tx.wait();
        getBalance();
        fetchTransactionHistory();
      } catch (error) {
        console.error("Error withdrawing:", error);
      }
    }
  }

  const fetchTransactionHistory = async () => {
    if (atm) {
        try {
            const history = await atm.getTransactionHistory();
            setTransactionHistory(history);
        } catch (error) {
            console.error("Error fetching transaction history:", error);
        }
    }
  };

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet</button>
    }

    if (balance == undefined) {
      getBalance();
    }

    return (
      <div className={styles['user-info']}>
        <p>Your Account Address: {account}</p>
        <p>Your Balance: {balance} ETH</p>
        <p>
          <label htmlFor="depositAmount">Deposit Amount (ETH): </label>
          <input
            type="number"
            id="depositAmount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            style={{ width: "100px" }}
          />
          <button onClick={deposit}>Deposit</button>
        </p>
        <p>
        <label htmlFor="withdrawAmount">Withdraw Amount (ETH): </label>
        <input
          type="number"
          id="withdrawAmount"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
          style={{ width: "100px" }} 
        />
        <button onClick={withdraw}>Withdraw</button>
        </p>
        <h2>Transaction History</h2>
        <div className={styles['transaction-history']}>
          {transactionHistory.map((tx, index) => (
          <li key={index}>
              {`Type: ${tx.transactionType}, Amount: ${tx.amount} ETH, Date & Time: ${new Date(tx.timestamp * 1000).toLocaleString()}`}
          </li>
          ))}
        </div>
      </div>
    )
  }

  useEffect(() => {getWallet();}, []);
  useEffect(() => {fetchTransactionHistory();}, [atm]);

  return (
    <main className="container">
      <header><h1>Welcome to the Metacrafters ATM!</h1></header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center
        }
      `}
      </style>
    </main>
  )
}

