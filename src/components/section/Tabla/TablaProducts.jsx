import React from 'react'
import "./TablaOrders.css"

const TablaProducts = ({customs}) => {
  return (
    <>
    <table className="content-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>INGREDIENTS</th>
          <th>PRICE</th>
          <th>BARCODE</th>
        </tr>
      </thead>
      <tbody>
        {customs.map((P) => (
          <tr key={P._id} className="active-row">
            <td>{P._id}</td>   
            <td>{P.Name}</td>    
            <td>{P.Ingredients}</td>    
            <td>{P.Price}</td>    
            <td>{P.Barcode}</td>    
          </tr>
        ))}
      </tbody>
    </table>
  </>
  )
}

export default TablaProducts