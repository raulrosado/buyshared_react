import React, { useEffect,useState } from 'react'
import { Text,Loading} from "@nextui-org/react";
import CardEvent from './CardEvent';
import CardListas from './CardListas';
import { getList } from '../api/getList';

function Eventos(){
  const [lists, setLists] = useState([]);
  const [loadingList, setLoadingList] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(!loadingList){
      setLoading(true);
      getList('63cac0fd78833cbcd745f197').then((res)=> {
        setLists(res.data);
        setLoading(false);
        setLoadingList(true);
      })
    }
  })

  let loadingCond;
  if(loading){
      loadingCond = <Loading type="points" />
  }

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
      {loadingCond}
      
      {lists.map((list, i) => (
        <CardListas key={i} infoList={list} />
      ))}
    </div>
  )
}

export default Eventos;