import React from 'react'
import { useSelector } from "react-redux";
import {
  Text,
  Avatar,
  Button,
  Dropdown,
  User,
  Grid,
  Switch,
  Modal,
  Input,
  Loading
} from "@nextui-org/react";
import { MenuIcon } from "../icons/MenuIcon";
import { PlusIcon } from "../icons/PlusIcon";
import config from '../config/config';
import { AddNoteIcon } from "../icons/AddNoteIcon.js"
import { postList } from "../api/postList";
import { postEvent } from "../api/postEvent";
import { useNavigate } from "react-router-dom";

function Head() {
  const [visible, setVisible] = React.useState(false);
  const [event, setEvent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const appState = useSelector(state => state.user);
  const handler = () => setVisible(true);
  const navigate = useNavigate();
  const closeHandler = () => {
    setVisible(false);
  };

  const form = document.querySelector("form");

  let header = {
    headers: {
      Authorization: `Bearer ${appState.token}`
    }
  }
  let PostList;

  if (event) {
    header = {
      headers: {
        Authorization: `Bearer ${appState.token}`,
        "Content-Type": "multipart/form-data"
      }
    }

    PostList = () => {
      setLoading(true);
      const formData = new FormData(form);
      postEvent(formData, header).then((res) => {
        setLoading(false);
        setVisible(false);
      });
    }
  } else {
    PostList = () => {
      setLoading(true);
      const data = {
        id_event: '',
        nombre: document.getElementById("name_list").value,
        estado: 1,
        referencia: "",
      }
      postList(data, header).then((res) => {
        setLoading(false);
        setVisible(false);
      });
    }
  }

  const [selected, setSelected] = React.useState(new Set(["rilo"]));
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  if (selected.anchorKey === "logout") {
    localStorage.removeItem('buyshare')
    setSelected("na");
    navigate('/');
  }
  if (selected.anchorKey === "settings") {
    setSelected("na");
    navigate('/setting');
  }

  const evento = (e) => {
    setEvent(e.target.checked);
  }

  let button;
  if (loading) {
    button = <Loading type="points" color="currentColor" size="sm" />
  } else {
    button = <Text color="white">Enviar</Text>
  }


  return (
    <div style={{ padding: "10px" }}>
      <Grid.Container gap={0} justify="center">
        <Grid xs={8}>
          <User
            bordered
            as="button"
            size="lg"
            color="primary"
            name={appState.user.name}
            description={appState.user.apellidos}
            src={appState.user.role === "social" ? (config.URL + "images/" + appState.user.avatar):(appState.user.avatar)}
          />
        </Grid>
        <Grid xs={4} justify="flex-end">
          <Button
            auto
            color="error"
            style={{ marginRight: "10px" }}
            shadow
            onClick={handler}
            icon={<PlusIcon fill="currentColor" filled />}
          />
          <Dropdown placement="bottom-left" shadow>
            <Dropdown.Trigger>
              <Avatar
                bordered
                size="md"
                as="button"
                squared
                icon={<MenuIcon fill="currentColor" filled />}
              />
            </Dropdown.Trigger>
            <Dropdown.Menu
              color="primary"
              shadow aria-label="User Actions"
              selectionMode="single"
              selectedKeys={selected}
              onSelectionChange={setSelected}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  {appState.user.email}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="logout" color="error" withDivider>
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Grid>
      </Grid.Container>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Agregar lista
          </Text>
        </Modal.Header>
        <Modal.Body>
          <form name="addListForm" methot="POST" encType="multipart/form-date">
            <Input
              id="name_list"
              name="name_list"
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Nombre de la lista"
              contentLeft={<AddNoteIcon fill="currentColor" />}
            />
            <Grid.Container gap={2}>
              <Grid>
                <Text id="modal-title" size={18}>
                  Agregar como evento
                </Text>
              </Grid>
              <Grid>
                <Switch shadow color="primary" checked={false} onChange={evento} />
              </Grid>
            </Grid.Container>
            {event ? (<Input clearable name="file" id="file" type="file" color="primary" size="sm" placeholder="File" onChange={(e) => this.handleFile(e)} />) : null}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={PostList}>
            {button}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Head;
