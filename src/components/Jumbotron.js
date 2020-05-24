import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import coffeeImage from '../assets/coffee.jpg';
import styled from 'styled-components';

const Styled = styled.div `

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


`;

export const Jumbotron = () => (
    <Styled>
        <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
            <Container id="jumboContainer">
            <h1 className="title">Sorta Sunny Coffee</h1>
            <p className="slogan">Drink in the sun!</p>
            </Container>
        </Jumbo>
    </Styled>
)




/*
const Styled = styled.div`
       
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
        
`;


export const Jumbotron = () => (
        <Styled>
            <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
                <Container id="jumboContainer">
                <h1 className="title">Sorta Sunny Coffee</h1>
                <p className="slogan">Drink in the sun!</p>
                </Container>
            </Jumbo>
        </Styled>
)
*/