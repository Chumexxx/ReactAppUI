import styled from "styled-components"
// import { MdAddToHomeScreen } from "react-icons/md";
import Header from "./Static/Header";
import Personal from "./pages/Personal";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Business from "./pages/Business";
import Company from "./pages/Company";
import Help from "./pages/Help";

const App = () => {
  const d = 2+3
  return(
    <div>
      <BrowserRouter>

        <Header/>

          <Routes>

            <Route path="/" element={<Personal/>}/>
            <Route path="/business" element={<Business/>}/>
            <Route path="/company" element={<Company/>}/>
            <Route path="/help" element={<Help/>}/>

          </Routes>

        <Footer/>

      </BrowserRouter>
    </div>
    
  )
}

export default App

const Container = styled.div`
background-color: yellow;
font-size: 30px;
color: pink;
`





