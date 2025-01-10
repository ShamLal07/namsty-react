import React from 'react';
import '../src/output.css';
import Body from './components/Body';
import Header from './components/Header';
import  Hero  from "./components/Hero";

export default function App() {
    return (
        <React.StrictMode>
            <div>
                <Header />
                <Hero />
                <Body />
            </div>
        </React.StrictMode>
    );
}
