import React, { useState, useEffect } from 'react'

const DatabaseQuery = () => {
  const [data, setData] = useState([])
  function fetchData() {
    fetch(`http://localhost:5000/api/v1/vehicles`).then(data => {
      return data.json();
    }).then(data => {
      console.log('2nd then', data)
      setData(data)
    })
    console.log('fetchData called')
  }

  console.log('data', data)
  return (
    <div>
      <button onClick={fetchData}>Query Database</button>
      {data.length ?
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Make</th>
              <th>Model</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {data.map((vehicle, i) => {
              return (<tr key={i}>
                <td>{vehicle.year}</td>
                <td>{vehicle.make}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.color}</td>
              </tr>
              )

            })}
          </tbody>
        </table>
        : ""
      }
    </div >
  )
}

export default DatabaseQuery
