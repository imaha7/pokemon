import React, { Component } from "react";
import { BrowserRouter as Router, HashRouter, Route, NavLink, Switch } from "react-router-dom";
import Home from "./Home";
import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";
import MyPokemonList from "./MyPokemonList";
import { PokemonProvider } from "./Pokemon-Context";

class Main extends Component {
    render() {
        document.title = process.env.REACT_APP_TITLE
        let isActive = "";
        const homeClass = isActive ? "nav-link active" : "nav-link";
        const listClass = isActive ? "nav-link active" : "nav-link";
        const myListClass = isActive ? "nav-link active" : "nav-link";

        return (
            <HashRouter>
                <PokemonProvider>
                    <div className="min-vh-100" style={{ background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat" }}>
                        <nav variant="pills" className="navbar navbar-expand-sm navbar-light bg-white shadow">
                            <div className="container-fluid">
                                <NavLink to="/" draggable="false" className="navbar-brand">
                                    <img draggable="false" src="/pokemon_logo.png" width="120" className="d-inline-block align-text-top me-2" alt={"Favicon - " + process.env.REACT_APP_TITLE} />
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbar">
                                    <ul className="navbar-nav me-auto">
                                        <li className="nav-item">
                                            <NavLink to="/" draggable="false" className={homeClass} style={{ marginRight:"12px",}}><img src="https://img.icons8.com/ios-glyphs/20/000000/pokemon--v1.png" style={{marginRight: "8px"}}/>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/pokemon-list" draggable="false" className={listClass} style={{ marginRight:"12px",}}><img src="https://img.icons8.com/ios/20/000000/pokeballs.png" style={{marginRight: "8px"}}/>Pokemon List</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/my-pokemon-list" draggable="false" className={myListClass}><img src="https://img.icons8.com/ios/20/000000/pokeball--v2.png" style={{marginRight: "8px"}}/>My Pokemon List</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/pokemon-list" component={PokemonList} />
                            <Route path="/my-pokemon-list" component={MyPokemonList} />
                            <Route path="/detail" component={PokemonDetail} />
                        </Switch>
                    </div>
                </PokemonProvider>
            </HashRouter>
        );
    }
}

export default Main;