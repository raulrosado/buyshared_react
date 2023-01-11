import React from "react";
import { Card, Grid, Text, Checkbox } from "@nextui-org/react";
import GrupoAvatar from "./GrupoAvatar";

function Task() {
  const pictureUsers = [
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    "https://i.pravatar.cc/150?u=a04258114e29026702d",
  ];

  return (
    <div style={{ padding: "10px" }}>
      <Grid.Container gap={0} justify="flex-start">
        <Card isPressable>
          <Card.Header>
            <Grid.Container css={{ pl: "$6" }}>
              <Grid xs={10}>
                <Grid.Container>
                  <Grid xs={12} justify="flex-start">
                    <Text h4 css={{ lineHeight: "$xs" }}>
                      Compras de la semana
                    </Text>
                  </Grid>
                  <Grid xs={12} justify="flex-start">
                    <GrupoAvatar usuarios={pictureUsers} size={"sm"}/>
                  </Grid>
                </Grid.Container>
              </Grid>
              <Grid xs={2} justify="flex-end">
                <Checkbox defaultSelected size="xl" />
              </Grid>
            </Grid.Container>
          </Card.Header>
        </Card>
      </Grid.Container>
    </div>
  );
}

export default Task;
