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
      <section>
        <Grid.Container gap={0} justify="center" style={{ padding: "10px" }}>
          <Grid xs={12}>
            <TopHeadOptions />
          </Grid>
          <Grid xs={12}>
            <Text h2>Viaje al campismo</Text>
          </Grid>
        </Grid.Container>
      </section>
    </div>
  );
}

export default TopHeadImage;
