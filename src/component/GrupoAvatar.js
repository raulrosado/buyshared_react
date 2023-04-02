import React from 'react'
import { Avatar } from "@nextui-org/react";
import config from '../config/config';

export default function GrupoAvatar(props) {
  return (
    <div>
       <Avatar.Group>
            {props.usuarios.map((url, index) => (
            <Avatar
                key={index}
                size={props.size}
                pointer
                src={config.URL+"images/"+url.avatar}
                color="gradient"
                stacked
                />
            ))}
        </Avatar.Group>
    </div>
  )
}
