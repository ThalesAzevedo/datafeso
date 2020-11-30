import React, { Component }from 'react'

import {HeaderWrap} from './styles'
import Login from "./Login"

class Header extends Component{
    render() {

        return (
            <HeaderWrap>
                <div>
                    <img src='https://www.unifeso.edu.br/images/logo/UNIFESO-BRANCO.png'/>
                </div>
                
                <h1>Portal DataFeso</h1>
                <Login/>
            </HeaderWrap>
        )

    }
}

export default Header