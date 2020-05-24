import React from "react";
import styled from "styled-components";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { Container } from "react-bootstrap";
import { Jumbotron as Jumbo } from "react-bootstrap";
import coffeeImage from "./assets/coffee.jpg";
 
const Styled = styled.div`
  .container {
    max-width: 100%;
  }

  .jumbo {
    background: url(${coffeeImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    width: 100%;
    position: relative;
    height: 800px;
     
  }

  .overlay {
    background-color: #000;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .title {
    font-family: Amatic SC;
    font-size: 7em;
    position: relative;
    top: 45%;
    right: 15%;
    
  }

  .slogan {
    font-family: Dosis;
    font-size: 5em;
    position: relative;
    top: 48%;
    text-align: center;
    right: 10%;
  }

  .homeHeader {
    font-family: Dosis;
    font-size: 4em;
    text-align: center;
  }

  .homeText {
    position: relative;
    padding-top: 50px;
  }

  .container {
    width: 350px;
    height: 50px;
    align-content: center;
  }

  a {
    padding: 10px;
  }
`;

export default function Home() {
  return (
    <Styled>
      <Jumbo fluid className="jumbo">
        <div className="overlay" />
        <h1 className="title">Sunny Side Coffee</h1>
        <p className="slogan">Coffee Houses Done Bright!</p>
      </Jumbo>
      <Container>
        <SocialMediaIconsReact icon="twitter" url="/" iconSize="3" />
        <SocialMediaIconsReact icon="snapchat" url="/" />
        <SocialMediaIconsReact icon="facebook" url="/" />
        <SocialMediaIconsReact icon="youtube" url="/" />
        <SocialMediaIconsReact icon="instagram" url="/" />
      </Container>
    </Styled>
  );
}










































/*

import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from './components/Jumbotron'
import coffeeImage from './assets/coffee.jpg';


const Styled = styled.div`


    /*
        .jumbo {
            background: url(${coffeeImage}) no-repeat fixed bottom;
            background-size: cover;
            color: #efefef;
            height: 800px; 
            position: relative;
            z-index: -2;
            margin: 20px;
        }

        .overlay {
            background-color: #000;
            opacity: 0.2;
            position: absolute;
            max-width: 100%;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -1;
        }

        .title {
            font-family: Amatic SC;
            font-size: 120px;
            position: relative;
            right: 30%;
            top: 80px;
        }

        .slogan {
            font-family: Dosis;
            font-size: 50px;
            position: relative;
            top: 80px;
        }

    

    .homeHeader {
        font-family: Dosis;
        font-size: 4em;
        text-align: center;

    }

    .homeText {
        position: relative;
        padding-top: 50px;
    }

    .socialContainer {
        width: 350px;
        height: 50px;
        align-content: center;
    }

    a {
        padding: 10px;
    }


`;

export default function Home() {
    return (
        
        <Styled>
            <Jumbotron />
            <Container className="socialContainer">
                <SocialMediaIconsReact icon="twitter" url="/" iconSize="3"/>
                <SocialMediaIconsReact icon="snapchat" url="/"/>
                <SocialMediaIconsReact icon="facebook" url="/"/>
                <SocialMediaIconsReact icon="youtube" url="/"/>
                <SocialMediaIconsReact icon="instagram" url="/"/>

            </Container>
        </Styled>
    )
}

*/
