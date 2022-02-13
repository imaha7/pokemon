import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Button,
    Jumbotron,
} from "reactstrap";

class Home extends Component {
    render() {
        return (
            <Container fluid={true} className="py-5">
                <Container>
                    <Row>
                        <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
                            <img draggable="false" src="/pokemon_logo.png" className="w-100" alt={"Logo " + process.env.REACT_APP_TITLE} />
                        </Col>
                    </Row>
                    <Row className="my-5 text-center">
                        <Col>
                            <Jumbotron>
                                <h1 className="display-4 text-light">Welcome to Pokemon</h1>
                                <h2 className="lead text-light">
                                    Project Assignment<br />
                                    Web Platform Engineers - Tokopedia
                                </h2>
                                <p className="text-light" style={{fontWeight: "bold",}}>Created by {process.env.REACT_APP_CREATOR}</p>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row className="my-5 justify-content-center">
                        <Col md={{ size: 4 }} xl={{ size: 4 }}>
                            <Link to="/pokemon-list">
                                <Button color="warning" className="py-2 w-100" style={{fontSize:"24px", borderRadius:"30px", fontWeight: "bold",}}><i class="fa-solid fa-gamepad" style={{marginRight: "12px"}}></i>Catch Pokemon Now</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Home;