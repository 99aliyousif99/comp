import "./App.css";

import Product from "./components/productCard/Product";
import Task from "./components/task/Task"
import Storage from "./components/Storage/Storage"
function App() {
  return (
    <>
      <div className="box">
        {/* <Product /> */}
        <Task/>
        {/* <Storage/> */}
      </div>
    </>
  );
}

export default App;
