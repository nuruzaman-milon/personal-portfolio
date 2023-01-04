import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import ProjectDetails from "../home/ProjectDetails";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/projects/:id',
                element:<ProjectDetails></ProjectDetails>,
                loader:({params}) =>fetch(`http://localhost:5000/projects/${params.id}`)
            },
        ]
    }
])