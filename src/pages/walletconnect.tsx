import { parseUri } from '@walletconnect/utils'
import PageHeader from '@/components/PageHeader'
import QrReader from '@/components/QrReader'
import { web3wallet } from '@/utils/WalletConnectUtil'
import { Button, Input, Loading, Text } from '@nextui-org/react'
import { Fragment, useState } from 'react'
import { styledToast } from '@/utils/HelperUtil'
import SessionCard from '@/components/SessionCard'
import PairingCard from '@/components/PairingCard'
import { getSdkError } from '@walletconnect/utils'

export default function WalletConnectPage() {
  const [uri, setUri] = useState('')
  const [loading, setLoading] = useState(false)
  const [sessions] = useState(Object.values(web3wallet.getActiveSessions()))
  const [pairings, setPairings] = useState(web3wallet.core.pairing.getPairings())

  async function onDelete(topic: string) {
    await web3wallet.disconnectSession({ topic, reason: getSdkError('USER_DISCONNECTED') })
    const newPairings = pairings.filter(pairing => pairing.topic !== topic)
    setPairings(newPairings)
  }

  async function onConnect(uri: string) {
    try {
      setLoading(true)
      await web3wallet.pair({ uri })
    } catch (error) {
      styledToast((error as Error).message, 'error')
    } finally {
      setUri('')
      setLoading(false)
    }
  }

  return (
    <Fragment>
      <PageHeader title="Connections" />

      <QrReader onConnect={onConnect} />

      <Text size={13} css={{ textAlign: 'center', marginTop: '$10', marginBottom: '$10' }}>
        or use walletconnect uri
      </Text>

      <Input
        css={{ width: '100%' }}
        bordered
        aria-label="wc url connect input"
        placeholder="e.g. wc:a281567bb3e4..."
        onChange={e => setUri(e.target.value)}
        value={uri}
        data-testid="uri-input"
        contentRight={
          <Button
            size="xs"
            disabled={!uri}
            css={{ marginLeft: -60 }}
            onClick={() => onConnect(uri)}
            color="gradient"
            data-testid="uri-connect-button"
          >
            {loading ? <Loading size="sm" /> : 'Connect'}
          </Button>
        }
      />
      <Text h4 color="warning" css={{ marginBottom: '$5',marginTop: '$5' }}>
        Sessions
      </Text>
      {sessions.length
        ? sessions.map(session => {
          const { name, icons, url } = session.peer.metadata

          return (
            <SessionCard
              key={session.topic}
              topic={session.topic}
              name={name}
              logo={icons[0]}
              url={url}
            />
          )
        })
        :
        <Text color='warning' css={{ opacity: '0.5', textAlign: 'center', marginTop: '$5' }}>No sessions</Text>
      }
      <Text h4 color="warning" css={{ marginBottom: '$5',marginTop: '$5' }}>
        Pairings
      </Text>
       {pairings.length ? (
        pairings.map(pairing => {
          const { peerMetadata } = pairing

          return (
            <PairingCard
              key={pairing.topic}
              logo={peerMetadata?.icons[0]}
              url={peerMetadata?.url}
              name={peerMetadata?.name}
              topic={pairing.topic}
              onDelete={() => onDelete(pairing.topic)}
              data-testid={'pairing-' + pairing.topic}
            />
          )
        })
      ) : (
        <Text color="warning" css={{ opacity: '0.5', textAlign: 'center', marginTop: '$5' }}>No pairings</Text>
      )}
    </Fragment>
  )
}
