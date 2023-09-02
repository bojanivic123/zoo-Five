import { useState } from "react";
import Animal from "./Animal";
import Form from "./Form";

const AnimalList = () => {
    const [animals, setAnimals] = useState([{specie: "Dog", name: "Rex", dateOfBirth: new Date(99, 8, 15)}, {specie: "Cat", name: "Catsy", dateOfBirth: new Date(2007, 10, 16)}, {specie: "Tiger", name: "Tigermen", dateOfBirth: null}]);

    const sectors = ["dogs", "cats", "lions", "tigers", "snakes", "rabbits", "ducks"];

    const handleRemove = index => {
        setAnimals(previousValue => previousValue.filter((animal, i) => i !== index));
    }

    const handleMove = index => {
        setAnimals(previousValue => [previousValue[index], ...previousValue.filter((animal, i) => i !== index)]);
    }

    const handleAddAnimal = newAnimal => {
        setAnimals(previousValue => [...previousValue, newAnimal]);
    }

    return (
        <div>
            <Form 
            handleAddAnimal={handleAddAnimal}
            sectors={sectors}
            />
            <table>
                <thead>
                    <tr>
                        <th>Specie</th>
                        <th>Name</th>
                        <th>Date of birth</th>
                        <th>Sector</th>
                    </tr>
                </thead>
                <tbody>
                    {animals.map((animal, index) => {
                        return (
                            <Animal 
                            key={index}
                            specie={animal.specie}
                            name={animal.name}
                            dateOfBirth={animal.dateOfBirth}
                            sector={animal.sector}
                            index={index}
                            handleRemove={handleRemove}
                            handleMove={handleMove}
                            />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AnimalList;





