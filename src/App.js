import "./App.css";
import Navbar from "./Components/Navbar";
import bg from "./GOT/bg.jpg";
import Scores from "./Components/Scores";
import Cards from "./Components/Cards";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      best: 0,
    };

    this.increaseCurrent = this.increaseCurrent.bind(this);
    this.setCurrentZero = this.setCurrentZero.bind(this);
  }

  increaseCurrent = () => {
    this.setState({
      current: this.state.current + 1,
    });
    if (this.state.current >= this.state.best) {
      this.setState({
        best: Math.max(this.state.current, this.state.best) + 1,
      });
    }
  };
  setCurrentZero = () => {
    this.setState({ current: 0 });
  };

  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <Scores current={this.state.current} best={this.state.best} />
        <Cards
          increaseCurrent={this.increaseCurrent}
          setCurrentZero={this.setCurrentZero}
        />
      </div>
    );
  }
}

export default App;
