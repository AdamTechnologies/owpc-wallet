import PageHeader from '@/components/PageHeader'
import SettingsStore from '@/store/SettingsStore'
import { cosmosWallets } from '@/utils/CosmosWalletUtil'
import { eip155Wallets } from '@/utils/EIP155WalletUtil'
import { solanaWallets } from '@/utils/SolanaWalletUtil'
// import { multiversxWallets } from '@/utils/MultiversxWalletUtil'
import { tronWallets } from '@/utils/TronWalletUtil'
import { kadenaWallets } from '@/utils/KadenaWalletUtil'
import { Card, Divider, Row, Spacer, Switch, Text } from '@nextui-org/react'
import { Fragment } from 'react'
import { useSnapshot } from 'valtio'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { tezosWallets } from '@/utils/TezosWalletUtil'
import { COLOR } from '@/constants/style'
import Link from 'next/link'


function Security() {
    const {
        eip155Address,
        cosmosAddress,
        solanaAddress,
        // multiversxAddress,
        tronAddress,
        tezosAddress,
        kadenaAddress
    } = useSnapshot(SettingsStore.state)

    return (
        <Fragment>
            <Link href="/settings" passHref>
                <ArrowBackIosNewIcon style={{ float: "left", }} sx={{ color: COLOR.yellow }} />


            </Link>
            <div style={{ marginLeft: "28px", lineHeight: "23px" }}>
                <PageHeader title="Security" />

            </div>

            <Spacer y={1} />



            {/* <Text css={{ color: '$yellow500', marginBottom: '$5', textAlign: 'left', padding: 0 }}>
                Warning: mnemonics and secret keys are provided for development purposes only and should not
                be used elsewhere!
            </Text> */}

            <Text h4 css={{ marginTop: '$5', marginBottom: '$5' }}>
                EIP155 Mnemonic
            </Text>
            <Card bordered borderWeight="light" css={{ minHeight: '100px' }}>
                <Text css={{ fontFamily: '$mono' }}>{eip155Wallets[eip155Address].getMnemonic()}</Text>
            </Card>
            {/* 

            <Text h4 css={{ marginTop: '$10', marginBottom: '$5' }}>
                Cosmos Mnemonic
            </Text>
            <Card bordered borderWeight="light" css={{ minHeight: '100px' }}>
                <Text css={{ fontFamily: '$mono' }}>{cosmosWallets[cosmosAddress].getMnemonic()}</Text>
            </Card>

            <Text h4 css={{ marginTop: '$10', marginBottom: '$5' }}>
                Solana Secret Key
            </Text>
            <Card bordered borderWeight="light" css={{ minHeight: '215px', wordWrap: 'break-word' }}>
                <Text css={{ fontFamily: '$mono' }}>{solanaWallets[solanaAddress].getSecretKey()}</Text>
            </Card> */}

            {/* <Text h4 css={{ marginTop: '$10', marginBottom: '$5' }}>
        MultiversX Mnemonic
      </Text>
      <Card bordered borderWeight="light" css={{ minHeight: '215px', wordWrap: 'break-word' }}>
        <Text css={{ fontFamily: '$mono' }}>
          {multiversxWallets[multiversxAddress].getMnemonic()}
        </Text>
      </Card> */}
{/* 
            <Text h4 css={{ marginTop: '$10', marginBottom: '$5' }}>
                Tron Private Key
            </Text>
            <Card bordered borderWeight="light" css={{ minHeight: '100px', wordWrap: 'break-word' }}>
                <Text css={{ fontFamily: '$mono' }}>{tronWallets[tronAddress].privateKey}</Text>
            </Card>

            <Text h4 css={{ marginTop: '$10', marginBottom: '$5' }}>
                Tezos Mnemonic
            </Text>
            <Card bordered borderWeight="light" css={{ minHeight: '100px', wordWrap: 'break-word' }}>
                <Text css={{ fontFamily: '$mono' }}>{tezosWallets[tezosAddress].getMnemonic()}</Text>
            </Card>

            <Text h4 css={{ marginTop: '$10', marginBottom: '$5' }}>
                Kadena Secret Key
            </Text>
            <Card bordered borderWeight="light" css={{ wordWrap: 'break-word' }}>
                <Text css={{ fontFamily: '$mono' }}>{kadenaWallets[kadenaAddress].getSecretKey()}</Text>
            </Card>

            <Text h4 css={{ marginTop: '$10', marginBottom: '$5' }}></Text> */}
        </Fragment>
    )
}

export default Security