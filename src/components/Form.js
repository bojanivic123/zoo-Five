import { useState } from "react";

const Form = ({handleAddAnimal, sectors}) => {
    const [specie, setSpecie] = useState("");
    const [name, setName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [sector, setSector] = useState("");

    return (
        <form onSubmit={e => {e.preventDefault(); handleAddAnimal({specie, name, dateOfBirth, sector})}}>
            <label>Specie <input type="text" value={specie} onChange={e => setSpecie(e.target.value)}/></label>
            <label>Name<input type="text" value={name} onChange={e => setName(e.target.value)}/></label>
            <label>Date of birth<input type="date" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)}/></label>
            <label>Sector 
                <select onChange={e => setSector(e.target.value)}>
                    {sectors.map((sector, i) => {
                        return (
                            <option key={i} value={sector}>{sector}</option>
                        )
                    })}
                </select>
            </label>
            <button type="submit">Add animal</button>
        </form>
    )
}

export default Form;

