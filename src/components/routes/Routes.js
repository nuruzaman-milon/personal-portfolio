import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../home/AboutMe";
import AllProjects from "../home/AllProjects";
import BlogsContainer from "../home/Blogs/BlogsContainer";
import Form from "../home/Blogs/Form";
import Contact from "../home/Contact";
import Home from "../home/Home";
import ProjectDetails from "../home/ProjectDetails";
import Skills from "../home/Skills";
import Main from "../layouts/Main";
import ShowResume from "../ShowResume";

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
                loader:({params}) =>fetch(`https://protfolio-server-alpha.vercel.app/projects/${params.id}`)
            },
            {
                path:'/about-me',
                element:<AboutMe></AboutMe>
            },
            {
                path:'/my-contacts',
                element:<Contact></Contact>
            },
            {
                path:'/my-projects',
                element:<AllProjects></AllProjects>
            },
            {
                path:'/my-skills',
                element:<Skills></Skills>
            },

            {
                path:'/view-resume',
                element:<ShowResume></ShowResume>
            },
            {
                path:'/my-blogs',
                element: <BlogsContainer></BlogsContainer>
            },
            {
                path:'/form-for-adding-blogs',
                element: <Form></Form>
            },
        ]
    }
])