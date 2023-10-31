import PageHeader from '@/components/PageHeader'
import RelayRegionPicker from '@/components/RelayRegionPicker'
import SettingsStore from '@/store/SettingsStore'
import { cosmosWallets } from '@/utils/CosmosWalletUtil'
import { eip155Wallets } from '@/utils/EIP155WalletUtil'
import { solanaWallets } from '@/utils/SolanaWalletUtil'
// import { multiversxWallets } from '@/utils/MultiversxWalletUtil'
import { tronWallets } from '@/utils/TronWalletUtil'
import { kadenaWallets } from '@/utils/KadenaWalletUtil'
import { Card, Divider, Row, Switch, Text } from '@nextui-org/react'
import { Fragment } from 'react'
import { useSnapshot } from 'valtio'
import packageJSON from '../../package.json'
import { tezosWallets } from '@/utils/TezosWalletUtil'
import Link from 'next/link'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { COLOR } from '@/constants/style'
import { useRouter } from 'next/router'

export default function SettingsPage() {

  const router = useRouter()

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

  return (
    <Fragment>
      <PageHeader title="Settings" />
      <Link href='/networks' passHref>
        <div>
          <Text h4 css={{ marginBottom: '$5' }}>
            Networks
          </Text>
          <Row justify="space-between" align="center">
            <Text color="$gray400">Available networks</Text>
            <Text color="$gray400"><ArrowForwardIosIcon sx={{ color: COLOR.yellow }} /></Text>

          </Row>
        </div>
      </Link>
      <Divider y={2} />
      <Link href='/privacypolicy' passHref>
        <div>
          <Text h4 css={{ marginBottom: '$5' }}>
            Privacy Policy
          </Text>
          <Row justify="space-between" align="center">
            <Text color="$gray400">Read here</Text>
            <Text color="$gray400"><ArrowForwardIosIcon sx={{ color: COLOR.yellow }} /></Text>

          </Row>
        </div>
      </Link>
      <Divider y={2} />
      <Link href='/termsandconditions' passHref>
        <div>
          <Text h4 css={{ marginBottom: '$5' }}>
            Terms and Conditions
          </Text>
          <Row justify="space-between" align="center">
            <Text color="$gray400">Read here</Text>
            <Text color="$gray400"><ArrowForwardIosIcon sx={{ color: COLOR.yellow }} /></Text>

          </Row>
        </div>
      </Link>

      <Divider y={2} />


      <Link href='/security' passHref>
        <div>
          <Text h4 css={{ marginBottom: '$5' }}>
            Security
          </Text>
          <Row justify="space-between" align="center">
            <Text color="$gray400">Read here</Text>
            <Text color="$gray400"><ArrowForwardIosIcon sx={{ color: COLOR.yellow }} /></Text>

          </Row>
        </div>
      </Link>
      <Divider y={2} />




      <Text h4 css={{ marginBottom: '$5' }}>
        Testnets
      </Text>
      <Row justify="space-between" align="center">
        <Switch
          checked={testNets}
          onChange={SettingsStore.toggleTestNets}
          data-testid="settings-toggle-testnets"
        />
        <Text>{testNets ? 'Enabled' : 'Disabled'}</Text>
      </Row>

      <Divider y={2} />

      <Row justify="space-between" align="center">
        <Text h4 css={{ marginBottom: '$5' }}>
          Relayer Region
        </Text>
        <RelayRegionPicker />
      </Row>

      <Divider y={2} />

      <Row onClick={() => {
        localStorage.removeItem("refresh_token")
        localStorage.removeItem("access_token")
        router.push('/login')

      }} justify="space-between" align="center">
        <Text h4 css={{ marginBottom: '$5', color: "Red" }}>
          Logout
        </Text>
        {/* <RelayRegionPicker /> */}
      </Row>
      <Divider y={2} />

    </Fragment>
  )
}
