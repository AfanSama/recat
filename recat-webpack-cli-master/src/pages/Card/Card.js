import React, { Component } from 'react';
import './Card.css'
export default class Card extends Component {
    render() {
        return(
            <div class='box'>
                {this.props.user.name}
            </div>
        )
    }
}