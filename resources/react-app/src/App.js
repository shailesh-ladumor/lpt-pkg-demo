import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="imgg"/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <div className="flex-center position-ref full-height">
                <div className="content">
                    <div className="title m-b-md">
                        How To Call
                        <span className="sub-title">
                            <strong> Laravel</strong>
                        </span> API
                        <span className="App-link">In React</span>
                    </div>
                    <div className="links">
                        <a href="#"><strong className="author">- By Shailesh Ladumor</strong></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
