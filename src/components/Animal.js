const Animal = ({ animal, handleOnRemove, handleOnMoveTop, index }) => {
    return (
      <tr>
        <td>{animal.species}</td>
        <td>{animal.name}</td>
        <td>{animal.birthday ? animal.birthday : "Nepoznat"}</td>
        <td>
          <button onClick={() => handleOnRemove(index)}>Remove</button>
        </td>
        <td>
          <button
            onClick={() => {
              handleOnMoveTop(index);
            }}
          >
            Move to top
          </button>
        </td>
      </tr>
    );
  };
  
export default Animal;





