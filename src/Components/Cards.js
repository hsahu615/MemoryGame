import React, { Component } from "react";
import "../styles/Cards.css";
import App from "../App";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffled: [
        ["ySdrLBh/Arya-Stark.jpg", 0],
        ["cC7pM43/KingBran.png", 0],
        ["Gnvchzp/catelin-Stark.png", 0],
        ["GWKSZz8/Cersei-Lannister.jpg", 0],
        ["TP4X4sf/Daenerys-Targaryen.jpg", 0],
        ["BZtfgbc/Jaime-Lannister.jpg", 0],
        ["VqzTwBx/JonSnow.png", 0],
        ["vc15MVj/Jorah-Mormont.jpg", 0],
        ["kDZ608J/SandorClegane.jpg", 0],
        ["pXVBNsr/Sansa-Stark.jpg", 0],
        ["1mBTGfs/Theon-Greyjoy.jpg", 0],
        ["VvSx5nx/Episode-6-scene-15.jpg", 0],
      ],
    };
  }

  shuffle(array) {
    let currentIndex = 12,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  findIndex(arr, k) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] == k) {
        return i;
      }
    }
  }

  reset() {
    let items = [...this.state.shuffled];
    for (let i = 0; i < 12; i++) {
      items[i][1] = 0;
    }
    this.setState({
      shuffled: items,
    });
  }

  add = (e) => {
    this.setState({ shuffled: this.shuffle(this.state.shuffled) });

    const a = this.findIndex(this.state.shuffled, e.target.src.slice(17));
    let items = [...this.state.shuffled];
    let item = [...items[a]];
    item[1] = item[1] + 1;
    items[a] = item;
    this.setState({
      shuffled: items,
    });
    if (this.state.shuffled[a][1] > 0) {
      const x = this.props.setCurrentZero;
      x();
      this.reset();
    } else {
      const x = this.props.increaseCurrent;
      x();
    }
  };

  render() {
    const links = this.state.shuffled;
    return (
      <div className="cards">
        <div className="card" onClick={this.add}>
          <img src={"https://i.ibb.co/" + links[0][0]}></img>
        </div>
        <div className="card" onClick={this.add}>
          <img src={"https://i.ibb.co/" + links[1][0]}></img>
        </div>
        <div className="card" onClick={this.add}>
          <img src={"https://i.ibb.co/" + links[2][0]}></img>
        </div>
        <div className="card" onClick={this.add}>
          <img src={"https://i.ibb.co/" + links[3][0]}></img>
        </div>
        <div className="card" onClick={this.add}>
          <img src={"https://i.ibb.co/" + links[4][0]}></img>
        </div>
        <div className="card" onClick={this.add}>
          <img src={"https://i.ibb.co/" + links[5][0]}></img>
        </div>
        <div className="card" onClick={this.add}>
          <img src={"https://i.ibb.co/" + links[6][0]}></img>
        </div>
        <div className="card" onClick={this.add}>
          <img src={"https://i.ibb.co/" + links[7][0]}></img>
        </div>
        <div className="card" onClick={this.add}>
          <img src={"https://i.ibb.co/" + links[8][0]}></img>
        </div>
        <div className="card" onClick={this.add}>
          <img src={"https://i.ibb.co/" + links[9][0]}></img>
        </div>
        <div className="card" onClick={this.add}>
          <img src={"https://i.ibb.co/" + links[10][0]}></img>
        </div>
        <div className="card" onClick={this.add}>
          <img src={"https://i.ibb.co/" + links[11][0]}></img>
        </div>
      </div>
    );
  }
}
