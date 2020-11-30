import React, {Component} from 'react';
import ProjectCard from './ProjectCard'

import {ProjectsWarp} from '../styles'

class ProjectList extends Component{
    render(){
        return(
            
            <ProjectsWarp>
                
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                
            </ProjectsWarp>
        )
    }
}

export default ProjectList