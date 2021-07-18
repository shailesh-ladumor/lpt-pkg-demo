import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchTickets} from './store/actions/ticketsAction';
import {connect} from 'react-redux';

function App(props) {
    const {tickets, fetchTickets} = props;
    const [isTitle, setIsTitle] = useState(true);

    useEffect(()=>{
        fetchTickets();
    },[])

    return (
        <div className="App">
            <div className="imgg"/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            {isTitle?
                <div className="flex-center position-ref full-height">
                    <div className="content">
                        <div className="title m-b-md">
                            How To use
                            <span className="sub-title">
                            <strong> Redux</strong>
                        </span> in
                            <span className="App-link">In React</span>
                        </div>
                        <div className="links">
                            <a href="#"><strong className="author">- By Shailesh Ladumor</strong></a>
                        </div>
                    </div>
                </div>
                :
                <div className="flex-center position-ref full-height">
                    <div className="content">
                        <ul className="list-group">
                            {tickets.map((ticket)=>{
                                return(<li className="list-group-item">{ticket.subject}</li>)
                            })}
                        </ul>
                    </div>
                </div>
            }
        </div>
    );
}
const mapStateToProps = (state) =>{
    const {tickets} = state;
    return {tickets};
}
export default connect(mapStateToProps, {fetchTickets})(App);
