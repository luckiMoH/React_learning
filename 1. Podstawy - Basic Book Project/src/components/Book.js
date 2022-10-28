import React from "react";

const Book = ({ img, title, author }) => {
    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = () => {
        alert("Hello World")
    }
    const complexExample = (author) => {
        console.log(author)
    }

    return (
        <article className='book'>
            <img src={img} alt="book"/>
            <h1>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>Click me!</button>
            <button type="button" onClick={() => complexExample(author)}>Click me! more complex example</button>
        </article>
    )
}
export default Book;