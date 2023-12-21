import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import helloFunction from './demo_default_export';
import {hello, greet} from './demo_named_export';
import variable, {hello1, greet1} from './demo_default_and_named_export';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

helloFunction();
console.log(helloFunction);


console.log(hello, greet);
hello();
greet();

console.log(variable);
hello1();
greet1();