import React from 'react';
import './index.css';
import ReactDom from 'react-dom';
import reportwebvitals from './reportWebVitals';

function Blog(props) {
    const sidebar = ( <
        ul > {
            props.posts.map((post) =>
                <
                li key = { post.id } > { post.title } </li>
            )
        } </ul>
    );
    const content = props.posts.map((post) =>
        <div key = { post.id } >
        <
        h3 > { post.title } </h3> <
        p > { post.content } </p> </div>
    );
    return ( <
        div > { sidebar } <
        hr / > { content } </div>
    );
}

const posts = [
    { id: 1, title: 'Biodata Saya', content: 'NIM: 1841720153 - Nama: Ika Lailatuzzahro' },
    { id: 2, title: 'Alamat Rumah', content: 'Alamat rumah saya di Jl.Raya Kabuh Jombang' }
];

ReactDom.render( <
    Blog posts = { posts }
    />,
    document.getElementById('root')
);

reportwebvitals();