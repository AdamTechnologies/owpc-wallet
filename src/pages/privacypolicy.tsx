import PageHeader from '@/components/PageHeader'
import { COLOR } from '@/constants/style'
import { Card, Divider, Spacer, Table, Text } from '@nextui-org/react'
import Link from 'next/link'
import React, { Fragment } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { Box } from '@mui/material'

const privacypolicy = () => {
    return (
        <Fragment>
            {/* <PageHeader title="Privacy Policy" /> */}
            <Link href="/settings" passHref>
                <ArrowBackIosNewIcon style={{ float: 'left' }} sx={{ color: COLOR.yellow }} />
            </Link>
            <div style={{ marginLeft: '28px', lineHeight: '23px' }}>
                <PageHeader title="Privacy Policy" />
            </div>

            <Spacer y={1} />
            <Text style={{ textDecoration: "underline" }}>OWPC Privacy Policy</Text>
            <Spacer y={1} />
            <Spacer y={1} />



            <Text>
                This Privacy Policy for OWPMF Community established under the
                applicable International legal provisions (doing business as OWPC(One
                World Peace Coin)) (“we”, “us”, or “our”), describes how and why we
                might collect, store, use, and/or share (“process”) your information
                when you use our services (“Services”), such as when you:
            </Text>

            <Text>
                Visit our website (“Website”) or any website of ours that links to this
                privacy policy. Engage with us through our subscription based Loyalty
                platform.
            </Text>



            <Text>
                Users and other visitors of the Website are referred to as “you”,
                “your&#39;&#39; or “user”.
            </Text>

            <Text>
                Questions or concerns? Reading this Privacy Policy will help you understand your privacy rights. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions, please contact us at privacy@theowpc.com.
            </Text>
            <Text style={{ textDecoration: "underline" }}>SUMMARY OF KEY POINTS</Text>
            <Text>This summary provides key points from our Privacy Policy, but you can find out more details about any of these topics by clicking the link following each key point or by using the below index of contents to find the section you are looking for.</Text>
            <Divider css={{ margin: "10px" }} />
            <Text>

                What information do we process?

                When you visit, use, or navigate our Services, we may process information depending on how you interact with the Website, the choices you make, and the features you use.

            </Text>
            <Divider css={{ margin: "10px" }} />

            <Text>
                Do we process any sensitive personal information? No, we do not process sensitive personal information.
            </Text>
            <Divider css={{ margin: "10px" }} />
            <Text>

                Do we receive any information from third parties?

                No, we do not receive such information. However, an exception to this would refer to information received from Facebook and Google Analytics.
            </Text>

            <Divider css={{ margin: "10px" }} />

            <Text>
                How do we process your information?

                We process your information using third party data processors to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.
            </Text>

            <Divider css={{ margin: "10px" }} />
            <Text>In what situations and with which types of parties do we share information?

                We do not share your information with the exception of providing it to the relevant third-party service providers as mentioned above.</Text>
                <Divider css={{ margin: "10px" }} />


<Text>
How do we keep your information safe?

We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.

</Text>
<Divider css={{ margin: "10px" }} />
<Text>

What are your rights?
</Text>
<Divider css={{ margin: "10px" }} />
      
   <Text>
   Depending on where you are located geographically, the applicable privacy law may change. Therefore, as a user of our Services and as part of your due diligence, you must check what your jurisdictional privacy rights are.
    </Text>   
<Divider css={{ margin: "10px" }} />
How do I exercise my rights?

The easiest way to exercise your rights is to contact us via privacy@theowpc.com. We will consider and act upon any request in accordance with applicable data protection laws.
      
<Divider css={{ margin: "10px" }} />
      
<Text>
TABLE OF CONTENTS
</Text>
<Text>
WHAT INFORMATION DO WE COLLECT? HOW DO WE PROCESS YOUR INFORMATION?

WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION? WHEN AND WITH WHOM DO WE SHARE YOUR INFORMATION?

WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?

DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES? HOW LONG DO WE KEEP YOUR INFORMATION?

HOW DO WE KEEP YOUR INFORMATION SAFE? DO WE COLLECT INFORMATION FROM MINORS? WHAT ARE YOUR PRIVACY RIGHTS?

CONTROLS FOR DO-NOT-TRACK FEATURES DO WE MAKE UPDATES TO THIS POLICY?

HOW CAN YOU CONTACT US ABOUT THIS POLICY?

HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
</Text>
<Spacer y={1} />

<Text>
1.WHAT INFORMATION DO WE COLLECT?

</Text>
<Text>
Information Automatically Collected
</Text>
<Text>
We automatically collect certain information when you visit, use, or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include usage information, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
</Text>

<Text>
The information we collect includes:
</Text>
<Text>
Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Website and which we record in log files.

Depending on how you interact with us, this log data may include browser type, and settings and

information about your activity on the Website (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
</Text>

<Spacer y={1} />
<Text>
User name and email address as exception to table below, when subscribing to our platform, creating what we call Profile.
</Text>
<Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
        textAlign:"center"
        
      }}
    >
      <Table.Header>
        <Table.Column css={{ textAlign:"center"}}>
        CATEGORY</Table.Column>
        <Table.Column>EXAMPLES</Table.Column>
        <Table.Column>COLLECTED</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>1. Identifiers</Table.Cell>
          <Table.Cell>	
         <Text> Contact details, such as real name, alias, postal address, </Text>
        <Text>telephone or mobile contact number, unique personal identifier,</Text>  
     <Text>online identifier, email address</Text>      

</Table.Cell>
          <Table.Cell>YES

</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell><Text>2. Personal information categories listed</Text> <Text> in the EU GDPR provisions.</Text></Table.Cell>
          <Table.Cell> <Text>Name, contact information, education, employment,</Text>  <Text>
          employment history, and financial information
            </Text></Table.Cell>
          <Table.Cell>NO</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell> <Text>3. Protected classification characteristics</Text> <Text>under the EU GDPR provisions</Text> </Table.Cell>
          <Table.Cell><Text> Contact details, such as real name, alias, postal address,</Text><Text>telephone or mobile contact number, unique personal identifier,</Text>  <Text>online identifier, email address</Text> </Table.Cell>
          <Table.Cell>NO</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>4. Biometric information</Table.Cell>
          <Table.Cell><Text> Contact details, such as real name, alias, postal address,</Text><Text>telephone or mobile contact number, unique personal identifier,</Text>  <Text>online identifier, email address</Text> </Table.Cell>
   <Table.Cell>NO</Table.Cell>
        </Table.Row>
        <Table.Row key="5">
          <Table.Cell>5. Internet or other similar network activity</Table.Cell>
          <Table.Cell><Text> Contact details, such as real name, alias, postal address,</Text><Text>telephone or mobile contact number, unique personal identifier,</Text>  <Text>online identifier, email address</Text> </Table.Cell>
   <Table.Cell>YES

</Table.Cell>
        </Table.Row>
        <Table.Row key="6">
          <Table.Cell>6. Geolocation data</Table.Cell>
          <Table.Cell><Text> Contact details, such as real name, alias, postal address,</Text><Text>telephone or mobile contact number, unique personal identifier,</Text>  <Text>online identifier, email address</Text> </Table.Cell>
   <Table.Cell>YES</Table.Cell>
        </Table.Row>
        <Table.Row key="7">
          <Table.Cell>7. Audio, electronic, visual, thermal, olfactory, or similar information</Table.Cell>
          <Table.Cell><Text> Contact details, such as real name, alias, postal address,</Text><Text>telephone or mobile contact number, unique personal identifier,</Text>  <Text>online identifier, email address</Text> </Table.Cell>
   <Table.Cell>NO</Table.Cell>
        </Table.Row>
        <Table.Row key="8">
          <Table.Cell>8. Message content and correspondence</Table.Cell>
          <Table.Cell><Text> Contact details, such as real name, alias, postal address,</Text><Text>telephone or mobile contact number, unique personal identifier,</Text>  <Text>online identifier, email address</Text> </Table.Cell>
 <Table.Cell>YES</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>


<Text>
<Spacer y={1} />

2.HOW DO WE PROCESS YOUR INFORMATION?
<Spacer y={1} />

</Text>
<Text>
n Short: We process your information using third party data processors to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.

We process your information using third party data processors for a variety of reasons, depending on how you interact with our Services, including:

To deliver and facilitate delivery of Services to the user. We may process your information to provide you with the requested service.

To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.

To send administrative information to you. We may process your information to send you details about our Services, changes to our terms and policies, and other similar information.

To request feedback. We may process your information when necessary to request feedback and to contact you about your use of our Services.

To send you marketing and promotional communications. We may process the information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see "WHAT ARE YOUR PRIVACY RIGHTS?" below).

