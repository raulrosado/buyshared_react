import React from 'react';
//import { Button } from '@nextui-org/react';
import { Container, Row, Text, Col, Avatar} from "@nextui-org/react";


function Head(props) {
  console.log(props.srcdir)

  const style = {
    padding: 10
  };

  return (
    <div style={style}>
      <Container fluid Display="flex" justify="space-between" AlignItems="flex-end" gap={0}>
        <Row fluid align="center" justify="space-between" gap={0}>
          <Col span={8} gap={0} style={{textAlign: '-webkit-left', display: 'flex'}} justify="center" align="center">
            <Text 
              h3 
              size={15} 
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
                m: 0
              }}
              weight="bold">
               Hola:
            </Text>
            <Text
              h1
              size={30}
              css={{
                textGradient: "45deg, $purple600 -20%, $pink600 100%",
              }}
              weight="bold"
            >
              Raul
          </Text>
          </Col>
          <Col span={4} justify="flex-end" AlignItems="flex-end" gap={0} style={{textAlign: '-webkit-right'}}>
            <Avatar
              size="lg"
              src={props.srcdir}
              color="primary"
              bordered
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Head