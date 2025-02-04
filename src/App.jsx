import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import "./App.css";
import Product from "./components/productCard/Product";
import Task from "./components/task/Task";

import NewTask from "./components/newTask/NewTask";
import RTE from "./components/RTE/RTE";
function App() {
  return (
    <>

      <Router>
      <div className="nav">
          <Link to="/product">Product</Link>
          <Link to="/task">Task</Link>
         
          <Link to="/new-task">New Task</Link>
          <Link to="/">RTE</Link>
        </div>
        <div className="box">
          <Routes>
            <Route path="/product" element={<Product />} />
            <Route path="/task" element={<Task />} />
            
            <Route path="/new-task" element={<NewTask />} />
            <Route path="/" element={<RTE />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
