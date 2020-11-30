import {Component} from 'react';
import {CardWarp, CardHeader, CardDescription} from '../styles'



class ProjectCard extends Component{
    render() {
        return (
            <CardWarp>
            <CardHeader>
                <p>ID #000000</p>
                <h3>Nome do Projeto</h3>
            </CardHeader>
            <CardDescription>
                <p><span>Autor:</span> Thales Azevedo</p>
                <p><span>Descrição:</span> O projeto com tal nome tem a roposta de pesquisar tal assunto e obter resutados que podem causar tais impactos.</p>
                <p><span>N de Arquivos:</span> 10</p>
                <p><span>Ultima Atualização:</span> 00/00/0000</p>
            </CardDescription>
            </CardWarp>
        )
    }
}

export default ProjectCard