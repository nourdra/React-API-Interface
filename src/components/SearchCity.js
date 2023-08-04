import React from "react";

function SearchCity( onQuery ) {
    function handleInput(e) {
        console.log(e.target.value);
    }

    return (
        <div className="citySearch">
            <label htmlFor="name">City </label>
            <input type="text" onInput={handleInput}/>
        </div>
    )
}

export default SearchCity;