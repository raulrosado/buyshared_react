import React, { useEffect, useState } from "react";
import { Row, Text } from "@nextui-org/react";
import { Card, Grid, Progress } from "@nextui-org/react";
import GrupoAvatar from "./GrupoAvatar";
import config from '../config/config';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function CardEvent(props) {
  const eventsState = useSelector(state => state.user.events);
  const eventsStateAvatar = useSelector(state => state.user.eventsAvatars);
  
  const [listEvents, setlistEvents] = useState([]);
  const [pictureUsers, setPictureUsers] = useState([]);

  useEffect(() => {
    if(eventsState !== undefined){
      setlistEvents(eventsState)
      setPictureUsers(eventsStateAvatar)
    }
  }, [eventsState])

    return (
      <div>
        <section style={{padding:'10px'}}>
          <Grid.Container gap={0} justify="flex-start">
            {listEvents.map((item, index) => (
              <Grid xs={6} sm={3} key={index} style={{padding:'5px'}}>
                <Link to={`../detallesEventos/${item._id}`} key={index}>
                <Card isPressable>
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={config.URL +"images/"+ item.bg}
                      objectFit="cover"
                      width="100%"
                      height={140}
                      alt={item.nombre}
                    />
                    <div style={{paddingLeft:'10px'}}><Text b>{item.nombre}</Text></div>
                  </Card.Body>
                  <Card.Footer css={{ justifyItems: "flex-start" }}>
                    
                    <Row wrap="wrap" justify="space-between" align="center">
                      <Grid xs={12} style={{padding:'3px'}}>
                        {pictureUsers.length > 0 ? (<GrupoAvatar usuarios={pictureUsers[index]} size={"sm"}/>) : null }
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

