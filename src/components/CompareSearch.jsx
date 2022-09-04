import React from "react";
import SelectSearch from "react-select-search";

import '../App.css'

const CompareSearch = ({ options, onChange1, onChange2, onSubmit, pokemon1, pokemon2 }) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="holders">
                <SelectSearch
                    className="select-search"
                    options={options}
                    search
                    placeholder=""
                    value={pokemon1}
                    onChange={(value) => onChange1(value)}
                />

                <SelectSearch
                    className="select-search"
                    options={options}
                    search
                    placeholder=""
                    value={pokemon2}
                    onChange={(value) => onChange2(value)}
                />

                <button type="submit" className="comparebtn">
                    Compare
                </button>
            </div>
        </form>
    );
}

export default CompareSearch