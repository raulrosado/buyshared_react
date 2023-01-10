import React, { Component } from 'react'
import { Container, Row, Text, Col, Avatar} from "@nextui-org/react";
import CardEvent from './CardEvent';
import CardListas from './CardListas';

export class Eventos extends Component {
  render() {
    return (
      <div >
        <Text
            h3
            size={30}
            color="black"
            weight="bold"
            style={{textAlign: 'left',marginLeft:'10px'}}
        >
          Eventos
        </Text>
        <CardEvent/>
        <CardListas/>
        <CardListas/>
      </div>
    )
  }
}

export default Eventos