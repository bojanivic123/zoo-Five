const Animal = ({specie, name, dateOfBirth, sector, handleRemove, handleMove, index}) => {
    return (
        <tr>
            <td>{specie}</td>
            <td>{name}</td>
            <td>{dateOfBirth ? new Date(dateOfBirth).toLocaleDateString() : "Unknown"}</td>
            <td>{sector}</td>
            <td><button onClick={() => handleRemove(index)}>Remove</button></td>
            <td><button onClick={() => handleMove(index)}>Move to top</button></td> 
        </tr>
    )
}

export default Animal;

