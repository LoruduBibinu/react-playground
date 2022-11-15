const firstName = 'r0ulito';
const lastName = 'formateur';

function FirstName(props) {

    /*
    // Solution avec bonus
    const formatFirstName = (firstName) => {
        return firstName[0].toUpperCase() + firstName.substr(1);
    }

    return <span>{formatFirstName(props.text)}</span>
    */

    // Solution sans bonus
    return <span>{props.text[0].toUpperCase() + props.text.substr(1)}</span>
}

function LastName(props) {

    /*
    // Solution avec bonus
    const formatLastName = (lastName) => {
        return lastName.toUpperCase();
    }

    return <span>{formatLastName(props.text)}</span>
    */

    // Solution sans bonus
    return <span className="red-text">{props.text.toUpperCase()}</span>

}

const helloWorld = <h1>Hello <FirstName text={firstName}/> <LastName text={lastName}/></h1>;

ReactDOM.render(helloWorld, document.querySelector('#app'));
function Clock(props) { //composant React / constructeur 
    React.useEffect(() => {
        tick();        
    }, []); // crochet = tableau de dépendance sans : all timpe, crochets vides 1 fois 
    const [date, setDate] = React.useState(new Date()/*.toLocaleTimeString()*/); //"Hook d'état"  state : modifie l'état retourne tab i 0 : value i1 fonction, effect l'utilise ?
  // date value, setDate fonction de modificartion
 let time = date.toLocaleTimeString();
  // const [valeur, setter] = React.useState(valeur);
  
    const tick = () => {
        setInterval(() => {
            setDate((new Date()))
        }, 1000)
    } // à l'infini
    return (
        <div>
            <h1>Hello world</h1>
            <h2>Il est {time}.</h2>
        </div>
      );
  }
  
  ReactDOM.render(<Clock />, document.querySelector('#app'));