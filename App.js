import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (
    <h1>This is a silly title</h1>
);

const HeaderComponent = () => (
    <div id="container" className="container">
        {Title()}
        <Title />
        <Title></Title>
        <p>Useless para</p>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);