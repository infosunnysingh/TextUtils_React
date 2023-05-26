import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    const handleClearClick = () => {
        let newText = ('');
        setText(newText);
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const ReverseText=()=>{        
        setText(text.split('').reverse().join(''));
    }
    const copyText = () => {
        navigator.clipboard.writeText(text)
      }
      const handlefont =()=>{
        var element = document.getElementById("myBox");
        element.style.fontFamily = "cursive";
    }

    const [text, setText] = useState("Enter The Text");
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    <button type="button"  onClick={handleUpClick} className="btn btn-primary mx-1 mt-2"> Convert to Uper Case </button>
                    <button type="button"  onClick={handleLoClick} className="btn btn-success mx-1 mt-2"> Convert to Lower Case </button>
                    <button type="button"  onClick={handleClearClick} className="btn btn-warning mx-1 mt-2"> Clear Text </button>
                    <button type="button"  onClick={ReverseText} className="btn btn-danger mx-1 mt-2"> Reverse Text </button>
                    <button type="button"  onClick={copyText} className="btn btn-info mx-1 mt-2"> Copy Text </button>
                    <button type="button"  onClick={handlefont} className="btn btn-dark mx-1 mt-2"> Cursive Text </button>
                </div>
            </div>
            <div className="container">
                <h2>Your Text Summery</h2>
                <p>
                    {text.split(" ").length} words and {text.length} Characterstics
                </p>
                <p>{0.08 * text.split(" ").length}Minites Read</p>
                <h2>Preview</h2>
                <b>{text}</b>
            </div>
        </>
    );
}
