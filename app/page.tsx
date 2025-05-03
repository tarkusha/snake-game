"use client";

import { useState, useRef } from "react";
import { ethers } from "ethers";
import './styles.css';


export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");
  const [theme, setTheme] = useState("light");
  const [isRotated, setIsRotated] = useState(false);
  const pdfRef = useRef(null);

  async function connectToMonad() {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask!");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
    } catch (error) {
      console.error("Connection error:", error);
    }
  }

  function toggleTheme() {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }

  function rotatePDF() {
    setIsRotated(prev => !prev);
  }

  function openDonate() {
    window.open("https://www.buymeacoffee.com/yourusername", "_blank");
  }

  return (
    <div
      className={theme === "light" ? "app light-theme" : "app dark-theme"}
    >
      <h1>Snake Game (Farcaster + Monad)</h1>

      <button onClick={connectToMonad} className="btn">
        Connect Wallet
      </button>
      {walletAddress && (
        <p>Wallet Address: <strong>{walletAddress}</strong></p>
      )}

      <div className="controls">
        <button onClick={rotatePDF} className="btn">Rotate Screen</button>
        <button onClick={toggleTheme} className="btn">
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
        <button onClick={openDonate} className="btn">Donate</button>
      </div>

      <div
        ref={pdfRef}
        className={`pdf-viewer ${isRotated ? "rotated" : ""}`}
      >
        <p>Snake Game Placeholder</p>
      </div>
    </div>
  );
}
