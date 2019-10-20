import React, { Component } from 'react';
import { createGlobalStyle  } from 'styled-components';
import reset from 'styled-reset';


const GlobalStyles = createGlobalStyle`
  
  ${reset}
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
    font-family: 'Roboto', sans-serif !important;
  }
  *{
    box-sizing:border-box;
  }
`

//components

import {Odd} from './components/Odd'
import {Score} from './components/Score'
import {Team} from './components/Team'
import {Button} from './components/Button'
import {Text} from './components/Text'


import {Competition} from './components/Competition'





class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyles />

        <Competition name='COMPETITION NAME' type='TRADING' scoreHT={10} scoreAT={5} HT='home team' AT='home team' oddsBuy={[{price:10, factor:20, type:'buy'}, {price:10, factor:20, type:'buy'}]} oddsBuyName='NAME OF THE HOME TEAM
SECOND PART ' oddsSell={[{price:10, factor:20}, {price:10, factor:20}]} oddsSellName='NAME OF THE HOME TEAM SECOND PART '>
        </Competition>
        
        <Button size='large'/>
        <Button size='small'/>

      </div>
    );
  }
}

export default App;
