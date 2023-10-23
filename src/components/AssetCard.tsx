import React from 'react'
import NextLink from 'next/link'
import { Avatar, Card, Link, Text } from '@nextui-org/react'
import { truncate } from '@/utils/HelperUtil'
import { COLOR } from '@/constants/style'

const AssetCard = ({ name, symbol, balance, token_address }: any) => {
    return (
        <NextLink href={token_address ? `/asset?topic=${token_address}` : '#'} passHref>
            <Card
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
                    <Text h5 css={{ marginLeft: '$9' }} color='warning'>
                        {truncate(balance, 7)}
                    </Text>
                    <div style={{ flex: 1, marginLeft: "8rem" }}>
                        <Text h5 css={{ marginLeft: '$9', color: COLOR.mediumYellow }}>
                            {symbol}
                        </Text>
                        <Text weight="light" size={13} css={{ marginLeft: '$9', color: COLOR.lightYellow }}>
                            {name}
                        </Text>
                    </div>

                </Card.Body>

            </Card>
        </NextLink>
    )
}

export default AssetCard