To deliver targeted advertising to you. We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more.

To protect our Services. We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.

To identify usage trends. We may process information about how you use our Services to better understand how they are being used so we can improve them.

To determine the effectiveness of our marketing and promotional campaigns. We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.

To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.


</Text>
<Spacer y={1} />

<Text>
    3.WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
</Text>
<Spacer y={1} />

<Text>
In Short: We only process your information when we believe it is necessary and we have a valid legal reason (legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.



Your personal information will be gathered and processed in alignment with the intended legal objectives of the Federal Data Protection Act.

</Text>
<Spacer y={1} />

<Text>
If you are located in the EU or UK
</Text>
<Spacer y={1} />

<Text>
    
The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your information. As such, we may rely on the following legal bases to process your information:

Consent. We may process your information if you have given us permission (i.e., consent) to use your information for a specific purpose. You can withdraw your consent at any time. Learn more about withdrawing your consent.

Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.

Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.

In legal terms, we are generally the “data controller” under European data protection laws of the personal information described in this Privacy Policy, since we determine the means and/or purposes of the data processing we perform.


</Text>
<Text css={{textDecoration:"underline"}}>If you are located in the UAE</Text>
<Text>
The UAE Personal Data Protection Law, Federal Decree Law No. 45 of 2021 regarding the Protection of Personal Data is the legislation that provides a consolidated view on how confidentiality of information and how privacy of individuals in the UAE are protected. It provides a proper governance for data management and protection and defines the rights and duties of all parties concerned.

The law defines the controls for the processing of personal data and the general obligations of companies that have personal data to secure it and maintain its confidentiality and privacy. It prohibits the processing of personal data without the consent of its owner, except for some cases in which the processing is necessary to protect the public interest or to carry out any of the legal procedures and rights.

The law gives the owner of the data the right to request for corrections of inaccurate personal data and to restrict or stop the processing of his personal data and it sets out the requirements for the cross-border transfer and sharing of personal data for processing purposes.
</Text>
<Spacer y={1} />


<Text>4.WHEN AND WITH WHOM DO WE SHARE YOUR INFORMATION?</Text>
<Spacer y={1} />

<Text>
In Short: We may share information in specific situations described in this section and/or with the following categories of third parties.

Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, data processors like Google and Facebook analytics, contractors, or agents (“third parties”) who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct. The categories of third parties we may share personal information with are as follows:

Affiliate Marketing Programs Data Analytics Services



We also may need to share your personal information in the following situations:

When we use Google Maps Platform APIs. We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API).
</Text>
<Spacer y={1} />


