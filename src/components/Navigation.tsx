import { COLOR } from '@/constants/style'
import { Avatar, Row } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  return (
    <Row justify="space-between" align="center">
      <Link href="/transactionhistory" passHref>
        <a className="navLink" data-testid="accounts">
          <Image alt="accounts icon" src="/icons/accounts-icon.svg" width={27} height={27} />
        </a>
      </Link>

      {/* <Link href="/sessions" passHref>
        <a className="navLink" data-testid="sessions">
          <Image alt="sessions icon" src="/icons/sessions-icon.svg" width={27} height={27} />
        </a>
      </Link> */}

      <Link href="/" passHref>
        <a className="navLink" data-testid="pairings">
          <Avatar
            size="lg"
            css={{ cursor: 'pointer' }}
            color="warning"
            icon={
              <Image
                alt="wallet connect icon"
                src="/owp-loyality.png"
                width={30}
                height={30}
              />
            }
          />
        </a>
      </Link>

      <Link href="/walletconnect" passHref>
        <a className="navLink" data-testid="wc-connect">
          <Image alt="pairings icon" src="/icons/pairings-icon.svg" width={25} height={25} />
        </a>
      </Link>

      <Link href="/settings" passHref>
        <a className="navLink" data-testid="settings">
          <Image alt="settings icon" src="/icons/settings-icon.svg" width={27} height={27} />
        </a>
      </Link>
    </Row>
  )
}
