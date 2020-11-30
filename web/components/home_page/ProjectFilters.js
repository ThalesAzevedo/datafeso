import React, {Component} from 'react';
import {ProjectFilterWrap} from '../styles'



class ProjectFilters extends Component{
    render(){
        return(
           <ProjectFilterWrap>
               	<h2>FILTROS</h2>
                <form>
                    <label for="iptID">ID</label>
                    <input type="text" name="iptID"></input>
                    <label for="iptSetor">SETOR</label>
                    <input type="text" name="iptSetor"></input>
                    <label for="iptCurso">CURSO</label>
                    <input type="text" name="iptCurso"></input>
                    <label for="iptIniDate">DATA INÍCIO</label>
                    <input type="date" name="iptIniDate"></input>
                    <label for="iptFinDate">DATA FIM</label>
                    <input type="date" name="iptFinDate"></input>
                    <button type='submit' >FILTRAR</button>
                </form>

           </ProjectFilterWrap>
        )
    }
}

export default ProjectFilters