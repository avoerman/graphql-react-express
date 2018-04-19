import React, { Component } from "react";
import "./OwnerDetails.css";

class OwnerDetails extends Component {
  render() {
    return !this.props.ownerId || this.props.ownerId === -1
      ? ""
      : this.showDetails();
  }

  showDetails() {
    return (
      <div className="details">
        <h2>...Team Name...</h2>
      </div>
    );
  }
}

export default OwnerDetails;
