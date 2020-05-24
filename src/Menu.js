import React from 'react';
import styled from 'styled-components';


const Styled = styled.div `

    text-align: center;
    
    
    #menuTitle {
        padding-top: 15px;
        padding-bottom: 30px;
        font-family: Dosis;
        font-size: 4em;
    }

    #menu {
        width: 50%;
        height: 50%;
    }

`

export default function Menu() {
    return (

        <Styled>
            <div id="menuTitle">
                <p>Our Menu</p>
            </div>

            <div id="menuImage">
                <img id="menu" src="https://i.imgur.com/Uy1Q8dS.jpg" alt="menu"/>
            </div>


        </Styled>



    )
}