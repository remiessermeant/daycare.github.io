import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/home/Home';
import AboutUs from './pages/about-us/AboutUs';
import Error from './pages/error/Error';
import Header from './composants/Header';
import Nav from './composants/Nav';
import Footer from './composants/Footer';
import OurStory from './pages/our-story/OurStory';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <Error/>,
    },
    {
        path: '/about-us',
        element: <AboutUs/>,
    },
    {
        path: '/our-story',
        element: <OurStory/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <div className="flex items-center flex-col space-y-20">
            <Header/>
            <Nav/>
            <RouterProvider router={router}/>
            <Footer/>
        </div>
    </React.StrictMode>,
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
