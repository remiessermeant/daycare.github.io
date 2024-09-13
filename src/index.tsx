import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '@aws-amplify/ui-react/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/home/App';
import './main';
import UploadPage from './pages/upload-page/UploadPage';
import Error from './pages/error/Error';
import Header from './Footer/Header';
import Nav from './Footer/Nav';
import Footer from './Footer/Footer';
import Search from './pages/search/Search';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
    },
    {
        path: '/upload-video',
        element: <UploadPage />,
    },
    {
        path: '/search',
        element: <Search />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <div className="flex items-center flex-col space-y-20">
            <Header />
            <Nav />
            <RouterProvider router={router} />
            <Footer />
        </div>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
