import { useEffect, useState } from "react";
import firebaseService, { testMethod } from "./service/firebase";

function App() {
  const [data, setData] = useState<any>({});
  const [firebaseData, setFirebaseData] = useState([]);

  useEffect(() => {
    // get fetch data
    fetch("/api/v2/pokemon/ditto")
      .then((res) => res.json())
      .then((data) => setData(data));

    // get service data
    firebaseService.getData().then((data) => setFirebaseData(data));
  }, []);

  return (
    <div className="App">
      Height: {data.height}
      <div>{JSON.stringify(firebaseData)}</div>
      <div>{JSON.stringify(testMethod())}</div>
    </div>
  );
}

export default App;
