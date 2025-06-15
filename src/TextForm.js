import React, {useState} from 'react'

export default function TextForm(props){
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClrClick = () => {
        let newText = "";
        setText(newText);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!","success");
    }

    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
     
    const handleChange = (event) => { 
        setText(event.target.value);
    }


    const[text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor : props.mode === 'dark' ? '#27288a' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-info mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button type="button" className="btn btn-info mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button type="button" className="btn btn-info mx-1" onClick={handleClrClick}>Clear Text</button>
            <button type="button" className="btn btn-info mx-1" onClick={handleCopy}>Copy Text</button>
            <button type="button" className="btn btn-info mx-1" onClick={handleSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters.</p>
            <p>{text.split(".").length-1} sentence.</p>
            <p>Time required to count words is {0.008 * text.split(" ").length} minutes.</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter a text for preview"}</p>
        </div>
        </>
    )
}