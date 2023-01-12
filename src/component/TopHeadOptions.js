import React from "react";
import { Avatar, Button, Dropdown, Grid, Text, Row } from "@nextui-org/react";
import { LeftArroy } from "../icons/LeftArroy";
import { PlusIcon } from "../icons/PlusIcon";
import { Personplus } from "../icons/Personplus";
import { Productoimg } from "../icons/Productoimg";
import { DeleteDocumentIcon } from "../icons/DeleteDocumentIcon";
import { Dotsverticalround } from "../icons/Dotsverticalround";
import { Link } from "react-router-dom";
import { Modal, Input, Checkbox } from "@nextui-org/react";

function TopHeadOptions() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div style={{width:'100%'}}>
      <Grid.Container gap={0} justify="center">
        <Grid xs={4} justify="flex-start">
          <Link to="/">
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
            <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
              <Dropdown.Item
                key="new"
                command="⌘N"
                // icon={
                //   <Personplus size={22} fill="currentColor" />
                // }
              >
                Agregar Amigo
              </Dropdown.Item>
              <Dropdown.Item
              withDivider
              key="delete"
              color="error"
              command="⌘⇧D"
              description="Eliminar permanentemente la lista"
              icon={<DeleteDocumentIcon size={22} fill="currentColor" />}
            >
              Eliminar Lista
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
            Agregar articulo
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Articulo"
            contentLeft={<Productoimg fill="currentColor" />}
          />
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

export default TopHeadOptions;
