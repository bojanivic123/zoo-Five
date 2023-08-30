import { useState } from "react";
import Animal from "./Animal";
import AddAnimal from "./AddAnimal";

const AnimalList = () => {
  const [animals, setAnimals] = useState([
    {
      species: "mamel",
      name: "whale",
      birthday: new Date().toLocaleDateString(),
    },
    { species: "mamel", name: "elephant" },
    { species: "mamel", name: "lion" },
    { species: "bird", name: "owl", birthday: new Date().toLocaleDateString() },
    {
      species: "bird",
      name: "eagel",
      birthday: new Date().toLocaleDateString(),
    },
  ]);

  const handleOnRemove = (index) => {
    setAnimals((prevValue) => prevValue.filter((animal, i) => i !== index));
  };

  const handleOnMoveTop = (index) => {
    setAnimals((prevValue) => [
      prevValue[index],
      ...prevValue.filter((animal, i) => i !== index),
    ]);
  };

  const handleAddAnimal = (animal) => {
    setAnimals((prevValue) => [...prevValue, animal]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "400px",
      }}
    >
      <AddAnimal handleAddAnimal={handleAddAnimal} />
      <table>
        <thead>
          <tr>
            <th>Species</th>
            <th>Name</th>
            <th>Birthday</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <Animal
              key={index}
              animal={animal}
              handleOnRemove={handleOnRemove}
              handleOnMoveTop={handleOnMoveTop}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnimalList;

