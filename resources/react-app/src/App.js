import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
    const [tickets, setTickets] = useState([]);

    useEffect(()=>{
        axios.get('api/tickets').then(({data})=>{
            setTickets(data.data);
        });
    },[])

    return (
        <div className="App">
            <div className="imgg"/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <div className="flex-center position-ref full-height">
                <div className="content">
                    <ul class="list-group">
                        {tickets.map((ticket)=>{
                            return(<li class="list-group-item">{ticket.subject}</li>)
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
