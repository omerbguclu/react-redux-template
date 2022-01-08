import React from "react";
import { useSelector } from 'react-redux';

function Test() {
    // let { rotor_store } = useSelector((state) => state);
    // let rotors = {...rotor_store}.rotors
    let keyId = 0;
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Column 1</th>
                    <th scope="col">Column 2</th>
                    <th scope="col">Column 3</th>
                </tr>
            </thead>
            <tbody>
                {/* {Object.values(rotors).map(rotor => {
                    const { rotorName, rotorOrder, modelName } = rotor;
                    return <tr key={keyId++}>
                        <td>{rotorName}</td>
                        <td>{rotorOrder}</td>
                        <td>{modelName}</td>
                    </tr>
                })} */}
            </tbody>
        </table>
    )
}

export default Test;