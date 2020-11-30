import React, { Component }from 'react';
import ProjectList from "./ProjectList"
import ProjectFilters from "./ProjectFilters"

import {ContentWrap} from '../styles'

class Content extends Component{
    render() {

        return (
            
            <ContentWrap>
                 <ProjectList/>
                 <ProjectFilters/>
             </ContentWrap>
        )

    }
}

export default Content