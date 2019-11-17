import React, {useState} from 'react'

const ShortUrl = (props) => {
    const [shortUrlState,
        setShortUrlState] = useState({text: 'Short Url', copyShortUrl: false, disabledBtn: false})

    const btnHandler = () => {
        shortUrlState.copyShortUrl
            ? setShortUrlState({text: "Copied", disabledBtn: true})
            : setShortUrlState({text: "Copy Short URL", copyShortUrl: true});
    }

    const styleHandler = shortUrlState.disabledBtn
        ? "btn-short-url"
        : "btn-short-url bg-gradientblu";

    return (
        <div className="ShortUrl">
            <button
                disabled={shortUrlState.disabledBtn}
                className={styleHandler}
                onClick={btnHandler}>{shortUrlState.text}
            </button>
        </div>
    )
}

export default ShortUrl