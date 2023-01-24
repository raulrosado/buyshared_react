import React, { Component,useEffect,useState } from 'react'
import { Container, Row, Text, Col, Avatar} from "@nextui-org/react";
import CardEvent from './CardEvent';
import CardListas from './CardListas';
import { getList } from '../api/getList';

function Eventos(){
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getList().then((res)=> setLists(res.data))
  })

 
  return (
    <div >
      <Text
          h3
          size={30}
          color="black"
          weight="bold"
          style={{textAlign: 'left',marginLeft:'10px'}}>
        Eventos
      </Text>
      <CardEvent/>
      {lists.map((list, i) => (
        <CardListas key={i} infoList={list} />
      ))}
    </div>
  )
}

export default Eventos;