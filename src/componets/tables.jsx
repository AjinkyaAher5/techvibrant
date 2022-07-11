import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
const Tables = (value) => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/Student`)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      
  }, [])

  var storeArray = Object.values(data.reduce((obj, { age }) => {
    if (obj[age] === undefined)
      obj[age] = { age: age, occurrences: 1 };
    else
      obj[age].occurrences++;
    return obj;
  }, {}));

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Age</th>
            <th>Count</th>
          </tr>
        </thead>
        {storeArray.map((item) => {
          return (
            <tbody key={item.occurrences}>
              <tr>
                <td>{item.age}</td>
                <td>{item.occurrences}</td>
              </tr>
            </tbody>
          )
        })}
      </Table>
    </div>
  )
}

export default Tables



