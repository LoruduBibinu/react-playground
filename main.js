function listing () {

  const card = [];
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((list) => list.json())
  .then((list) => 
    for(let {name,email,company,website,phone} of list) {
        let data = [name,email,company,website,phone]
        card.push(data);
        })
    
      
 
  .catch((err) => {
    console.log(err.message);
  });
return 
     }
  ReactDOM.render(
    <listing />,
    document.querySelector('#app')
  );