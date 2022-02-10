import React, { useState } from 'react'
import styles from '../styles/Home.module.css'

const DatabaseQuery = () => {
  const [data, setData] = useState([])
  function fetchData() {
    fetch(`http://localhost:5000/api/v1/vehicles`).then(data => {
      return data.json();
    }).then(data => {
      setData(data)
    })
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
                <td className={styles.table_style}>{vehicle.year}</td>
                <td className={styles.table_style}>{vehicle.make}</td>
                <td className={styles.table_style}>{vehicle.model}</td>
                <td className={styles.table_style}>{vehicle.color}</td>
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
