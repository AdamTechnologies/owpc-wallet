import { useRouter } from 'next/router'
import React, { Fragment, useState } from 'react'
import { Wallet } from 'ethers';
import { useSnapshot } from 'valtio';
import SettingsStore from '@/store/SettingsStore';
import { Button, Input, Spacer, Text } from '@nextui-org/react';
import { ethers } from 'ethers'
import { formatBalance, formatMaticBalance } from '@/utils/HelperUtil';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { COLOR } from '@/constants/style';
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
    const head: any = name
    const [loading, setLoading] = useState(false)
    const { account } = useSnapshot(SettingsStore.state)
    const [to, setTo] = React.useState('')
    const [amount, setAmount] = React.useState('')
    const { eip155Address } = useSnapshot(SettingsStore.state)
    // console.log(eip155Address)

    // const wallet = Wallet.fromMnemonic(memonic);
    // const privateKey = wallet.privateKey;
    // console.log("privateKEy",memonic,privateKey,wallet)

    const transferHandler = async (e: any) => {
        e.preventDefault()
        try {
            setLoading(true)
            let memonic: any
            if (account == 0) {
                memonic = localStorage.getItem("EIP155_MNEMONIC_1")
            } else {
                memonic = localStorage.getItem("EIP155_MNEMONIC_2")
            }
            const walletdata = Wallet.fromMnemonic(memonic);
            const privateKey = walletdata.privateKey;
            const taddress: any = token_address
            const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.infura.io/v3/3933fed97cd4414a9cc194834e3a749e');
            const wallet = new ethers.Wallet(privateKey, provider);
            const gasLimit = 200000;
            const tokenContract = new ethers.Contract(taddress, erc20TransferAbi, wallet);
            const amountInWei = ethers.utils.parseEther(amount);

            // // Transfer tokens to the specified address
            const tx = await tokenContract.transfer(to, amountInWei, { gasLimit });

            // Wait for the transaction to be mined
            const resp = await tx.wait();
            console.log("resp", resp)
            setLoading(false)
            return tx.hash;

        } catch (error) {
            console.log("error", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Fragment>
            <Link href="/" passHref>
                <ArrowBackIosNewIcon style={{ float: "left", }} sx={{ color: COLOR.yellow }} />
            </Link>
            <div style={{ marginLeft: "28px", lineHeight: "23px" }}>
                <PageHeader title={head} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "2rem" }}>
                {balance && symbol &&
                    <Text h3 color='warning'>
                        { symbol == "MATIC" ? formatMaticBalance(String(balance)) : formatBalance(String(balance))}
                    </Text>
                }
                <Text h4 color='warning'>
                    {symbol}
                </Text>
                <Text h6 color='warning'>
                    {name}
                </Text>
            </div>

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
                onClick={transferHandler}
                data-testid="session-delete-button"

            >
                Send
                {/* {loading ? <Loading size="sm" color="error" /> : 'Delete'} */}
            </Button>
        </Fragment>
    )
}

export default Asset