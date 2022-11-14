//const helloWorld = React.createElement('h1', {}, 'Hello world!');

const helloWorld = <h1>Hello world!</h1>;
const lastName = "butcher" ;
let firstNamelow ="billy";
let firstName = firstNamelow.split("");
for (let el in firstName){
   firstName[0] = firstName[0].toUpperCase();
}
console.log(firstName);
const prstvs = <section> <p> <span className="ln" >{lastName} </span> <span className="fn ">{firstName}</span></p></section>
ReactDOM.render(
    <div>

        {helloWorld}
       {prstvs}
    </div>,
    document.querySelector('#app')
);