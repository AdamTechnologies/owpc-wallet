import PageHeader from '@/components/PageHeader'
import { COLOR } from '@/constants/style'
// import { transactionHistoryData } from '@/data/data'
import SettingsStore from '@/store/SettingsStore'
import { truncate } from '@/utils/HelperUtil'
import { Card, Text } from '@nextui-org/react'
import React, { Fragment, useEffect, useState } from 'react'
import useSWR from 'swr'
import { useSnapshot } from 'valtio'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import { ethers } from 'ethers'

const fetcher = (...args: [string, ...any[]]) => fetch(...args).then(res => res.json())
const Transactionhistory = () => {
    const [transactionHistory,setTransactionHistory]=useState([])
    // console.log("transactionHistory",transactionHistory)
    const {
        eip155Address
    } = useSnapshot(SettingsStore.state)

    const { data: transactionHistoryData, error, isLoading } = useSWR(`/api/moralis/get-wallet-transactions/${eip155Address}`, fetcher)
    // async function getData(){
    //     try {
    //         const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.infura.io/v3/3933fed97cd4414a9cc194834e3a749e")
    //         const history = await provider.getLogs(eip155Address);
    //         console.log({history})
            
    //     } catch (error) {
    //         console.log("errpr",error)
    //     }
    // }
    // useEffect(()=>{
    //     getData()
    // },[])
    
    return (
        <Fragment>
            <PageHeader title="Activity" />
            {
                transactionHistoryData?.data?.result?.length ?
                    transactionHistoryData.data.result.map((transaction: any, index: number) =>
                        <Card
                            key={index}
                            clickable
                            bordered
                            borderWeight="light"
                            css={{
                                position: 'relative',
                                marginBottom: '$6',
                                minHeight: '70px'
                            }}
                            data-testid={`session-card`}
                        >
                            <Card.Body
                                css={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: 'space-between',
                                    overflow: 'hidden'
                                }}
                            >
                                {transaction?.to_address.toLowerCase() === eip155Address.toLowerCase() ?
                                    <div>
                                        <div style={{ display: 'flex' }}>
                                            <SouthWestIcon sx={{ color: COLOR.yellow }} />
                                            <Text h6 color='warning'>
                                                Recieve
                                            </Text>
                                        </div>
                                        <div>
                                            <Text>{truncate(transaction?.value, 8)}</Text>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <div style={{ display: 'flex' }}>
                                            <ArrowOutwardIcon sx={{ color: COLOR.yellow }} />
                                            <Text h6 color='warning'>
                                                Send
                                            </Text>
                                        </div>
                                        <div>
                                            <Text>{truncate(transaction?.value, 8)}</Text>
                                        </div>
                                    </div>
                                }
                                <div style={{ flex: 1, marginLeft: "8rem" }}>
                                    {transaction.to_address &&
                                        <Text h5 css={{ marginLeft: '$9', color: COLOR.mediumYellow }}>
                                            To:  {truncate(transaction.to_address, 7)
                                            }
                                        </Text>}
                                    <Text weight="light" size={13} css={{ marginLeft: '$9', color: COLOR.lightYellow }}>
                                        {transaction?.gas_price}
                                    </Text>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                    : null
            }

        </Fragment>
    )
}

export default Transactionhistory