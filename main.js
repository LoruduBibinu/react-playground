function Listing() {
  const [card, setCard] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(response =>console.log(response));
  }, []);
    /*function displayUser (props) {
    const [name,email,company,phone,website] = [...props];
   // return 
  }*/
  console.log(card)
  return (<div><ul key={card.id}>test</ul></div>);
}
ReactDOM.render(<Listing/>, document.querySelector("#app"));
