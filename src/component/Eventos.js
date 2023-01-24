import React, { useEffect,useState } from 'react'
import { Text,Loading} from "@nextui-org/react";
import CardEvent from './CardEvent';
import CardListas from './CardListas';
import { getList } from '../api/getList';

function Eventos(){
  const [lists, setLists] = useState([]);
  const [listsAvatares, setListsAvatares] = useState([]);
  const [loadingList, setLoadingList] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(!loadingList){
      setLoading(true);
      getList('63cac0fd78833cbcd745f197').then((res)=> {
        //cargo el array de imagenes
        setListsAvatares(res.data[res.data.length - 1]);
        //elimino el ultimo elemento del array pq son las imagenes
        let listsMenos = res.data
        listsMenos.pop();
        setLists(listsMenos);
      
        setLoading(false);
        setLoadingList(true);
      })
    }
  })

  let loadingCond;
  if(loading){
      loadingCond = <Loading type="points" />
  }

  console.log(listsAvatares);

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
        <CardListas key={i} infoList={list} avatares={listsAvatares[i]}/>
      ))}
    </div>
  )
}

export default Eventos;