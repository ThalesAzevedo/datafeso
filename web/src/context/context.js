import React, { createContext, useState } from 'react';
import api from '../services/api';

export const ProjectContext = createContext({});

export function ProjectProvider(props) {
  const [apiData, setApiData] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [firstDate, setFirstDate] = useState(['', '']);
  const [lastDate, setLastDate] = useState(['', '']);

  const getApiData = async () => {
    var apiResponse = [];
    await api.get('/').then((resp) => {
      apiResponse = resp.data;
    });
    setFirstDate(apiResponse[0].date.split('-'));
    setLastDate(apiResponse[apiResponse.length - 2].date.split('-'));
    setApiData(apiResponse);
  };


  if (apiData.length == 0) {
    getApiData();
  }

  const getProducts = (data) => {
    var productList = [];
    data[0].products.forEach((element) => {
      const productData = {
        id: productList.length.toString(),
        name: element.name,
      };

      productList.push(productData);
    });
    // console.log(productList)
    setProducts(productList);
  };

  if (products.length == 0 && apiData.length != 0) {
    getProducts(apiData);
    setLoading(false);
  }

  return (
    <ProjectContext.Provider
      value={{
        state: { apiData, products, loading, limit: { firstDate, lastDate } },
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
