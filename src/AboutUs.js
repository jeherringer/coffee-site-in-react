import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

const Styled = styled.div`

    img {
        width: 100%;
        height: auto;
        padding-top: 50px;
    }

    h2 {
        width: 100%;
        text-align: center;
        margin-top: 80px;
        font-family: Amatic SC;
        font-size: 4em;
    }

    h3 {
        font-family: Dosis;
        text-align: center;
        width: 100%;
        padding-bottom: 20px;
        font-size: 2.1em;
    }

    p {
        font-family: Exo2;
    }

    #sustainabilityImg {
        max-width: 100%;
        height: auto;
        padding-top: 50px;
        padding-right: 50px;
    }

    .contentRow {
        margin-top: 50px;
    }

    #localownImg {
        width: 400px;
        height: auto;
        padding-left: 100px;
        padding-top: 50px;
        transform: rotate(20deg);
    }

    #fairtradeImg {
        width: 400px;
        height: auto;
    }
    
    
`;

export default function AboutUs() {
    return (
        <Container>
            <Styled>
                    <img src="https://i.imgur.com/NhieqzY.jpg" alt="generic coffee shop" />
                    <h2>What Are We About</h2>
                
                <Row className="contentRow">
                    <Col>
                        <img id="sustainabilityImg" src="https://www.conservation.org/images/default-source/graphics/ci_scc_horizontal_final_450px.jpg?sfvrsn=d0bbddbc_0" alt="sustainability coffee project" />
                    </Col>
                    <Col xs={6} className="sectionTitle">
                        <Row>
                            <h3>Sustainability</h3>
                        
                        
                            <p>Robust cup aftertaste cappuccino kopi-luwak beans roast. Crema variety siphon, roast as macchiato ristretto dripper. Cappuccino frappuccino, arabica grinder so at americano wings cinnamon. Robust, ristretto java, coffee steamed, grinder sweet con panna steamed siphon half and half. Mocha cappuccino half and half black and macchiato coffee espresso. </p>
                            <p> Macchiato, siphon cappuccino, dark black blue mountain extra breve. Coffee cinnamon mazagran lungo irish, cup to go irish in cinnamon. Cup cup caffeine chicory lungo spoon arabica sweet french press. Aged blue mountain turkish, aftertaste extra espresso medium doppio macchiato. Mazagran, foam redeye, shop aromatic fair trade dripper plunger pot acerbic robusta body.</p>
                            <p> Macchiato, siphon cappuccino, dark black blue mountain extra breve. Coffee cinnamon mazagran lungo irish, cup to go irish in cinnamon. Cup cup caffeine chicory lungo spoon arabica sweet french press. Aged blue mountain turkish, aftertaste extra espresso medium doppio macchiato. Mazagran, foam redeye, shop aromatic fair trade dripper plunger pot acerbic robusta body.</p>  
                        </Row>
                    </Col>
                </Row>
                <Row className="contentRow">
                    <Col xs={6} className="sectionTitle">
                        <Row>
                            <h3>Locally Owned and Operated</h3>
                        
                        
                            <p>Robust cup aftertaste cappuccino kopi-luwak beans roast. Crema variety siphon, roast as macchiato ristretto dripper. Cappuccino frappuccino, arabica grinder so at americano wings cinnamon. Robust, ristretto java, coffee steamed, grinder sweet con panna steamed siphon half and half. Mocha cappuccino half and half black and macchiato coffee espresso. </p>
                            <p> Macchiato, siphon cappuccino, dark black blue mountain extra breve. Coffee cinnamon mazagran lungo irish, cup to go irish in cinnamon. Cup cup caffeine chicory lungo spoon arabica sweet french press. Aged blue mountain turkish, aftertaste extra espresso medium doppio macchiato. Mazagran, foam redeye, shop aromatic fair trade dripper plunger pot acerbic robusta body.</p>
                            <p> Macchiato, siphon cappuccino, dark black blue mountain extra breve. Coffee cinnamon mazagran lungo irish, cup to go irish in cinnamon. Cup cup caffeine chicory lungo spoon arabica sweet french press. Aged blue mountain turkish, aftertaste extra espresso medium doppio macchiato. Mazagran, foam redeye, shop aromatic fair trade dripper plunger pot acerbic robusta body.</p>  
                        </Row>
                    </Col>
                    <Col>
                        <img id="localownImg" src="https://lh3.googleusercontent.com/proxy/9xq04zgDsC7A-60CDcbrk6-bd5ZTxVlKJQOJTfbUTdOkTHYsypvX2LSZyJudJMtZcooSHisKvfUZjTQot9B-tvtearGhKs3SINaNzbhs8Bp0rN9Jru2hJY9Ntn_t4f96hrlOJ6iXNQ9YFd71IdrfKRO_YVTwRPw" alt="locally owned stamp" />
                    </Col>
                </Row>
                <Row className="contentRow">
                    <Col>
                        <img id="fairtradeImg" src="https://blog.farmraiser.com/wp-content/uploads/2018/11/Fair-trade.jpg" alt="sustainability coffee project" />
                    </Col>
                    <Col xs={6} className="sectionTitle">
                        <Row>
                            <h3>Fair Trade Ingredients</h3>
                        
                        
                            <p>Robust cup aftertaste cappuccino kopi-luwak beans roast. Crema variety siphon, roast as macchiato ristretto dripper. Cappuccino frappuccino, arabica grinder so at americano wings cinnamon. Robust, ristretto java, coffee steamed, grinder sweet con panna steamed siphon half and half. Mocha cappuccino half and half black and macchiato coffee espresso. </p>
                            <p> Macchiato, siphon cappuccino, dark black blue mountain extra breve. Coffee cinnamon mazagran lungo irish, cup to go irish in cinnamon. Cup cup caffeine chicory lungo spoon arabica sweet french press. Aged blue mountain turkish, aftertaste extra espresso medium doppio macchiato. Mazagran, foam redeye, shop aromatic fair trade dripper plunger pot acerbic robusta body.</p>
                            <p> Macchiato, siphon cappuccino, dark black blue mountain extra breve. Coffee cinnamon mazagran lungo irish, cup to go irish in cinnamon. Cup cup caffeine chicory lungo spoon arabica sweet french press. Aged blue mountain turkish, aftertaste extra espresso medium doppio macchiato. Mazagran, foam redeye, shop aromatic fair trade dripper plunger pot acerbic robusta body.</p>  
                        </Row>
                    </Col>
                </Row>
            </Styled>
        </Container>
    )
}
