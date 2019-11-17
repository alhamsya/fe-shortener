import React, {Component} from 'react';
import './App.css';

import Navbar from '../components/Navbar/navbar'
import LongUrl from '../components/LongUrl/longUrl'
import ShortUrl from '../components/ShortUrl/shortUrl'

class App extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="App">
                <Navbar/>
                <h1 id="myInput">URL Shortener</h1>
                <LongUrl/>
                <ShortUrl/>
            </div>
        )
    }
}

export default App;
