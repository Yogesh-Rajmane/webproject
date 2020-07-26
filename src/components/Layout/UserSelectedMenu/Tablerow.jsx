import React, { Component } from 'react'

class Tablerow extends Component {
    render() {

        return (
            /////////////////row of table start////////////////////////
            <tr className="tablerow">
                <td >{this.props.indexid}</td>
                <td>{this.props.day}</td>
                <td>{this.props.menuname}</td>
                <td>&#8377; {this.props.price} /-</td>
                <td>
                    <div> 
                        <input type="checkbox"></input>
                        <span style={{margin:'10px',color:'green'}}>&#43;</span>
                        <span style={{color:'red'}}>&minus;</span>
                    </div>
                </td>
            </tr>
            /////////////////row of table start////////////////////////
        )
    }
}
export default Tablerow;