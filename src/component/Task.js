import React from "react";
import {
  Card,
  Grid,
  Text,
  Checkbox,
  Dropdown,
  Avatar,
  Spacer
} from "@nextui-org/react";
import GrupoAvatar from "./GrupoAvatar";
import { Dotsverticalround } from "../icons/Dotsverticalround";
import { DeleteDocumentIcon } from "../icons/DeleteDocumentIcon";

function Task(props) {
  let checkbock;
  let del;
  if(props.info.estado === 2){
    checkbock = <Checkbox size="xl"  color="success" defaultSelected/>
    del = <Text h4 css={{ lineHeight: "$xs" }} del>{props.info.texto}</Text>
  }else{
    checkbock = <Checkbox size="xl" />
    del = <Text h4 css={{ lineHeight: "$xs" }}>{props.info.texto}</Text>
  }

  return (
    <div style={{ padding: "10px" }}>
      <Grid.Container gap={0} justify="flex-start">
        <Card isPressable>
          <Card.Header>
            <Grid.Container css={{ pl: "$6" }}>
              <Grid xs={10}>
                <Grid.Container>
                  <Grid xs={12} justify="flex-start">
                    {del}
                  </Grid>
                </Grid.Container>
              </Grid>
              <Grid xs={2} justify="flex-end">
                {checkbock}
                <Spacer x={1} />
                <div style={{alignItems:'center',display: 'flex'}}>
                  <Dropdown placement="bottom-left" style={{marginTop:'10px'}}>
                    <Dropdown.Trigger>
                      <Avatar
                        size="sm"
                        as="button"
                        icon={<Dotsverticalround fill="currentColor" filled />}
                      />
                    </Dropdown.Trigger>
                    <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
                      <Dropdown.Item
                        key="delete"
                        color="error"
                        icon={
                          <DeleteDocumentIcon size={22} fill="currentColor" />
                        }
                      >
                        Eliminar
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Grid>
            </Grid.Container>
          </Card.Header>
        </Card>
      </Grid.Container>
    </div>
  );
}

export default Task;
