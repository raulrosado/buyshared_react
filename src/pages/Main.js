import React, { Component } from 'react'
import Head from '../component/Head.js';
import Eventos from '../component/Eventos.js';

export class Main extends Component {
  render() {
    return (
      <div>
        <Head/>
        <Eventos/>
      </div>
    )
  }
}

export default Main