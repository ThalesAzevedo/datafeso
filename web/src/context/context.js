import React, { createContext, useState} from 'react';
import api from '../services/api'

const ProjectContext = createContext({});

export function ProjectProvider (props) {
    const [apiData, setApiData] = useState([]);
    const [products, setProducts]=useState([]);
    const [loading, setLoading] = useState(true);

    const getPApiData = async() =>{
        var apiResponse = [];
        await api.get('/').then(resp => {apiResponse = resp.data})
        
        setApiData(apiResponse)
    }

    if (apiData.length==0){
        getPApiData()
    }


    const getProducts = (data) =>{
        var productList = [];
        data[0].products.forEach(element => {
            const productData = {
                id : productList.length.toString(),
                name: element.name
            }
            
            productList.push(productData)
        });
        // console.log(productList)
        setProducts(productList)
    }

    if (products.length==0 && apiData.length!=0){
        getProducts(apiData)
        setLoading(false)
    }

    

    return (
        <ProjectContext.Provider value={{
            state:{ apiData,
            products,
            loading
        }
        }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectContext;