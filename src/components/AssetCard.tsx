import React from 'react'
import NextLink from 'next/link'
import { Avatar, Card, Col, Link, Row, Text } from '@nextui-org/react'
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
                    // position: "relative",
                    marginBottom: "$6",
                    minHeight: "70px",
                }}
                data-testid={`session-card`}
            >
                <Card.Body
                // css={{
                //     flexDirection: "column",
                //     alignItems: "center",
                //     justifyContent: "space-between",
                //     overflow: "hidden",
                // }}
                >
                    {/* <div
                        // style={{
                        //     position: "absolute",
                        //     left: 0,
                        //     top: 20,
                        // }}
                    > */}

                    <Row justify="space-around" align="center">
                        <Col>
                            <Text h5 css={{ marginLeft: "$1" }} color="warning">
                                {symbol == "MATIC" ? formatMaticBalance(balance) : formatBalance(balance, decimals)}
                            </Text>
                        </Col>
                        {/* </div> */}
                        {/* <div style={{ flex: 1, marginLeft: "13rem" }}> */}
                        <Col>
                            <Text h5 css={{ marginLeft: "$1", color: COLOR.mediumYellow }}>{symbol}</Text>
                            <Text weight="light" size={13} css={{ marginLeft: "$1", color: COLOR.lightYellow }}>
                                {name}
                            </Text>
                        </Col>
                        {/* </div> */}
                    </Row>
                </Card.Body>
            </Card>
        </NextLink>
    )
}

export default AssetCard