import "./App.css";

import Product from "./components/productCard/Product";
import Task from "./components/task/Task"
import Storage from "./components/Storage/Storage"
import NewTask from "./components/newTask/NewTask";
function App() {
  return (
    <>
      <div className="box">
        {/* <Product /> */}
        {/* <Task/> */}
        {/* <Storage/> */}
        <NewTask/>
      </div>
    </>
  );
}

export default App;
