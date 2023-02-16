import './App.css';
import {useState} from 'react';

const URL = 'https://newsapi.org/v2';
const APIKEY = '6aa7b01ce18440bab3611137a6acd3cb';

function App() {
 const [error, setError] = useState(null);
 const [isLoaded, setIsLoaded] = useState(false);
 const [items, setItems] = useState([]);
 const [selectedItem,setSelectedItem] = useState(null);
 
useEffect(() => {
  const criteria = 'top-headlines?country=us&category=business'
  const address = URL + '/' + criteria + '&apikey=' + APIKEY;

axios.get(address)
  .then((response) => {
    setError(null);
    setIsLoaded(true);
    setItems(response.data.articles);
  }).catch(error => {
    alert(error);
  });
},[])

if (error) {
  return <p>{error.message}</p>
}
else if (!isLoaded) {
  return <p>Loading...</p>;
}
else {
 return (
  <div>
      {items.map(item =>(
        <div key={item.title}>
          <h3>{item.title}</h3>
          <img src={item.urlToImage}></img>
          <p>{item.description}</p>
        </div>
      ))}
  </div>
  );
  }
}

export default App;
