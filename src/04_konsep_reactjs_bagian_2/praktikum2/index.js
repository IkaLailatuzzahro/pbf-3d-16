import React from 'react';
import './index.css';
import ReactDom from 'react-dom';
import reportwebvitals from './reportWebVitals';

function Sambutan(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <SambutanUser /> ;
    }
    return <SambutanTamu /> ;
}


function SambutanUser(props) {
    return <h1 > Selamat Datang 1841720153 - Ika Lailatuzzahro! </h1>;

}

function SambutanTamu(props) {
    return <h1 > Mohon melakukan sign up terlebih dahulu. </h1>;

}
ReactDom.render(
    // silahkan coba ganti nilai islonggedIn={false}
    <
    Sambutan isLoggedIn = { true }
    />,
    document.getElementById('root')
);

reportwebvitals();