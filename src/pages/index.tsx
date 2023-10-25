import React, { useEffect } from 'react'
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
        multiversxAddress,
        tronAddress,
        tezosAddress,
        kadenaAddress
    } = useSnapshot(SettingsStore.state)
    // const [tokens, setTokens] = useState([])
    console.log("eip155Address", eip155Address)
    const { data:tokens, error, isLoading } = useSWR(`/api/moralis/get-wallet-balance/${eip155Address}`, fetcher)
    console.log( tokens, error, isLoading );

    // useEffect(()=>{
    //   if(tokensData){
    //     setTokens
    //   }

    // },[tokensData])
    return (
        <Fragment>
            <PageHeader title="Assets" />
            {tokens?.data?.length
                ? tokens?.data?.map((asset:any) => {
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