import React, { Component } from "react";
import { PokemonConsumer } from './Pokemon-Context';

import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardFooter,
} from "reactstrap";

class MyPokemon extends Component {
    render() {
        return (
            <PokemonConsumer>
                {({ pokemon, releasepokemon, releaseallpokemon }) => (
                    <React.Fragment>
                        <Container fluid={true} className="py-5">
                            <Container className="pokemonList">
                                <Row>
                                    <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
                                        <h1 className="display-4 text-light text-center">My Pokemon</h1>
                                        <p className="h2 fw-light text-light text-center">Captured Pokemon List</p>
                                    </Col>
                                </Row>
                                <div className="bg-white px-3 py-3 mt-5" style={{ borderRadius: "15px" }}>
                                    <Row className="text-center">
                                        <Col sm={{ size: 12 }} md={{ size: 12 }} lg={{ size: 12 }}>
                                            <Button outline className="text-capitalize text-center mt-2 mb-3" color="danger" onClick={() => releaseallpokemon(pokemon)} style={{ fontSize: "14px", borderRadius: "10px", fontWeight: "bold" }}><i className="fa-solid fa-trash" style={{marginRight: "8px"}}></i>Release All Pokemon</Button>
                                        </Col>
                                    </Row>
                                    <Row className="pt-3 mt-4">
                                        {
                                            pokemon.length > 0 ? pokemon.map(item => {
                                                const { name, nickname } = item;
                                                return (
                                                    <Col xs={{ size: 6 }} sm={{ size: 4 }} lg={{ size: 3 }} xl={{ size: 2 }} className="mb-5">
                                                        <Card id="cardItem" className="shadow-sm h-100" style={{ borderRadius: "15px" }}>
                                                            <CardImg draggable="false" top src={"pokemon/" + name + ".jpg"} title={"Pokemon - " + name + " - " + process.env.REACT_APP_TITLE} alt={"Pokemon - " + name + " - " + process.env.REACT_APP_TITLE} className="h-100 p-4" />
                                                            <CardTitle className="text-capitalize text-center mb-3" tag="h4">{nickname}</CardTitle>
                                                            <CardSubtitle tag="h6" className="text-capitalize bg-warning text-center mx-4 mb-3 p-2" style={{borderRadius: "30px"}}>{name}</CardSubtitle>
                                                            <CardFooter className="py-3" style={{ borderBottomRightRadius: "15px", borderBottomLeftRadius: "15px", }}>
                                                                <Button className="w-100 text-capitalize text-center" color="danger" onClick={() => releasepokemon(nickname)} style={{ fontSize: "20px", borderRadius: "15px" }}><i className="fa-solid fa-trash" style={{marginRight: "8px"}}></i>Release</Button>
                                                            </CardFooter>
                                                        </Card>

                                                    </Col>
                                                );
                                            }) : null
                                        }
                                    </Row>
                                </div>

                            </Container>
                        </Container>
                    </React.Fragment>
                )}
            </PokemonConsumer>
        );
    }
}

export default MyPokemon;