import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
import { Table } from 'react-bootstrap'
const Sub = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/Student`)
            .then((res) => {
                console.log("line10", res.data)
                setData(res.data)
            })
    }, [])
    var storeMath = data.map((item) =>
        item.subMarks
    ).flat().reduce((accumulator, object) => {
        return accumulator + parseInt(object.math)
    }, 0);


    var storephy = data.map((item) =>
        item.subMarks
    ).flat().reduce((accumulator, object) => {
        return accumulator + parseInt(object.phy)
    }, 0);



    var storebio = data.map((item) =>
        item.subMarks
    ).flat().reduce((accumulator, object) => {
        return accumulator + parseInt(object.bio)
    }, 0);
    return (

        <div>
            <h1>Subject Name And there Total Marks</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Subject Name</th>
                        <th>Total Marks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Math</td>
                        <td>{storeMath}</td>
                    </tr>
                    <tr>
                        <td>phy</td>
                        <td>{storephy}</td>
                    </tr>
                    <tr>
                        <td>bio</td>
                        <td>{storebio}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default Sub