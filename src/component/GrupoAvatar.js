import React from 'react'
import { Avatar } from "@nextui-org/react";
import config from '../config/config';

export default function GrupoAvatar(props) {
    //console.log(props.usuarios)
    // http://localhost:5000/images/150.jpeg
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
