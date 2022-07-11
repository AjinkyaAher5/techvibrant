import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios'
import { Table } from 'react-bootstrap'


const TotalMarks = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/Student`)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
    }, [])

    return (
        <div>
            <h1>Student Name And there Total Marks</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Total Marks</th>
                    </tr>
                </thead>
                {data.map((e) =>
                    <tbody>
                        <tr>
                            <td>
                                {e.name}
                            </td>
                            <td>
                                {e.subMarks
                                    .flat().map((item) =>
                                           <>
                                            {parseInt(item.bio) + parseInt(item.math) + parseInt(item.phy)}
                                        </>
                                        , 0)}
                            </td>
                        </tr>
                    </tbody>
                )}
            </Table>
        </div>
    )
}
export default TotalMarks