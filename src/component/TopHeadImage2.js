import React, { useEffect, useState } from "react";
import TopHeadOptions from "./TopHeadOptions";
import { Avatar, Grid, Spacer, Text } from "@nextui-org/react";
import "./css/topHeadImagen.css";
import GrupoAvatar from "./GrupoAvatar";
import { PlusIcon } from "../icons/PlusIcon";
import { useDispatch, useSelector } from "react-redux";
import { addLists, addEvents, addListsAvatar, addEventsAvatar } from '../actions';

function TopHeadImage2(props) {
  const dispatch = useDispatch();
  const Stado = useSelector(state => state.user);
  const idList =  Stado.idList;
  const listsState = Stado.lists;
  const listsStateAvatar = Stado.listsAvatars;
  
  const [infoList, setInfoList] = useState({});
  const [pictureUsers, setPictureUsers] = useState([]);

  useEffect(() => {
      
      listsState.map((list,key)=>{
        if(list._id === idList){
          setInfoList(list)
          setPictureUsers(listsStateAvatar[key])
        }
      })
  }, [idList])

  let avatars
  if(pictureUsers.length > 0){
    avatars = <GrupoAvatar usuarios={pictureUsers} size={"md"} />
  }
  
  const otrafun = (option) =>{
    props.cambiarInfo(option)
  }
    return (
    <div>
      <section>
        <Grid.Container gap={0} justify="center" style={{ padding: "10px" }}>
          <Grid xs={12}>
            <TopHeadOptions otrafun={otrafun}/>
          </Grid>
          <Grid xs={12}>
            <Text h2>{infoList.nombre}</Text>
          </Grid>
          <Text h5 style={{ width: "100%", textAlign: "left" }}>
            Miembros:
          </Text>
          <Grid xs={12} className="headMiembros">
            <Grid xs={12} style={{ padding: "10px" }}>
              {avatars}
            </Grid>
          </Grid>
        </Grid.Container>
      </section>
    </div>
  );
}

export default TopHeadImage2;
