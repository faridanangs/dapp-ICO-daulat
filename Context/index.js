import React, { createContext, useContext, useEffect, useState } from 'react'
import { ethers } from 'ethers';

// intenal import
import {
    CheckIfWalletConnected, connectWallet,
    connectingTokenContract, connectingTokenSaleContract,
    getBalance
} from "../Utils/index"
import { formatEther, formatUnits } from 'ethers/lib/utils';

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
    const TOKEN_ICO = "TOKEN SALE DAPP"

    // state variablefa
    const [address, setAddress] = useState("")
    const [balance, setBalance] = useState("")
    const [nativeToken, setNativeToken] = useState("")
    const [tokenHolders, setTokenHolders] = useState([])
    const [tokenSale, setTokenSale] = useState("")
    const [currentHolder, setCurrentHolder] = useState("")
    const [addressTokenSaleContract, setAddressTokenSaleContract] = useState("")

    // fetch contract data
    const fetchInitialData = async () => {
        try {
            // get user account
            const account = await CheckIfWalletConnected()
            setAddress(account)

            // get user balance
            const balanceHash = await getBalance()
            const balance = ethers.utils.formatEther(balanceHash)
            setBalance(balance)

            // token contract
            const TOKEN_CONTRACT = await connectingTokenContract();

            let tokenBalance = 0;
            if (account) {
                tokenBalance = await TOKEN_CONTRACT.callStatic.balanceOF(account);
            }

            // get all token data
            const tokenName = await TOKEN_CONTRACT.name();
            const tokenSymbol = await TOKEN_CONTRACT.symbol();
            const tokenStandard = await TOKEN_CONTRACT.standard();
            const tokenTotalSuply = await TOKEN_CONTRACT.totalSuply();
            const tokenOwnerOfContract = await TOKEN_CONTRACT.ownerOfContract();
            const tokenHolders = await TOKEN_CONTRACT._userId();
            const tokenAddress = TOKEN_CONTRACT.address;

            const nativeToken = {
                tokenName: tokenName,
                tokenSymbol: tokenSymbol,
                tokenStandard: tokenStandard,
                tokenTotalSuply: ethers.utils.formatEther(tokenTotalSuply.toString()),
                tokenOwnerOfContract: tokenOwnerOfContract,
                tokenAddress: tokenAddress,
                tokenHolders: tokenHolders.toNumber(),
                tokenBalance: ethers.utils.formatEther(tokenBalance.toString())
            }
            setNativeToken(nativeToken);

            // getting token holder
            const getTokenHolder = await TOKEN_CONTRACT.getTokenHolder()
            setTokenHolders(getTokenHolder)

            // getting token holder data
            if (account) {
                const getTokenHolderData = await TOKEN_CONTRACT.getTokenHolderData(account)

                const currentHolder = {
                    tokenId: getTokenHolderData[0].toNumber(),
                    from: getTokenHolderData[1],
                    to: getTokenHolderData[2],
                    totalToken: ethers.utils.formatEther(getTokenHolderData[3].toString()),
                    tokenHolder: getTokenHolderData[4],

                }
                setCurrentHolder(currentHolder)
            }


            ////// Token sale contract
            const TOKEN_SALE_CONTRACT = await connectingTokenSaleContract();
            const tokenContract = await TOKEN_SALE_CONTRACT.tokenContract();
            const tokenPrice = await TOKEN_SALE_CONTRACT.tokenPrice();
            const tokenSold = await TOKEN_SALE_CONTRACT.tokenSold();
            const tokenSaleBalance = await TOKEN_CONTRACT.balanceOF(tokenContract)
            setAddressTokenSaleContract(tokenContract);

            const tokenSale = {
                tokenPrice: ethers.utils.formatEther(tokenPrice.toString()),
                tokenSold: tokenSold.toNumber(),
                tokenSaleBalance: ethers.utils.formatEther(tokenSaleBalance.toString()),
            }
            setTokenSale(tokenSale)


            console.log(nativeToken, "native")
            console.log(tokenSale, "token sale")
            console.log(currentHolder, "curen holder")
            console.log(TOKEN_CONTRACT, "contract")
            console.log(TOKEN_SALE_CONTRACT, "sale contract")

        } catch (error) {
            console.error(error)
        }
    }



    useEffect(() => {
        fetchInitialData()
    }, [])


    // buy token
    const buyToken = async (nToken) => {
        try {
            const amount = ethers.utils.parseEther(nToken.toString());
            const contract = await connectingTokenSaleContract()
            const buying = await contract.buyToken(nToken, {
                value: amount.toString(),
            })
            await buying.wait()
            console.log(buying, "buying")
            window.location.reload()
        } catch (error) {
            console.error(error)
        }
    }


    // native token transfer
    const transferNativeToken = async () => {
        try {
            const TOKEN_AMOUNT = 5000;
            const tokens = TOKEN_AMOUNT.toString();
            const transferAmount = ethers.utils.parseEther(tokens);

            const contract = await connectingTokenContract()
            const transaction = await contract.transfer(
                addressTokenSaleContract,
                transferAmount
            )
            await transaction.wait()
            window.location.reload()
        } catch (error) {
            console.error(error)
        }
    }


    return <StateContext.Provider value={{
        TOKEN_ICO,
        transferNativeToken,
        buyToken,
        connectWallet,
        setAddress,
        currentHolder,
        address,
        balance,
        nativeToken,
        tokenHolders,
        tokenSale,
    }}>{children}</StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext);
