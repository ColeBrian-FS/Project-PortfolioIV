import { useState, useEffect } from 'react';
const App = () => {
  const [query, setQuery] = useState('kettlebell');
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(`https://exercisedb.p.rapidapi.com/exercises/equipment/${query}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        "x-rapidapi-key": "ac819a08e2msh6beaecd882152c1p1188e5jsnf15223ffb4db"
      }
    })
      .then(res => res.json())
      .then(json => setdata(json))
      .catch(err => {
        console.error(err);
      });

  }, [query]);
  return (
    <div>
      <button onClick={() => setQuery('barbell')}>Get Barbell</button>
      <button onClick={() => setQuery('dumbbell')}>Get Dumbbell</button>
      <button onClick={() => setQuery('kettlebell')}>Get Kettlebell</button>
      {
        data < 1 ? <p>Loading...</p> :
          data.map(e => <pre>{JSON.stringify(e)}</pre>)
      }
    </div>
  );
}

export default App;