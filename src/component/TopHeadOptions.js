import React from "react";
import { Avatar, Button, Dropdown, Grid, Text, Row } from "@nextui-org/react";
import { LeftArroy } from "../icons/LeftArroy";
import { MenuIcon } from "../icons/MenuIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { Dotsverticalround } from "../icons/Dotsverticalround";
import { Link } from "react-router-dom";
import { Modal, Input, Checkbox } from "@nextui-org/react";
import { Mail } from "../icons/Mail";
import { Password } from "../icons/Password";

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
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics">Analytics</Dropdown.Item>
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
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TopHeadOptions;
