import React from 'react';
import "./scss/main.scss"


const App = () => {
    return (
        <section>
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};

const Book = () => {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    )
}
const Image = () => {
    return (
        <img src="https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg" alt="book"/>
    )
}
const Title = () => {
    return (
        <h1>It Starts with Us: A Novel (It Ends with Us)</h1>
    )
}
const Author = () => {
    return (
        <h2>Colleen Hoover</h2>
    )
}

export default App;