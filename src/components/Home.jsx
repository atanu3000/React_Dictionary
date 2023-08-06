import { useState } from "react";

const apiURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export default function Home() {
    const [word, setWord] = useState("");
    const [meaning, setMeaning] = useState("");
    const [error, setError] = useState("");
    const searchMeaning = async (e) => {
        if (word.trim() != "") {
            const response = await fetch(apiURL + word);
            const data = await response.json();
            if (data.title == "No Definitions Found") {
                setError(data.title);
                setMeaning("");
            } else {
                setError("");
                setMeaning(data[0].meanings[0].definitions[0].definition);
            }
        } else {
            setError("Please enter a word");
            setMeaning("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            searchMeaning();
        }
    }

    const toCopyWord = () => {
        const myBox = document.getElementById('myBox').value;
        navigator.clipboard.writeText(myBox)
            .then(() => alert('Text copied to clipboard: '))
            .catch(err => console.error('Failed to copy text: '));
    }
    const toCopyResult = () => {
        const result = document.getElementById('result').innerHTML;
        navigator.clipboard.writeText(result)
            .then(() => alert('Text copied to clipboard: '))
            .catch(err => console.error('Failed to copy text: '));
    }

    return (
        <div className="container mt-5 px-3">
            {(error || meaning) && <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="m-0">Search Word</p>
                    <button className="btn btn-outline-secondary d-flex align-items-center" style={{"height": "40px"}} onClick={toCopyWord} ><ion-icon name="copy-outline"></ion-icon></button>
                </div> }
            <div class="input-group mb-3">
                <input 
                    id="myBox"
                    type="text"
                    className="form-control fs-2"
                    placeholder="Enter word"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    onKeyDown={handleKeyPress} 
                    // aria-describedby="button-addon2" 
                />
                <button class="btn btn-outline-secondary d-flex align-items-center fs-2" type="button" id="button-addon2" onClick={searchMeaning}><ion-icon name="arrow-forward-outline"></ion-icon></button>
            </div>
            {(error || meaning) && <hr className="my-5 w-75 mx-auto text-primary"/>}
            <div>
                {(error || meaning) && <div className="d-flex justify-content-between align-items-center">
                    <p className="m-0">Search Result</p>
                    <button className="btn btn-outline-secondary d-flex align-items-center" style={{"height": "40px"}} onClick={toCopyResult} ><ion-icon name="copy-outline"></ion-icon></button>
                </div> }
                <div>
                    {error && (<h4 className="text-danger mt-4 fw-bold">Error: <span id="result">{error}</span></h4>)}
                    {meaning && (<h4 className="text-success mt-4 fw-bold">Meaning: <span id="result">{meaning}</span></h4>)}
                </div>
            </div>
        </div>
    );
}
