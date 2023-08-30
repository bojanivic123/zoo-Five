import { useState } from "react";

const AddAnimal = ({ handleAddAnimal }) => {
  const [species, setSpecies] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleAddAnimal({
          species,
          name,
          birthday,
        });
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100px",
          margin: "10px",
        }}
      >
        <label style={{ marginBottom: "10px" }}>Species</label>
        <input
          type="text"
          value={species}
          onChange={(event) => setSpecies(event.target.value)}
          required
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100px",
          margin: "10px",
        }}
      >
        <label style={{ marginBottom: "10px" }}>Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100px",
          margin: "10px",
        }}
      >
        <label style={{ marginBottom: "10px" }}>Date of Birth</label>
        <input
          type="date"
          value={birthday}
          onChange={(event) => setBirthday(event.target.value)}
          required
        />
      </div>
      <button type="submit">Add Animal</button>
    </form>
  );
};

export default AddAnimal;

