import React, { Component } from 'react'
import { Container, Row, Text, Col, Avatar} from "@nextui-org/react";
import { Card, Grid, Progress } from "@nextui-org/react";


export class CardEvent extends Component {
    render() {
    const list = [
        {
          title: "Orange",
          img: "/images/fruit-1.jpeg",
          price: "$5.50",
        },
        {
          title: "Tangerine",
          img: "/images/fruit-2.jpeg",
          price: "$3.00",
        },
        {
          title: "Cherry",
          img: "/images/fruit-3.jpeg",
          price: "$10.00",
        },
        {
          title: "Lemon",
          img: "/images/fruit-4.jpeg",
          price: "$5.30",
        },
        {
          title: "Avocado",
          img: "/images/fruit-5.jpeg",
          price: "$15.70",
        },
        {
          title: "Lemon 2",
          img: "/images/fruit-6.jpeg",
          price: "$8.00",
        },
        {
          title: "Banana",
          img: "/images/fruit-7.jpeg",
          price: "$7.50",
        },
        {
          title: "Watermelon",
          img: "/images/fruit-8.jpeg",
          price: "$12.20",
        },
      ];
      const pictureUsers = [
        "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        "https://i.pravatar.cc/150?u=a04258114e29026702d",
        "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
      ];
    return (
      <div>
        <Grid.Container gap={2} justify="flex-start">
            {list.map((item, index) => (
                <Grid xs={6} sm={3} key={index}>
                <Card isPressable>
                    <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={"https://nextui.org" + item.img}
                        objectFit="cover"
                        width="100%"
                        height={140}
                        alt={item.title}
                    />
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                        <Grid xs={12}>
                          <Avatar.Group count={12}>
                            {pictureUsers.map((url, index) => (
                              <Avatar
                                key={index}
                                size="sm"
                                pointer
                                src={url}
                                color="gradient"
                                stacked
                              />
                            ))}
                          </Avatar.Group>
                      </Grid>
                        <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                          {item.price}
                        </Text>
                    </Row>
                    <Row>
                        <Progress color="primary" shadow size="xs" value={68} />
                    </Row>
                    </Card.Footer>
                </Card>
                </Grid>
            ))}
            </Grid.Container>
      </div>
    )
  }
}

export default CardEvent