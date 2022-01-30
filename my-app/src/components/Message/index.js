import React from 'react'
import './style.sass';
export class Message extends React.Component{
    render(){

        const {text, myString} = this.props

        return ( 
            <h3 className="title">
                Hello, {text}, {myString}!
            </h3>
        )
    }
}