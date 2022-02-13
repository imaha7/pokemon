import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PokemonConsumer } from './Pokemon-Context';

import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardTitle,
    CardText,
    Progress
} from "reactstrap";

class PokemonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon_details: [],
            name: "",
        };
    }

    componentDidMount() {
        let url = window.location.href;
        let url_split = url.split("/");
        let pokemon_name = url_split[5];

        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon_name)
            .then(res => res.json())
            .then(pokemon_details => this.setState({
                pokemon_details,
                name: pokemon_name
            }))
            .catch(error => console.log('parsing failed', error))
    }

    render() {
        const { name, pokemon_details} = this.state;

        return (
            <PokemonConsumer>
                {({ updatepokemon, nickname }) => (
                    <Container fluid={true} className="py-5">
                        <Container id="pokemonDetail" className="bg-white p-5" style={{ borderRadius: "15px" }}>
                            <Row className="justify-content-center mb-5">
                                <Col sm={{ size: 8 }} md={{ size: 6 }} lg={{ size: 4 }}>
                                    <h1 className="display-4 fw-bold text-dark text-center text-capitalize">{name}</h1>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col sm={{ size: 8 }} md={{ size: 6 }} lg={{ size: 6 }} xl={{ size: 6 }}>
                                    <img draggable="false" className="shadow border border-light mb-5" style={{ width: "100%", borderRadius: "15px" }} src={"/pokemon/" + name + ".jpg"} title={"Pokemon - " + name + " - " + process.env.REACT_APP_TITLE} alt={"Pokemon - " + name + " - " + process.env.REACT_APP_TITLE} />
                                    <Row className="mb-4">
                                        <Col sm={{ size: 4 }} md={{ size: 4 }} lg={{ size: 4 }} xl={{ size: 4 }}>
                                            <Button className="w-100 text-capitalize py-2 mb-3" color="danger" style={{ borderRadius: "10px", fontSize: "18px" }} onClick={event => {
                                                updatepokemon([{ name: name, nickname: nickname }]);
                                            }}><b>Catch {name}</b></Button>
                                        </Col>
                                        <Col sm={{ size: 4 }} md={{ size: 4 }} lg={{ size: 4 }} xl={{ size: 4 }}>
                                            <Link to="/pokemon-list">
                                                <Button className="w-100 py-2 mb-3" color="warning" style={{ borderRadius: "10px", fontSize: "18px" }}><b>Catch Others</b></Button>
                                            </Link>
                                        </Col>
                                        <Col sm={{ size: 4 }} md={{ size: 4 }} lg={{ size: 4 }} xl={{ size: 4 }}>
                                            <Link to="/my-pokemon-list">
                                                <Button color="info" className="w-100 text-light py-2 mb-3" style={{ borderRadius: "10px", fontSize: "18px" }}><b>My Pokemon</b></Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                    <Card body className="shadow-sm bg-dark text-light mb-4 p-4" style={{ borderRadius: "15px" }}>
                                        <CardTitle className="mb-4" tag="h5">Stats</CardTitle>
                                        {
                                            pokemon_details.stats ?
                                                pokemon_details.stats.map(item => {
                                                    const { stat } = item;
                                                    return (
                                                        <Row>
                                                            <Col sm={{ size: 5 }} md={{ size: 5 }} lg={{ size: 5 }} xl={{ size: 5 }}>
                                                                <CardText className="text-capitalize ml-0 mb-3" tag="h4" key={stat.name}><b>{stat.name}</b></CardText>
                                                            </Col>
                                                            <Col sm={{ size: 7 }} md={{ size: 7 }} lg={{ size: 7 }} xl={{ size: 7 }}>
                                                                <Progress color="warning" value={item.base_stat} className="ml-0 mt-2 mb-3" />
                                                            </Col>
                                                        </Row>
                                                    );
                                                }) : null
                                        }
                                    </Card>
                                </Col>
                                <Col sm={{ size: 8 }} md={{ size: 6 }} lg={{ size: 6 }} xl={{ size: 6 }}>
                                    <Card className="bg-dark  shadow-sm mb-4" body style={{ borderRadius: "15px" }}>
                                        <Row className="justify-content-between mb-4">
                                            <Col className="text-warning mb-0" sm={{ size: 6 }} md={{ size: 6 }} lg={{ size: 6 }}>
                                                <CardTitle className="text-light" tag="h5">Height</CardTitle>
                                                <CardText tag="h4" className="mb-4"><b>{pokemon_details.height}'</b></CardText>
                                                <CardTitle className="text-light" tag="h5">Weight</CardTitle>
                                                <CardText tag="h4" className="mb-4"><b>{pokemon_details.weight} lbs</b></CardText>
                                            </Col>
                                            <Col className="text-warning" sm={{ size: 6 }} md={{ size: 6 }} lg={{ size: 6 }}>
                                                <CardTitle className="text-light" tag="h5">Base Experience</CardTitle>
                                                <CardText tag="h4" className="mb-4"><b>{pokemon_details.base_experience}</b></CardText>
                                                <CardTitle className="text-light" tag="h5">Abilities</CardTitle>
                                                <CardText>
                                                    {
                                                        pokemon_details.abilities ?
                                                            pokemon_details.abilities.map(item => {
                                                                const { ability } = item;
                                                                return (
                                                                    <CardText tag="h4" className="text-capitalize" key={ability.name}><b>{ability.name}</b></CardText>
                                                                );
                                                            }) : null
                                                    }
                                                </CardText>
                                            </Col>
                                        </Row>
                                    </Card>
                                    <CardTitle tag="h5" className="mb-3">Type</CardTitle>
                                    <Row className="mb-4">
                                        {
                                            pokemon_details.types ?
                                                pokemon_details.types.map(item => {
                                                    const { type } = item;
                                                    var randomColor = "0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16).slice(-2);
                                                    return (
                                                        <Col className="mb-3" sm={{ size: "auto" }} md={{ size: "auto" }} lg={{ size: "auto" }} key={type.name}>
                                                            <CardText tag="h4" className="text-capitalize text-light py-2 px-3" style={{ backgroundColor: "#" + randomColor, borderColor: "#" + randomColor, borderRadius: "30px" }} key={type.name}><b>{type.name}</b></CardText>
                                                        </Col>
                                                    );
                                                }) : null
                                        }
                                    </Row>
                                    <CardTitle tag="h5" className="mb-3">Held Items</CardTitle>
                                    <Row className="mb-4">
                                        {
                                            pokemon_details.held_items ?
                                                pokemon_details.held_items.map(item_hi => {
                                                    const { item } = item_hi;
                                                    var randomColor = "0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16).slice(-2);
                                                    return (
                                                        <Col className="mb-3" sm={{ size: "auto" }} md={{ size: "auto" }} lg={{ size: "auto" }} key={item.name}>
                                                            <CardText tag="h4" className="text-capitalize text-light py-2 px-3" style={{ backgroundColor: "#" + randomColor, borderColor: "#" + randomColor, borderRadius: "30px" }} key={item.name}><b>{item.name}</b></CardText>
                                                        </Col>
                                                    );
                                                }) : null
                                        }
                                    </Row>
                                    <CardTitle tag="h5" className="mb-4">Moves</CardTitle>
                                    <Row className="mb-4">
                                        {
                                            pokemon_details.moves ?
                                                pokemon_details.moves.map(item => {
                                                    const { move } = item;
                                                    var randomColor = "0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16).slice(-2);
                                                    return (
                                                        <Col className="mb-3" sm={{ size: "auto" }} md={{ size: "auto" }} lg={{ size: "auto" }} key={move.name}>
                                                            <CardText tag="h4" className="text-capitalize text-light py-2 px-3" style={{ backgroundColor: "#" + randomColor, borderColor: "#" + randomColor, borderRadius: "30px" }} key={move.name}><b>{move.name}</b></CardText>
                                                        </Col>
                                                    );
                                                }) : null
                                        }
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                )}
            </PokemonConsumer>
        );
    }
}

export default PokemonDetail;