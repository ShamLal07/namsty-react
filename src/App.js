import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './output.css';
import Header from './components/Header';
import Index from './components/Index';
import About from './components/About';
import Contact from './components/Contact';

function AppLayout() {
    return (
        <React.StrictMode>
            <div>
                <Index />
            </div>
        </React.StrictMode>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
]);

export default function App() {
    return (
        <>
            <Header />
            <RouterProvider router={appRouter} />
        </>
    );
}
