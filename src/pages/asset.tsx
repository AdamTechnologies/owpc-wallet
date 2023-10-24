import { useRouter } from 'next/router'
import React, { Fragment, useState } from 'react'
import { Wallet } from 'ethers';
import { useSnapshot } from 'valtio';
import SettingsStore from '@/store/SettingsStore';
import { Button, Input, Spacer, Text } from '@nextui-org/react';
// import Web3 from 'web3';
// const Web3 = require('web3');



const erc20TransferAbi = [{
    "name": "transfer",
    "inputs": [
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
    ],
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
}];


const Asset = () => {

    const { query, replace } = useRouter()
    const { balance, name, symbol, token_address } = query
    const [loading, setLoading] = useState(false)
    const { account } = useSnapshot(SettingsStore.state)
    const [to, setTo] = React.useState('')
    const [amount, setAmount] = React.useState('')
    const {eip155Address}=useSnapshot(SettingsStore.state)
    // console.log(eip155Address)

    // const wallet = Wallet.fromMnemonic(memonic);
    // const privateKey = wallet.privateKey;
    // console.log("privateKEy",memonic,privateKey,wallet)

    // const transferHandler = async () => {
    //     try {
    //         const amountToTransfer=amount;
    //         const recipientAddress=to
    //         setLoading(true)
    //         let memonic: any
    //         if (account == 0) {
    //             memonic = localStorage.getItem("EIP155_MNEMONIC_1")
    //         } else {
    //             memonic = localStorage.getItem("EIP155_MNEMONIC_2")
    //         }
    //         const wallet = Wallet.fromMnemonic(memonic);
    //         const privateKey = wallet.privateKey;
    //         const taddress: any = token_address
    //         const web3 = new Web3('https://sepolia.infura.io/v3/3933fed97cd4414a9cc194834e3a749e'); // Replace with your Ethereum node URL
    //         const tokenContract = new web3.eth.Contract(erc20TransferAbi, taddress);
           
    //         const data = tokenContract.methods.transfer(taddress, amount).encodeABI(); // Replace with your function and arguments
    //         // const data:any = tokenContract.methods.transfer().encodeABI();

    //         // Get the current nonce for the owner's address
    //         const nonce = await web3.eth.getTransactionCount(eip155Address);
    //         const gasPrice = await web3.eth.getGasPrice(); // Get the current gas price
    //         const gasPriceWithBuffer = gasPrice * BigInt(2); // Set a gas price higher than the current price


    //         // Create a raw transaction object
    //         const rawTx = {
    //             nonce: web3.utils.toHex(nonce),
    //             gasPrice: web3.utils.toHex(gasPriceWithBuffer),
    //             gasLimit: web3.utils.toHex(300000), // Adjust the gas limit as needed
    //             to: taddress,
    //             value: '0.00', // No ether transfer
    //             data: data,
    //         };

    //         // Sign the transaction
    //         const signedTx = await web3.eth.accounts.signTransaction(rawTx, privateKey);

    //         // // Send the signed transaction to the Ethereum network
    //         const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    //         console.log('Transaction Hash:', txReceipt.transactionHash);
    //         console.log('Transaction Receipt:', txReceipt);

    //     } catch (error) {
    //         console.log("error", error)
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    return (
        <Fragment>
            <Text h5 css={{ marginLeft: '$9', alignItems: "center" }} color='warning'>
                {balance}
            </Text>
            <Text h4 css={{ marginLeft: '$9' }} color='warning'>
                {symbol}
            </Text>
            <Text h3 css={{ marginLeft: '$9' }} color='warning'>
                {name}
            </Text>
            <Spacer y={0.5} />
            <Input
                clearable
                label="Recipient address"
                css={{ width: '100%' }}
                bordered
                aria-label="wc url connect input"
                placeholder="e.g. a281567bb3e4..."
                onChange={e => setTo(e.target.value)}
                value={to}
                data-testid="uri-input">
            </Input>
            <Spacer y={0.5} />
            <Input
                css={{ width: '100%' }}
                bordered
                label="Amount"
                type='number'
                aria-label="Amount"
                placeholder="000"
                onChange={e => setAmount(e.target.value)}
                value={amount}
                data-testid="uri-input">
            </Input>
            <Spacer y={0.5} />
            <Button
                flat
                css={{ width: '100%' }}
                color="warning"
                // onClick={transferHandler}
                data-testid="session-delete-button"

            >
                Send
                {/* {loading ? <Loading size="sm" color="error" /> : 'Delete'} */}
            </Button>
        </Fragment>
    )
}

export default Asset