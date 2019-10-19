import React, { Component } from 'react';
import { createGlobalStyle  } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
    font-family: 'Roboto', sans-serif;
  }
`

//components

import {Odd} from './components/Odd'
import {Score} from './components/Score'
import {Team} from './components/Team'
import {Button} from './components/Button'

import {Competition} from './components/Competition'





class App extends Component {
  render() {
    return (
      <div className="App">
        <Competition>
        <Odd price='$50' factor='10'/>
        <Odd price='$50' factor='10'/>
        <Odd price='$50' factor='10'/>

        </Competition>
        <GlobalStyles />
        <Odd price='$50' factor='10'/>
        <Score HT={0} AT={0}/>
        <Team teamName='Team Name medium'/>
        <Button size='large'/>
        <Button size='small'/>

      </div>
    );
  }
}

export default App;
