import React, {useState} from 'react';

const LongUrl = (props) => {
    const [longUrlState,
        setLongUrlState] = useState({text: ''})

    const inputHandler = (event) => {
        setLongUrlState({text: event.target.value})
    }

    const btnHandler = async() => {
        try {
            const longUrl = await navigator
                .clipboard
                .readText();
            setLongUrlState({text: longUrl})
        } catch (err) {
            console.error('Failed to read clipboard contents: ', err);
        }
    }

    return (
        <div className="container-longurl">
            <input
                className="inpt-long-url"
                placeholder="Long URL"
                onChange={inputHandler}
                value={longUrlState.text}/>
            <button className="btn-long-url bg-gradientblu" onClick={btnHandler}>Paste</button>
        </div>
    )
}

export default LongUrl