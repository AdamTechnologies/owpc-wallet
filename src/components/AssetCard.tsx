import React from 'react'
import NextLink from 'next/link'
import { Avatar, Card, Link, Text } from '@nextui-org/react'
import { formatBalance, formatMaticBalance, } from '@/utils/HelperUtil'
import { COLOR } from '@/constants/style'

const AssetCard = ({ name, symbol, balance, token_address, decimals }: any) => {
    return (
        // <NextLink href={token_address ?
        //     `/asset?address=${token_address}`
        //     : '#'} passHref>
        <NextLink href={{
            pathname: "asset",
            query: {
                token_address: token_address ?? undefined,
                name: name ?? undefined,
                symbol: symbol ?? undefined,
                balance: balance ?? undefined,
                decimals: decimals ?? undefined
            }
        }}
            passHref>
            <Card
                clickable
                bordered
                borderWeight="light"
                css={{
                    position: "relative",
                    marginBottom: "$6",
                    minHeight: "70px",
                }}
                data-testid={`session-card`}
            >
                <Card.Body
                    css={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 20,
                        }}
                    >
                        <Text h5 css={{ marginLeft: "$12" }} color="warning">
                            {symbol == "MATIC" ? formatMaticBalance(balance) : formatBalance(balance, decimals)}
                        </Text>
                    </div>
                    <div style={{ flex: 1, marginLeft: "13rem" }}>
                        <Text h5 css={{ marginLeft: "$9", color: COLOR.mediumYellow }}>{symbol}</Text>
                        <Text weight="light" size={13} css={{ marginLeft: "$9", color: COLOR.lightYellow }}>
                            {name}
                        </Text>
                    </div>
                </Card.Body>
            </Card>
        </NextLink>
    )
}

export default AssetCard