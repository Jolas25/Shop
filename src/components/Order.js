import React, { Component } from "react";
import { FaRegMinusSquare } from "react-icons/fa";

export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img src={this.props.item.img} alt="Alt" />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price} UAH</b>
        <FaRegMinusSquare
          className="delete-icon"
          onClick={() => this.props.onDelete(this.props.item.id)}
        />
      </div>
    );
  }
}

export default Order;
