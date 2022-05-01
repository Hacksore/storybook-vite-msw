import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/test').then(res => res.json()).then(data => setData(data));
  }, []);

  return (
    <div className="App">
      {JSON.stringify(data)}
    </div>
  )
}

export default App
