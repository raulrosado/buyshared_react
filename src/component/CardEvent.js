import React, { Component } from "react";
import { Container, Row, Text, Col, Avatar } from "@nextui-org/react";
import { Card, Grid, Progress } from "@nextui-org/react";
import GrupoAvatar from "./GrupoAvatar";
import config from '../config/config';
import { Link } from "react-router-dom";

export default function CardEvent(props) {

    const pictureUsers = props.avatares;
    return (
      <div>
        <section style={{padding:'10px'}}>
          <Grid.Container gap={0} justify="flex-start">
            {props.infoList.map((item, index) => (
              <Grid xs={6} sm={3} key={index} style={{padding:'5px'}}>
                <Link to={`../detallesEventos/${item._id}`} key={index}>
                <Card isPressable>
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={config.URL +"images/"+ item.bg}
                      objectFit="cover"
                      width="100%"
                      height={140}
                      alt={item.title}
                    />
                  </Card.Body>
                  <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                      <Grid xs={12} style={{padding:'3px'}}>
                        <GrupoAvatar usuarios={pictureUsers[index]} size={"sm"}/>
                      </Grid>
                      <Text
                         css={{
                          color: "$accents7",
                          fontWeight: "$semibold",
                          fontSize: "$sm",
                        }}
                      >
                        {item.cant > 0 ? item.cant : 0 } articulos
                      </Text>
                    </Row>
                    <Row>
                      <Progress color="primary" shadow size="xs" value={item.complet} />
                    </Row>
                  </Card.Footer>
                </Card>
                </Link>
              </Grid>
            ))}
          </Grid.Container>
        </section>
      </div>
    );
}

