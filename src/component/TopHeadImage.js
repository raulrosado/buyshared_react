import React from "react";
import TopHeadOptions from "./TopHeadOptions";
import { Avatar, Grid, Spacer, Text } from "@nextui-org/react";
import "./css/topHeadImagen.css";
import GrupoAvatar from "./GrupoAvatar";
import { PlusIcon } from "../icons/PlusIcon";

function TopHeadImage() {
  const pictureUsers = [
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    "https://i.pravatar.cc/150?u=a04258114e29026702d",
  ];
  return (
    <div>
      <section className="imgBackground" style={{backgroundImage: 'url("https://nextui.org/images/fruit-1.jpeg")'}}>
        <Grid.Container gap={0} justify="center" style={{ padding: "10px" }}>
          <Grid xs={12}>
            <TopHeadOptions />
          </Grid>
          <Spacer y={10} />
          <Grid xs={12}>
            <Text h2>Viaje al campismo</Text>
          </Grid>
          <Text h5 style={{ width: "100%", textAlign: "left" }}>
            Miembros:
          </Text>
          <Grid xs={12} className="headMiembros">
            <Grid xs={6} style={{ padding: "10px" }}>
              <GrupoAvatar usuarios={pictureUsers} size={"md"} />
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
