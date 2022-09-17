import React from "react";

const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Mobile</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.mobile_num}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
