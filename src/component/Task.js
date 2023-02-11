import React, { useEffect, useState } from "react";
import {
  Card,
  Grid,
  Text,
  Checkbox,
  Button,
  Loading,
  Spacer
} from "@nextui-org/react";
import GrupoAvatar from "./GrupoAvatar";
import { Dotsverticalround } from "../icons/Dotsverticalround";
import { DeleteDocumentIcon } from "../icons/DeleteDocumentIcon";
import { useDispatch, useSelector } from "react-redux";
import { delTasksState,completTasksState } from "../actions"
import { delTask } from "../api/delTask"
import { postModificTask } from "../api/postModificTask"

function Task(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  let config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  let loadingDiv;
  if (loading) {
    loadingDiv = <Loading color="white" size="sm" />;
  } else {
    loadingDiv = <DeleteDocumentIcon size={22} fill="currentColor" />
  }

  const delTaskFunction = () => {
    setLoading(true)
    delTask(props.info._id, config).then((res) => {
      dispatch(delTasksState(props.info._id))
      setLoading(false)
    })
  };

  const handleCompletTaskFunction = () => {
    postModificTask(props.info._id, config).then((res) => {
      console.log(res)
      let action = {
        "id":props.info._id,
        "estado":res.data.estado
      }
      dispatch(completTasksState(action))
    })
  };


  let checkbock;
  let texto;
  if (props.info.estado === 2) {
    checkbock = <Checkbox size="xl" color="success" defaultSelected onChange={handleCompletTaskFunction} />
    texto = <Text h4 css={{ lineHeight: "$xs" }} del>{props.info.texto}</Text>
  } else {
    checkbock = <Checkbox size="xl" onChange={handleCompletTaskFunction} />
    texto = <Text h4 css={{ lineHeight: "$xs" }}>{props.info.texto}</Text>
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
                    {texto}
                  </Grid>
                </Grid.Container>
              </Grid>
              <Grid xs={2} justify="flex-end">
                {checkbock}
                <Spacer x={1} />
                <div style={{ alignItems: 'center', display: 'flex' }}>
                  <Button
                    auto
                    color="error"
                    style={{ marginRight: "10px" }}
                    shadow
                    onClick={delTaskFunction}
                  >
                    {loadingDiv}
                  </Button>
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
