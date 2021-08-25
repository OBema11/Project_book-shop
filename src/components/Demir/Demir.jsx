import React from "react";
import Cards from 'react-credit-cards';
import "react-credit-cards/es/styles-compiled.css";
import "./Demir.css";
import { createBrowserHistory } from "history";
import { Paper } from "@material-ui/core";

export default class Payment extends React.Component {
    state = {
        cvc: "",
        expiry: "",
        focus: "",
        name: "",
        number: "",
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };
    paynow = () => {
        const { history } = this.props;
        history.push("/");
    };

    render() {
        return (
            <Paper style={{ background: "url(https://wallpaper.dog/large/238738.png) no-repeat" }}>
                <div id="PaymentForm">
                    <Paper style={{
                        width: '450px',
                        height: '600px',
                        backgroundColor: 'transparent',
                        marginTop: '10px',
                        marginLeft: '450px'
                    }}>
                        <Cards
                            cvc={this.state.cvc}
                            expiry={this.state.expiry}
                            focused={this.state.focus}
                            name={this.state.name}
                            number={this.state.number}
                            style={{ backgroundColor: "blue" }}
                        />
                        <form className="inp__form">
                            <input
                                className="inp-input"
                                type="tel"
                                name="number"
                                placeholder="Card Number"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <input
                                className="inp-input"
                                type="tel"
                                name="name"
                                placeholder="Card Name"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <input
                                className="inp-input"
                                type="tel"
                                name="cvc"
                                placeholder="CVC"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <input
                                className="inp-input"
                                type="tel"
                                name="expiry"
                                placeholder="expiry"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />

                            <button className="pay_now" onClick={this.paynow}>
                                Pay now
                            </button>
                        </form>
                    </Paper>
                </div>
            </Paper>
        );
    }
}