<Text>
5.WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
</Text>
<Spacer y={1} />

<Text>
In Short: We are not responsible for the safety of any information that you share with third parties that we may link to or who advertise on our Services, but are not affiliated with, our Services.

The Services may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications.

The inclusion of a link towards a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this Privacy Policy. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Services. You should review the policies of such third parties and contact them directly to respond to your questions.
</Text>
<Spacer y={1} />


<Text>6.DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
<Spacer y={1} />

</Text>
<Text>
In Short: We may use cookies and other tracking technologies to collect and store your information.

Likewise, we may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Cookies are a small amount of data that is sent to the user’s browser and stored in the user’s computer hard drive. Only when the user uses his/her computer to access the Website can the Cookies be sent to the user’s computer hard drive. Cookies are frequently used to record the habits and preferences of visitors when they browse various items on the Website. Cookies collect anonymous collective statistics which do not contain personal data. Cookies cannot be used to obtain data from the user’ hard drive, the user’s email address or personal data; they can enable the Website to recognize the user’s web browser as well as capture and remember information. The user can choose to disable cookies, since most browsers give users an opportunity to choose to set their web browsers to reject Cookies or to notify users upon the installation of Cookies. Users should be aware that they may be unable to start or use certain features of the Website if they opt to disable Cookies.
</Text>
<Spacer y={1} />

