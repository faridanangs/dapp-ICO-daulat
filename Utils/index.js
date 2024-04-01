import React from "react";
import { TOKEN_ADDRESS, TOKEN_ABI, TOKEN_SALE_ABI, TOKEN_SALE_ADDRESS } from "../Context/constants"
import { ethers } from "ethers";
import Web3Modal from "web3modal";

export const CheckIfWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Install Metamask!")
    const accounts = await window.ethereum.request({
      method: "eth_accounts"
    })
    const firstAccount = accounts[0]
    return firstAccount
  } catch (error) {
    console.log(error)
  }
}


export const connectWallet = async () => {
  try {
    if (!window.ethereum) return console.log("Install Metamask!")

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    })

    window.location.reload()
    const firstAccount = accounts[0]
    return firstAccount
  } catch (error) {
    console.log(error)
  }
}


// token contract
const fetchTokenContract = (signerOfProvider) => new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, signerOfProvider);

export const connectingTokenContract = async () => {
  try {
    const web3Modal = Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchTokenContract(signer);
    return contract;
   } catch (error) {
    console.log(error)
  }
}

// get balance
export const getBalance = async () => {
  try {
    const web3Modal = Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    return await signer.getBalance();
   } catch (error) {
    console.log(error)
  }
}
 



// Token sale contract
const fetchTokenSaleContract = (signerOfProvider) => new ethers.Contract(TOKEN_SALE_ADDRESS, TOKEN_SALE_ABI, signerOfProvider);

export const connectingTokenSaleContract = async () => {
  try {
    const web3Modal = Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchTokenSaleContract(signer);
    return contract;
   } catch (error) {
    console.log(error)
  }
}
