import React from 'react'
import TopHeadOptions from './TopHeadOptions'
import { Container, Row, Text, Col,Card} from "@nextui-org/react";
import './css/topHeadImagen.css';

function TopHeadImage() {
  return (
    <div>
      <section className="imgBackground">
        <TopHeadOptions/>
      </section>
    </div>
  )
}

export default TopHeadImage