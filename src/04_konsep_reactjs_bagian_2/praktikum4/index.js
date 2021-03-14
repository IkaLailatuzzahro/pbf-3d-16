import React from 'react';
import './index.css';
import ReactDom from 'react-dom';
import reportwebvitals from './reportWebVitals';

function NumberList(props) {
    const nim = props.nim;
    const listItems = nim.map((number) =>
        <
        li key = { number.toString() } > { number } <
        /li>
    );
    return ( <
        ul > { listItems } < /ul>
    );
}

const nim = [1, 8, 4, 7, 2, 0, 6];

ReactDom.render( <
    NumberList nim = { nim }
    />,
    document.getElementById('root')
);

reportwebvitals();