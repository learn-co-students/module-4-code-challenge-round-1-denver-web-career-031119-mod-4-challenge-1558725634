import React from 'react'

const TransactionsList = () => {

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th onClick = {() => console.log("REPLACE WITH A FUNCTION TO SORT BY DESCRIPTION")}>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th onClick = {() => console.log("REPLACE WITH A FUNCTION TO SORT BY CATEGORY")}>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {"... your code here..."}

      </tbody>
    </table>
  )
}

export default TransactionsList
