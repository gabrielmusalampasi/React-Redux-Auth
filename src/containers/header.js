import React from "react"
import { connect } from 'react-redux'
import * as actions from '../actions'
import {Link} from "react-router-dom";


class Header extends React.Component {
    onClickAuth = () => {
        this.props.setAuthentification(!this.props.isLoggIn);
    };
    renderAuthentificationLabel = () => {
        if(this.props.isLoggIn) {
            return "Deconnexion"
        } else {
            return "Connexion"
        }
    };

    render() {
        return (
            <div>
                <ul className="nav nav-tabs bg-primary">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Acceuil</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ressources">Ressource</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.onClickAuth}>{this.renderAuthentificationLabel()}</a>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggIn: state.authentification.isLoggIn
    }
}


export default connect (mapStateToProps,actions)(Header);