import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardImg,
    CardFooter,
} from "reactstrap";

class MyPokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            myPokemon: JSON.parse(localStorage.getItem('MyPokemon')) ? JSON.parse(localStorage.getItem('MyPokemon')) : []
        };
    }

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=10")
            .then(res => res.json())
            .then(parsedJSON => parsedJSON.results.map(data => (
                {
                    name: `${data.name}`,
                    url: `${data.url}`,
                    thumbnail: `${data.name}.jpg`

                }
            )))
            .then(pokemon => this.setState({ pokemon }))
            .catch(error => console.log('parsing failed', error))
    }

    render() {
        const { pokemon } = this.state;
        return (
            <Container fluid={true} className="py-5">
                <Container className="pokemonList">
                    <Row>
                        <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
                            <h1 className="display-4 text-light text-center">Pokemon List</h1>
                        </Col>
                    </Row>
                    <div className="bg-white px-3 py-3 mt-5" style={{ borderRadius: "15px" }}>
                        <Row className="text-center">
                            <Col sm={{ size: 12 }} md={{ size: 12 }} lg={{ size: 12 }}>
                                <NavLink to="/my-pokemon-list" style={{ textDecoration: "none" }} className="text-dark">
                                    <Button outline className="text-capitalize text-center mt-2" color="warning" style={{ fontSize: "14px", borderRadius: "10px", fontWeight: "bold" }}><i className="fa-solid fa-basket-shopping" style={{marginRight: "8px"}}></i>Captured Pokemon : {this.state.myPokemon.length}</Button>
                                </NavLink>
                            </Col>
                        </Row>
                        <Row className="pt-3 mt-4">
                            {
                                pokemon.length > 0 ? pokemon.map(item => {
                                    const { name, thumbnail } = item;
                                    let urlDetail = "/detail/" + name;
                                    return (
                                        <Col xs={{ size: 6 }} sm={{ size: 4 }} lg={{ size: 3 }} xl={{ size: 2 }} className="mb-5">
                                            <NavLink key={name} to={urlDetail} style={{ textDecoration: "none" }} className="text-dark">
                                                <Card id="cardItem" className="shadow-sm h-100" style={{ borderRadius: "15px" }}>
                                                    <CardImg draggable="false" top src={"pokemon/" + thumbnail} title={"Pokemon - " + name + " - " + process.env.REACT_APP_TITLE} alt={"Pokemon - " + name + " - " + process.env.REACT_APP_TITLE} className="h-100 p-4" />
                                                    <CardFooter className="py-3" style={{ borderBottomRightRadius: "15px", borderBottomLeftRadius: "15px", }}>
                                                        <Button className="w-100 text-capitalize text-center disabled" color="warning" style={{ fontSize: "20px", borderRadius: "15px" }}>{name}</Button>
                                                    </CardFooter>
                                                </Card>
                                            </NavLink>

                                        </Col>
                                    );
                                }) : null
                            }
                        </Row>
                    </div>

                </Container>
            </Container>
        );
    }
}

export default MyPokemonList;