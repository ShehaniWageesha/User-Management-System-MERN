import React from "react";

const User = (props) => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.gender}</td>
    <td>{props.user.city}</td>
    <td>{props.user.dob.substring(0, 10)}</td>
  </tr>
);

export default User;
