// import Raact from 'react';
// import RaactDOM from 'react-dom/cliend';

const Custom = () => {
    return (
        <nav>
            <div>1</div>
            <input></input>
            <div>2</div>
        </nav>        
    );
}

const App = () => {
    // return <div> <h1> Welcome to React </h1> <button> Click </button> </div>;
    return (
        <div>
            <h1> 
                Welcome to React 
            </h1> 
            <button>
                Click
            </button>

            <Custom />
            <Custom />
        </div>
    );
}

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);

root.render(<App />);