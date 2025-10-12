import Homecrud from "./CRUD/Homecrud"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateTask from "./CRUD/CreateTask"
import Tasks from "./CRUD/Tasks"
import EditTask from "./CRUD/EditTask"


const App = ()=>{
    return(
        <div>
           <BrowserRouter>
           <Homecrud/>
           <Routes>
            <Route element={<CreateTask/>} path="/"/>
            <Route element={<Tasks/>} path="/tasks"/>
            <Route element={<EditTask/>} path="/edit/:index"/>
            <Route/>
           </Routes>
           </BrowserRouter>
        </div>
    )
}

export default App