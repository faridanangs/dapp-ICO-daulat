import React, { createContext, useContext, useEffect, useState } from 'react'

// intenal import
import {
    CheckIfWalletConnected, connectWallet,
    connectingTokenContract, connectingTokenSaleContract,
    getBalance
} from "../Utils/index"
import { ethers } from 'hardhat';

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
    const TOKEN_ICO = "TOKEN SALL DAPP"

    // state variable
    const [address, setAddress] = useState("")
    const [balance, setBalance] = useState("")
    const [nativeToken, setNativeToken] = useState("")
    const [tokenHolders, setTokenHolders] = useState([])
    const [tokenSale, setTokenSale] = useState("")
    const [currentHolder, setCurrentHolder] = useState("")

    // fetch contract data
    const fetchInitialData = async () => {
        try {
            // get user acccount
            const account = await CheckIfWalletConnected()

            // get user balance
            const balance = await getBalance();
            setBalance(ethers.utils.formatUnits(balance.toString()))

            // token contract
            const TOKEN_CONTRACT = await connectingTokenContract();

            let tokenBalance;
            if (account) {
                tokenBalance = TOKEN_CONTRACT.balanceOf(account);
            } else {
                tokenBalance = 0;
            }

            // get alltoken data
            const tokenName = await TOKEN_CONTRACT.name()
            const tokenSymbol = await TOKEN_CONTRACT.symbol()
            const tokenStandard = await TOKEN_CONTRACT.standard()
            const tokenTotalSuply = await TOKEN_CONTRACT.totalSuply()
            const tokenOwnerOfContract = await TOKEN_CONTRACT.ownerOfContract()
            const tokenHolders = await TOKEN_CONTRACT._userId()
            const tokenAddress = TOKEN_CONTRACT.address;

            const nativeToken = {
                tokenName: tokenName,
                tokenSymbol: tokenSymbol,
                tokenStandard: tokenStandard,
                tokenTotalSuply: ethers.utils.formatEther(tokenTotalSuply.toString()),
                tokenOwnerOfContract: tokenOwnerOfContract,
                tokenAddress: tokenAddress,
                tokenHolders: tokenHolders.toNnmber(),
                tokenBalance: ethers.utils.formatEther(tokenBalance.toString())
            }
            setNativeToken(nativeToken)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchInitialData()
    },[])

    return <StateContext.Provider value={{ TOKEN_ICO }}>{children}</StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext);