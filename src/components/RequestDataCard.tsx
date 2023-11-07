import { Button, Col, Row, Text } from '@nextui-org/react'
import { useState } from 'react'
import { CodeBlock, codepen } from 'react-code-blocks'

/**
 * Types
 */
interface IProps {
  data: Record<string, unknown>
}

/**
 * Component
 */
export default function RequestDataCard({ data }: IProps) {
  const [show, setShow] = useState(false)
  return (
    <Row>
      <Col>
        <Row justify='space-between'>
          <Text h5>Data</Text>
          <Button css={{ background: "inherit", padding: 0 }} onClick={() => setShow(!show)}>{show ? "Hide Data" : "Show Data"}</Button>
        </Row>
        {show && <CodeBlock
          showLineNumbers={false}
          text={JSON.stringify(data, null, 2)}
          theme={codepen}
          language="json"
        />}
      </Col>
    </Row>
  )
}
