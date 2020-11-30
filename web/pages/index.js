import Content from"../components/home_page/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";

import {GlobalStyle, Warpper} from '../components/styles'


function App(){
    return (
        <>
        <GlobalStyle/>
        <Warpper>
            <Header/>
            <h1>Projetos e Pesquisas</h1>
            <Content/>
            <Footer/>
        </Warpper>
    </>
    )
}

export default App