import Header from '../../components/Header'
import ProjectContent from '../../components/project_page/ProjectContent'
import Footer from '../../components/Footer'

import {GlobalStyle, Warpper} from '../../components/styles'



function ProjectView(){
    return (
        <>
        <GlobalStyle/>
        <Warpper>
            <Header/>
            <h1>Projeto</h1>
            <ProjectContent/>
            <Footer/> 
        </Warpper>
    </>
    )
}

export default ProjectView