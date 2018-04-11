import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    freeAgents: [
      {
        id: 3,
        firstName: "Aaron",
        lastName: "Ripkowski"
      }
    ],
    ownedPlayers: [
      {
        id: 1,
        firstName: "Aaron",
        lastName: "Rodgers",
        owner: {
          teamName: "Thats What Cheeshead"
        }
      },
      {
        id: 2,
        firstName: "Tom",
        lastName: "Brady",
        owner: {
          teamName: "Thats What Cheeshead"
        }
      },
      {
        id: 4,
        firstName: "Dez",
        lastName: "Bryant",
        owner: {
          teamName: "Dez Nutz"
        }
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Fantasy Football</h1>
        <div>
          <h2>Free Agents</h2>
          <ul>
            {this.state.freeAgents.map(p => (
              <li>
                {p.firstName} {p.lastName}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Owned Players</h2>
          <ul>
            {this.state.ownedPlayers.map(p => (
              <li>
                {p.lastName}, {p.firstName} -- <em>{p.owner.teamName}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
