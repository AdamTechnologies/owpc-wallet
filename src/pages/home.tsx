import React from 'react'
import { Fragment, useState } from 'react'
// import { useEvmNativeBalance } from '@moralisweb3/next';
import { useSnapshot } from 'valtio';
import SettingsStore from '@/store/SettingsStore'
import useSWR from 'swr'
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import AssetCard from '@/components/AssetCard';
import { Text } from '@nextui-org/react';
const fetcher = (...args: [string, ...any[]]) => fetch(...args).then(res => res.json())

const Home = () => {
    const {
        testNets,
        eip155Address,
        cosmosAddress,
        solanaAddress,
        // multiversxAddress,
        tronAddress,
        tezosAddress,
        kadenaAddress
    } = useSnapshot(SettingsStore.state)
    console.log("eip155Address", eip155Address)
    const { data, error, isLoading } = useSWR(`/api/moralis/get-wallet-balance/${eip155Address}`, fetcher)
    console.log({ data, error, isLoading });

    const apidata = [
        {
            "token_address": "0x84e82367b9a59c8a192c00501df943566a8174d5",
            "symbol": "OWPCD",
            "name": "OWP TEST",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "14455000000000000000000000",
            "possible_spam": false
        },
        {
            "token_address": "0xfe822f988ae7d155c2c2ce9ceb7e1843fdecc69d",
            "symbol": "YT",
            "name": "YourToken",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "3033000000000000000000",
            "possible_spam": false
        },
        {
            "token_address": "0x769fa9a15a1c800b34d7fad52ff611b8781c19f9",
            "symbol": "OWPCD",
            "name": "OWP TEST",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "14417512601358245778014419",
            "possible_spam": false
        },
        {
            "token_address": "0x69a6201ef617e76ef39eb4c1ccbb8ce09a9a6434",
            "symbol": "BTCBSC",
            "name": "Bitcoin BSC",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "14455000000000000000000000",
            "possible_spam": false
        },
        {
            "token_address": "0x13bc7dcb6b1f8fe8021a2c40b961aa197c5bd1da",
            "symbol": "OWPCD",
            "name": "OWP TEST",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "14455000000000000000000000",
            "possible_spam": false
        }
    ]
    return (
        <Fragment>
            <PageHeader title="Assets" />
            {apidata.length
                ? apidata.map(asset => {
                    const { name, symbol, balance, token_address } = asset

                    return (
                        <AssetCard
                            key={token_address}
                            name={name}
                            symbol={symbol}
                            balance={balance}
                            token_address={token_address}
                        />
                    )
                })
                :
                <Text color='warning' css={{ opacity: '0.5', textAlign: 'center', marginTop: '$5' }}>No Assets</Text>
            }

        </Fragment>
    )
}

export default Home