import React, { Component } from "react";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className="full-item">
        <div className="full-item__container">
          <div className="img">
            <img
              src={this.props.item.img}
              alt="Alt"
              onClick={() => this.props.onShowItem(this.props.item)}
            />
          </div>
          <div className="info">
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price} UAH</b>
            <div
              className="add-to-card"
              onClick={() => this.props.onAdd(this.props.item)}
            >
              +
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFullItem;
