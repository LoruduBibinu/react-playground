/* 
// Étape 1
class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Bonjour, monde !</h1>
          <h2>Il est {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

ReactDOM.render(<Clock date={new Date()}/>, document.querySelector('#app')); 

*/

/* 

// Étape 2

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector('#app')); 


 */

// Étape 3

/* class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

ReactDOM.render(<Clock />, document.querySelector('#app'));  */
let zw = new Audio("ZA-WARUDO.mp3");
function Clock(props) {
  let intervalref = React.useRef();
  console.log(intervalref);
  React.useEffect(() => {
    tick();
  }, []);
  const tick = () => {
    intervalref.current = setInterval(() => {
      setDate(new Date());
    }, 1000);
  };
  let [color, setColor] = React.useState("#00000");
  const [date, setDate] = React.useState(new Date());
  const changeColor = () => {
    setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
  };
  const resetColor = () => {
    setColor("#000000");
  };
  const zaWarudo /*regardez jojo*/ = () => {
    zw.play();
    clearInterval(intervalref.current);
  };
  const kingCrimson = () => {
    tick();
  };

  return (
    <div>
      <h1>Hello world</h1>
      <h2 style={{ color }}>Il est {date.toLocaleTimeString()}.</h2>
      <div id="button">
        <div className="couleur"><button onClick={changeColor}>vroumvroum couleur</button>
        <button onClick={resetColor}>j'aime noir</button></div>
        <div className="couleur"><button onClick={zaWarudo}>toki wo tomare</button>
        <button onClick={kingCrimson}>Bruit de requiem</button></div>
      </div>
    </div>
  );
}

ReactDOM.render(<Clock />, document.querySelector("#app"));
