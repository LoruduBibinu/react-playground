//const helloWorld = React.createElement('h1', {}, 'Hello world!');

const firstName = 'el';
const lastName = 'mingo';

function FirstName (props) {
 return <span> {props.text[0].toUpperCase()+props.text.slice(1)}</span>
}

function LastName (props) {
  return <span className="red-text"> {props.text[0].toUpperCase()+props.text.slice(1)}</span>
}
 
// Solution sans bonus
const helloWorld = (
<h1> Hello <FirstName text={firstName}/>
<LastName text={lastName}/>
  </h1>);
ReactDOM.render(helloWorld,document.querySelector("#app"))


/**
 * 
 * Solution avec bonus
 */

/*
 const formatFirstName = (value) => value[0].toUpperCase() + value.slice(1);

 const formatLastName = (value) => value.toUpperCase();
 
 // Solution avec bonus
 const helloWorld = (
   <h1>
     Hello <span>{formatFirstName(firstName)}</span>{" "}
     <span className="red-text">{formatLastName(lastName)}</span>
   </h1>
 );

 */

ReactDOM.render(helloWorld, document.querySelector('#app'));
