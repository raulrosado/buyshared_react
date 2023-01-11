import React from 'react'
import { Card, Grid, Progress,Avatar } from "@nextui-org/react";

export default function GrupoAvatar(props) {
    //console.log(props.usuarios)
  return (
    <div>
       <Avatar.Group>
            {props.usuarios.map((url, index) => (
            <Avatar
                key={index}
                size={props.size}
                pointer
                src={url}
                color="gradient"
                stacked
                />
            ))}
        </Avatar.Group>
    </div>
  )
}
