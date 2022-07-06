import { useEffect } from 'react';

function App(): JSX.Element {
  useEffect(() => {
    fetch('db.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return <h1>Hello</h1>;
}

export default App;
