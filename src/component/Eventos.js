import React, { useEffect,useState } from 'react'
import { Text,Loading} from "@nextui-org/react";
import CardEvent from './CardEvent';
import CardListas from './CardListas';
import { getList } from '../api/getList';
import { useDispatch,useSelector } from "react-redux";
import { useNavigate  } from "react-router-dom";
import { getEvent } from '../api/getEvent';

function Eventos(){
  const user = useSelector(state => state.user);
  const [lists, setLists] = useState([]);
  const [listsEvent, setListsEvent] = useState([]);
  const [listsAvatares, setListsAvatares] = useState([]);
  const [listsAvataresEvent, setListsAvataresEvent] = useState([]);
  const [loadingList, setLoadingList] = useState(false);
  const [loadingListEvent, setLoadingListEvent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingEvent, setLoadingEvent] = useState(false);

  let config = {
    headers: {
      Authorization : `Bearer ${user.token}`
    }
  }

  useEffect(() => {
    if(!loadingList){
      setLoading(true); 
      getList(user.user._id,config).then((res)=> {
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
    if(!loadingListEvent){
      setLoading(true); 
      getEvent(user.user._id,config).then((res)=> {
        //cargo el array de imagenes
        setListsAvataresEvent(res.data[res.data.length - 1]);
        //elimino el ultimo elemento del array pq son las imagenes
        let listsMenos = res.data
        listsMenos.pop();
        setListsEvent(listsMenos);
        setLoadingEvent(false);
        setLoadingListEvent(true);
      })
    }
  })

  let loadingCond;
  if(loading){
      loadingCond = <Loading type="points" />
  }
  let loadingCond2;
  if(loadingEvent){
      loadingCond2 = <Loading type="points" />
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
        
      <CardEvent infoList={listsEvent} avatares={listsAvataresEvent}/>
        
      {loadingCond2}
      <Text
          h3
          size={30}
          color="black"
          weight="bold"
          style={{textAlign: 'left',marginLeft:'10px'}}>
        Listas
      </Text>

      {lists.map((list, i) => (
        <CardListas key={i} infoList={list} avatares={listsAvatares[i]}/>
      ))}
      {loadingCond}
    </div>
  )
}

export default Eventos;