<Text>7.HOW LONG DO WE KEEP YOUR INFORMATION?</Text>
<Spacer y={1} />

<Text>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless otherwise required by law.

We will only keep your information for as long as it is necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this policy document will require us to keep your information for longer than six months past the unsubscribe confirmation.

When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</Text>

<Spacer y={1} />

<Text>

    8.HOW DO WE KEEP YOUR INFORMATION SAFE?
</Text>
<Spacer y={1} />

<Text>In Short: We aim to protect your personal information through a system of organizational and technical security measures.

We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. The security measures that we may take include but are not limited to:

Physical measures: users' personal information will be securely stored in a suitable and well-protected location.

Electronic and technical measures: computer data containing users' personal information will be stored within computer systems and storage media that adhere to stringent login restrictions. To transmit users' personal data, encryption methods might be employed.

Management measures: only authorized personnel will have the authority to access users' personal data. These designated staff members are required to adhere to our internal guidelines on maintaining the confidentiality of personal data.

Despite the above-mentioned protective measures, we cannot guarantee that the information transmitted via the Internet is absolutely safe, so we do not provide any guarantees with respect to the security of the personal information that the users provide to the Website; and Haqq Association may not be held liable for any loss or damage arising from or caused by any event that may occur in connection with unauthorized access to the users’ personal information.

Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</Text>

<Spacer y={1} />

<Text>9.DO WE COLLECT INFORMATION FROM MINORS?</Text>
<Spacer y={1} />

<Text>In Short: We do not knowingly collect data from or market to children under 18 years of age. We do not knowingly solicit data from or market to children under 18 years of age. By using the

Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the Profile and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at privacy@theowpc.com.</Text>
<Spacer y={1} />

<Text>
    10.WHAT ARE YOUR PRIVACY RIGHTS?
</Text>
<Spacer y={1} />

<Text>
In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your information. You may review, change, or terminate your subscription and related Profile at any time.

In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section “HOW CAN YOU CONTACT US ABOUT THIS POLICY?” below.

We will consider and act upon any request in accordance with applicable data protection laws.

Withdrawing your consent: If we are relying on your consent to process your information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS POLICY?" below or updating your preferences.

However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.

Unsubscribing from the OWPC Loyalty: You can unsubscribe from our Loyalty platform, marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS POLICY?" below. You will then be removed from the subscription lists and delete your Profile and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.

Cookies and Similar Technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.
</Text>
<Spacer y={1} />

<Text>

11.CONTROLS FOR DO-NOT-TRACK FEATURES
</Text>
<Spacer y={1} />

<Text>
Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Policy.
</Text>

<Spacer y={1} />

<Text>12.DO WE MAKE UPDATES TO THIS POLICY?</Text>
<Spacer y={1} />

<Text>
We may update this Privacy Policy from time to time as necessary to stay compliant with relevant laws. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this Privacy Policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
</Text>
<Spacer y={1} />

<Text>
    13.HOW CAN YOU CONTACT US ABOUT THIS POLICY?
</Text>
<Spacer y={1} />

<Text>
If you have questions or comments about this Policy, you may contact our Data Protection Officer (DPO) by email at privacy@theowpc.com. This is the only valid and official email address through which we communicate with users. If a user uses any other means of communication to contact us, we shall not be obliged to reply and we will not be held liable in any manner whatsoever.
</Text>
<Spacer y={1} />

<Text>
<Spacer y={1} />

14.HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
</Text>
<Spacer y={1} />

<Text>
Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your information, kindly place your request via: privacy@theowpc.com.
</Text>


        </Fragment>
    )
}

export default privacypolicy
