import React from 'react';
import './index.css';
import ReactDom from 'react-dom';
import reportwebvitals from './reportWebVitals';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Nama: Ika lailatuzzahro, Nim: 1841720153' };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        alert('Halo, ' + this.state.value + ' !');
        event.preventDefault();
    }

    render() {
        return ( <
            form onSubmit = { this.handleSubmit } >
            <
            label >
            Biodata:
            <
            textarea value = { this.state.value }
            onChange = { this.handleChange }
            /> </label> <
            input type = "submit"
            value = "Submit" / >
            </form>
        );
    }
}

ReactDom.render( <
    NameForm / > ,
    document.getElementById('root')
);

reportwebvitals();