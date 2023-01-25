import React from 'react'
import { Card, Grid,Text } from "@nextui-org/react";
import GrupoAvatar from './GrupoAvatar';

export default function CardListas(props) {
    const pictureUsers = props.avatares;

  return (
    <div>
        <section style={{ padding: "10px" }}>
          <Grid.Container gap={2} justify="flex-start">
            <Card isPressable>
                <Card.Header>
                    <Grid.Container css={{ pl: "$6" }}>
                        <Grid xs={12}>
                            <Text h4 css={{ lineHeight: "$xs" }}>
                               {props.infoList.nombre}
                            </Text>
                        </Grid>
                        <Grid xs={12}>
                            <Text css={{ color: "$accents8" }}>{props.infoList.cant} articulos</Text>
                        </Grid>
                    </Grid.Container>
                    <GrupoAvatar usuarios={pictureUsers} size={"sm"}/>
                </Card.Header>
            </Card>
          </Grid.Container>
        </section>
    </div>
  )
}
