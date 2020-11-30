import React, {Component} from 'react';

import {LoginWrap} from "./styles"


class ProjectFilters extends Component{
    render(){
        return(
           <LoginWrap>
                <form>
                    <label for="iptUser">Usuário</label>
                    <input type="text" name="iptUser"></input>
                    <label for="iptPassWord">Senha</label>
                    <input type="password" name="iptPassWord"></input>

                    <button type='submit'>LOGIN</button>
                </form>

           </LoginWrap>
        )
    }
}

export default ProjectFilters