import { createContext, useState } from 'react';
import './App.css';
import { data as initialData } from '/src/data/data';

export const MyContext = createContext();
function App() {
  const [data, setData] = useState(initialData);
  return (
    <MyContext.Provider value={{ data, setData }}>
      <Child />
    </MyContext.Provider>
  );
}

export default App;
