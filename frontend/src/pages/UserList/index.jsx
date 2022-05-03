import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../routes/route-paths";
import { format } from "date-fns";

function UsersList() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tempUser = await getData();
      setUser(tempUser);
      console.log(JSON.stringify(tempUser));
    };
    fetchData();
  }, []);

  const getData = async () => {
    try {
      const finalURL = "http://localhost:3333/api/v1/user/";
      const res = await axios.get(finalURL);
      return res.data.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const removeUser = (_id) => {
    try {
      if (window.confirm("Are you sure?")) {
        fetch("http://localhost:3333/api/v1/user/" + _id, {
          method: "delete",
          headers: {
            Accept: "application/json",
            "content-Type": "application/json",
          },
        });
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Users</h3>
      <br></br>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Gender</th>
            <th>City</th>
            <th>Date of Birth</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr key="{item._id}">
              <td>{item.username}</td>
              <td>{item.gender}</td>
              <td>{item.city}</td>
              <td>{format(new Date(item.dob), "yyyy-MM-dd")}</td>
              <td>
                <Link
                  to={`${RoutePaths.edit}${item._id}`}
                  style={{
                    color: "green",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Edit |{" "}
                </Link>
                <Link
                  className="btn btn-outline-danger"
                  onClick={() => removeUser(item._id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
