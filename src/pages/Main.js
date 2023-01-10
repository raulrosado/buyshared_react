import React, { Component } from 'react'
import Head from '../component/Head.js';
import Eventos from '../component/Eventos.js';

export class Main extends Component {
  render() {
    return (
      <div>
        <Head srcdir="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
        <Eventos/>
      </div>
    )
  }
}

export default Main