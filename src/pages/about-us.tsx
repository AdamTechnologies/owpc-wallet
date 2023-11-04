import PageHeader from '@/components/PageHeader'
import RelayRegionPicker from '@/components/RelayRegionPicker'
import SettingsStore from '@/store/SettingsStore'
import { Card, Divider, Row, Spacer, Switch, Text } from '@nextui-org/react'
import { Fragment } from 'react'
import { useSnapshot } from 'valtio'
import Link from 'next/link'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { COLOR } from '@/constants/style'
import { useRouter } from 'next/router'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import LanguageIcon from '@mui/icons-material/Language';
import TelegramIcon from '@mui/icons-material/Telegram';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Image from 'next/image'
import Grow from '@material-ui/core/Grow';
export default function SettingsPage() {
    const router = useRouter()
    return (
        <Fragment>


            <Link href="/settings" passHref>
                <ArrowBackIosNewIcon style={{ float: 'left' }} sx={{ color: COLOR.yellow }} />
            </Link>

            <div style={{ marginLeft: '28px', lineHeight: '23px', marginBottom: "1rem" }}>
                <PageHeader title="About Us" />
            </div>

<Grow
          in={true}
          style={{ transformOrigin: '0 0 0 0' }}
          {...(true ? { timeout: 1000 } : {})}
        >

            
<div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
<Image src='/assets/coin-1-unscreen.gif' alt="my gif" height={140} width={140} />

</div>
        </Grow>

<Spacer y={1}/>
            <Link href='/privacypolicy' passHref>
                <div>
                    <Text h4 css={{ marginBottom: '$5' }}>
                        Privacy Policy
                    </Text>
                    <Row justify="space-between" align="center">
                        <Text color="$gray400"><PrivacyTipIcon fontSize='small'/>Read here</Text>
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
                        <Text color="$gray400"><TextSnippetIcon fontSize='small'/>Read here</Text>
                        <Text color="$gray400"><ArrowForwardIosIcon sx={{ color: COLOR.yellow }} /></Text>

                    </Row>
                </div>
            </Link>
            <Divider y={2} />
            <a href='https://owpc.world/' target='blank'>
                <div>
                    <Text h5 css={{ marginBottom: '$5' }}>
                    About us 
                    </Text>
                    <Row justify="space-between" align="center">
                        <Text color="$gray400"> <LanguageIcon fontSize='small'/> {" "}Visit owpc.world</Text>
                        <Text color="$gray400"><ArrowForwardIosIcon sx={{ color: COLOR.yellow }} /></Text>

                    </Row>
                </div>
            </a>
            <Divider y={2} />
            <div>
                <Text h4 css={{ marginBottom: '$5' }}>
                    Our Socials
                </Text>
                <Link href="#">
                    <Row justify="space-between" align="center" css={{padding:"0.5rem"}}>
                        <Text color="$gray400"><InsertCommentIcon/>Discord</Text>
                        <Text color="$gray400"><ArrowForwardIosIcon sx={{ color: COLOR.yellow }} fontSize='small'/></Text>
                    </Row>
                </Link>
                {/* <Divider y={0.4} /> */}
                <Link href="#">
                    <Row justify="space-between" align="center"  css={{padding:"0.5rem"}}>
                        <Text color="$gray400"><TelegramIcon fontSize='small'></TelegramIcon>Telegram</Text>
                        <Text color="$gray400"><ArrowForwardIosIcon sx={{ color: COLOR.yellow }} fontSize='small'/></Text>
                    </Row>
                </Link>

            </div>
        </Fragment>
    )
}
