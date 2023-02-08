import React, { useState } from "react";
import {
  Avatar,
  Button,
  Dropdown,
  Grid,
  Text,
  Loading,
} from "@nextui-org/react";
import { LeftArroy } from "../icons/LeftArroy";
import { PlusIcon } from "../icons/PlusIcon";
import { Mail } from "../icons/Mail";
import { Personplus } from "../icons/Personplus";
import { Productoimg } from "../icons/Productoimg";
import { DeleteDocumentIcon } from "../icons/DeleteDocumentIcon";
import { Dotsverticalround } from "../icons/Dotsverticalround";
import { Link } from "react-router-dom";
import { Input, Checkbox } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postAddTask } from "../api/postAddTask";
import { delEvent } from "../api/delEvent";
import { delList } from "../api/delList";
import { postSendInvitacion } from "../api/postSendInvitacion";
import ModalCreado from "./ModalCreado";
import { delEventAction,delListAction,addTaskState } from "../actions";

function TopHeadOptions(props) {
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const handler = () => setVisible(true);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const closeHandler = () => {
    setVisible(false);
    setVisible2(false);
  };

  let config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const avisarAlPadre = (option) => {
    props.otrafun(option);
  };

  let botton;
  if (loading) {
    botton = <Loading type="points" color="currentColor" size="sm" />;
  } else {
    botton = <Text color="white">Agregar</Text>;
  }

  const addTask = () => {
    setLoading(true);
    const parametro = {
      task: document.getElementById("taskTexto").value,
      idEvent: user.idEvent,
      idList: user.idList,
    };
    postAddTask(parametro, config).then((res) => {
      setLoading(false);
      console.log(res.data)
      dispatch(addTaskState(res.data))
      closeHandler();
    });
  };

  const addFriend = () => {
    setLoading(true);
    const parametro = {
      email: document.getElementById("txtAddFriend").value,
      idEvent: user.idEvent,
      idList: user.idList,
    };
    postSendInvitacion(parametro, config).then((res) => {
      setLoading(false);
      closeHandler();
    });
  };

  const [selected, setSelected] = React.useState(new Set(["rilo"]));
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  let ModelContenido;
  if (selected.anchorKey === "newFriend") {
    setSelected("na");
    setVisible2(true);
  }
  if (selected.anchorKey === "deleteTask") {
    setSelected("na");
    if (user.idList === 0) {
      dispatch(delEventAction(user.idEvent));
      delEvent( user.idEvent, config).then((res) => {
        console.log('elimino evento')
      })
    }else{
      dispatch(delListAction(user.idList));
      delList(user.idList, config).then((res) => {
        console.log('elimino lista')
      }) 
    }
    navigate('/main');
  }

  return (
    <div style={{ width: "100%" }}>
      <Grid.Container gap={0} justify="center">
        <Grid xs={4} justify="flex-start">
          <Link to="/main">
            <Avatar
              bordered
              size="md"
              as="button"
              squared
              icon={<LeftArroy fill="currentColor" filled />}
            />
          </Link>
        </Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4} justify="flex-end">
          <Button
            auto
            color="error"
            style={{ marginRight: "10px" }}
            shadow
            onPress={handler}
            icon={<PlusIcon fill="currentColor" filled />}
          />
          <Dropdown placement="bottom-left">
            <Dropdown.Trigger>
              <Avatar
                bordered
                size="md"
                as="button"
                squared
                icon={<Dotsverticalround fill="currentColor" filled />}
              />
            </Dropdown.Trigger>
            <Dropdown.Menu
              color="secondary"
              aria-label="Avatar Actions"
              selectionMode="single"
              selectedKeys={selected}
              onSelectionChange={setSelected}
            >
              <Dropdown.Item key="newFriend">Agregar Amigo</Dropdown.Item>
              <Dropdown.Item
                withDivider
                key="deleteTask"
                color="error"
                description="Eliminar permanentemente la lista"
                icon={<DeleteDocumentIcon size={22} fill="currentColor" />}
              >
                Eliminar Lista
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Grid>
      </Grid.Container>
      <ModalCreado
        botton={botton}
        function={addTask}
        visible={visible}
        closeHandler={closeHandler}
        title="Agregar articulo"
      >
        <Input
          id="taskTexto"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Articulo"
          contentLeft={<Productoimg fill="currentColor" />}
        />
      </ModalCreado>
      <ModalCreado
        botton={botton}
        function={addFriend}
        visible={visible2}
        closeHandler={closeHandler}
        title="Agregar Amigo"
      >
        <Text>Se le enviara un email con la invitacion a esta lista</Text>
        <Input
          id="txtAddFriend"
          type="email"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Correo electronico"
          contentLeft={<Mail fill="currentColor" />}
        />
      </ModalCreado>
    </div>
  );
}

export default TopHeadOptions;
