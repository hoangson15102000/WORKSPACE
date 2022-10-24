import React, { Component } from 'react';
class Hello extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>This is class component +  {this.props.name}</h1>
            </div>
        )
    }
}
export default Hello;