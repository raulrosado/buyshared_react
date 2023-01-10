import React from 'react';
//import { Button } from '@nextui-org/react';
import { Container, Row, Text, Col, Avatar, Button, Dropdown, User,Grid} from "@nextui-org/react";
import {MenuIcon} from '../icons/MenuIcon';

function Head(props) {

  return (
    <div style={{ padding: "10px" }}>
      <Grid.Container gap={0} justify="center">
        <Grid xs={10}>
          <Dropdown placement="bottom-left" shadow>
              <Dropdown.Trigger>
                <User
                  bordered
                  as="button"
                  size="lg"
                  color="primary"
                  name="Tony Reichert"
                  description="@tonyreichert"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
              </Dropdown.Trigger>
              <Dropdown.Menu color="primary" shadow aria-label="User Actions">
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    zoey@example.com
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="settings" withDivider>
                  My Settings
                </Dropdown.Item>
                <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                <Dropdown.Item key="analytics" withDivider>
                  Analytics
                </Dropdown.Item>
                <Dropdown.Item key="system">System</Dropdown.Item>
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
        <Grid xs={2}>
          <Button
                auto
                color="default"
                icon={<MenuIcon fill="currentColor" size={20} />}
              />
        </Grid>
      </Grid.Container>
    </div>
  )
}

export default Head