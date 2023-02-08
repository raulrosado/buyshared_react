import React from "react";
import TopHeadOptions from "./TopHeadOptions";
import { Avatar, Grid, Spacer, Text,Card,Button } from "@nextui-org/react";
import "./css/topHeadImagen.css";
import GrupoAvatar from "./GrupoAvatar";
import { PlusIcon } from "../icons/PlusIcon";
import config from '../config/config';
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../actions";


function  TopHeadImage(props) {
  const pictureUsers = props.infoList.avatar;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  let avatars;
  if(pictureUsers !== undefined){
    avatars =<GrupoAvatar usuarios={pictureUsers} size={"md"} />
  }
  
  const otrafun = (option) =>{
    props.cambiarInfo(option)
  }

  return (
    <div>
      <section className="imgBackground" style={{backgroundImage: `url(${config.URL}images/${props.infoList.bg})`}}>
        <Grid.Container gap={0} justify="center" style={{ padding: "10px" }}>
          <Grid xs={12}>
            <TopHeadOptions otrafun={otrafun} />
          </Grid>
          <Spacer y={10} />
          <Grid xs={12}>
          <Card isBlurred css={{bgBlur: "#ffffff66"}}>
            <Card.Body>
              <Grid xs={12}>
                <Text h2>{props.infoList.nombre}</Text>
              </Grid>
              <Text h5 style={{ width: "100%", textAlign: "left" }}>
                Miembros:
              </Text>
              <Grid xs={12} className="headMiembros">
                <Grid xs={6} style={{ padding: "10px" }}>
                  {avatars}
                </Grid>
                <Grid xs={6} justify="flex-end" style={{ padding: "10px" }}>
                
                </Grid>
              </Grid>
            </Card.Body>
          </Card>
          </Grid>
        </Grid.Container>
      </section>
    </div>
  );
}

export default TopHeadImage;
