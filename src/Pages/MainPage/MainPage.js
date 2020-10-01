import React from 'react';
import * as S from "./MainPage.styled";
import IconSearch1 from "../../Assets/IconSearch1.svg";
import mobileMenu from "../../Assets/mobileMenu.svg";
import MusicNote from "./MusicNote";
import RightArrow from "./RightArrow";
import SelectIdiomButton from "./SelectIdiomButton";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SelectIdiom from "../SelectIdiomPage/SelectIdiom";
import Search from "../SearchPage/Search";
import NotationPage from "../NotationPage/Notation";



function MainPage() {
  return ( 
    <Router>
      <div>
        <S.MainWrapper>
          <S.Nav>
            <Link to="/search"><button><img alt="Search Option" src={IconSearch1}/></button></Link>
            <Link to="/select-idiom"><SelectIdiomButton>Select Idiom/Style</SelectIdiomButton></Link>
            <button><img alt="Mobile Menu" aria-label="Mobile Menu" src={mobileMenu}/></button>
          </S.Nav>
          <S.Background>
            <Switch>
              <Route path="/search" >
                <Search />
              </Route>
              <Route path="/select-idiom" >
                <SelectIdiom />
              </Route>
              <Route path="/notation" >
                <NotationPage />
              </Route>
            </Switch>  
            <Link to="notation"><MusicNote /></Link>
            <RightArrow />
          </S.Background>

          
      </S.MainWrapper>
     </div>    
  </Router>



  )
  
}

export default MainPage;