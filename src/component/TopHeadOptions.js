import React from 'react'
import { Container, Row, Text, Col, Avatar, Button, Dropdown, User,Grid } from "@nextui-org/react";
import { LeftArroy } from '../icons/LeftArroy';
import { MenuIcon } from '../icons/MenuIcon';
import { Dotsverticalround } from '../icons/Dotsverticalround';

function TopHeadOptions() {
  return (
    <div>
        <Grid.Container gap={2} justify="center">
            <Grid xs={4} justify="flex-start">
                <Avatar
                    bordered
                    size="md"
                    as="button"
                    squared
                    icon={<LeftArroy fill="currentColor" filled />}
                />
            </Grid>
            <Grid xs={4}>
                
            </Grid>
            <Grid xs={4} justify="flex-end">
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
    </div>
  )
}

export default TopHeadOptions