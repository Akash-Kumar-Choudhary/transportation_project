
import { Routes , Route } from "react-router-dom";
import { Home } from "./Page/HomePage";
import Login from "./Page/Login";
import Register from "./Page/Register";
import { ProtectedRoute } from "./Component/Layout/ProtectedRoute";
import { Transport } from "./Page/Transport";
import { Manufacture } from "./Page/Manufacture";
function App() {
  return (
    <>

    <Routes>
      <Route path = '/login' element = {<Login/>} />
      <Route path = '/register' element = {<Register/>} />
      <Route path = '/' element = {<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path = '/transport' element = {<ProtectedRoute><Transport/></ProtectedRoute>} />
      <Route path = '/manufacture' element = {<ProtectedRoute><Manufacture/></ProtectedRoute>} />
    </Routes>

    </>
  );
}

export default App;
