import React from 'react';
import "./scss/main.scss"
import {books} from "./components/books"
import Book from "./components/Book"


const App = () => {

    return (
        <section className='booklist'>
            {books.map((book) => {
                return (
                    <Book key={book.id} {...book}/>
                )
            })}
        </section>
    );

};


export default App;