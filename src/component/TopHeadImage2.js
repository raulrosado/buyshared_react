import React from "react";
import TopHeadOptions from "./TopHeadOptions";
import { Avatar, Grid, Spacer, Text } from "@nextui-org/react";
import "./css/topHeadImagen.css";
import GrupoAvatar from "./GrupoAvatar";
import { PlusIcon } from "../icons/PlusIcon";

function TopHeadImage(props) {
  console.log(props.infoList.avatarList)
  let avatars
  if(props.infoList.avatarList){
    avatars = <GrupoAvatar usuarios={props.infoList.avatarList} size={"md"} />
  }
    return (
    <div>
      <section>
        <Grid.Container gap={0} justify="center" style={{ padding: "10px" }}>
          <Grid xs={12}>
            <TopHeadOptions />
          </Grid>
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
              <Avatar
                bordered
                size="md"
                as="button"
                icon={<PlusIcon fill="currentColor" filled />}
              />
            </Grid>
          </Grid>
        </Grid.Container>
      </section>
    </div>
  );
}

export default TopHeadImage;
