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


function LoginButton(props) {
    return ( <
        button onClick = { props.onClick } >
        Login </button>
    );
}

function LogoutButton(props) {
    return ( <
        button onClick = { props.onClick } >
        Logout </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick = () => {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick = () => {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = < LogoutButton onClick = { this.handleLogoutClick }
            />;
        } else {
            button = < LoginButton onClick = { this.handleLoginClick }
            />;
        }

        return ( <div >
            <
            Sambutan isLoggedIn = { isLoggedIn }
            /> { button } </div>
        );
    }
}

ReactDom.render(

    <
    LoginControl / > ,
    document.getElementById('root')
);
reportwebvitals();