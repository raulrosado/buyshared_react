import React from "react";
import {
  Text,
  Avatar,
  Button,
  Dropdown,
  User,
  Grid,
  Switch,
  Modal,
  Input
} from "@nextui-org/react";
import { MenuIcon } from "../icons/MenuIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { Listplus } from "../icons/Listplus";
import { useSelector } from "react-redux";
import config from '../config/config';
import { AddNoteIcon } from "../icons/AddNoteIcon.js"
import { EditDocumentIcon } from "../icons/EditDocumentIcon.js"

function Head() {
  const [visible, setVisible] = React.useState(false);

  const [selected2, setSelected2] = React.useState(new Set(["text"]));
  const [event, setEvent] = React.useState(false);

  // const selectedValue = React.useMemo(
  //   () => Array.from(selected).join(", ").replaceAll("_", " "),
  //   [selected]
  // );
  const user = useSelector(state => state.user);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  //` if(seleccionado !== selected2.anchorKey){
  //   if(selected2.anchorKey === "add_list"){
  //     setVisible(true);
  //     console.log(selected2.anchorKey)
  //     alert('loco');
  //     setSelecionado(selected2.anchorKey)
  //   }
  // }.`
  const evento = (e) => {
    setEvent(e.target.checked);
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
            name={user.user.name}
            description={user.user.apellidos}
            src={config.URL+"images/"+user.user.avatar}
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
            <Dropdown.Menu color="primary" shadow aria-label="User Actions">
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  {user.user.email}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
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
          <Input
            id="name_list"
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
              <Switch shadow color="primary" checked={false} onChange={evento}/>
            </Grid>
          </Grid.Container>
          {event ? (<Input clearable type="file" color="primary" size="sm" placeholder="File" />) : null }
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Head;
