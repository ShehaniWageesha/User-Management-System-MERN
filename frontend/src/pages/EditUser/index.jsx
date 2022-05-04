/** @format */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function EditUser() {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const tempUser = await getData(id);
      setUser(tempUser);
      console.log(JSON.stringify(tempUser));
    };

    fetchData();
  }, []);

  const getData = async (id) => {
    try {
      const finalURL = "http://localhost:3333/api/v1/user/" + id;
      const res = await axios.get(finalURL);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  }

  const onSubmitForm = async (e) => {
    console.log(JSON.stringify(user));
    try {
      e.preventDefault();

      const res = await axios({
        method: "patch",
        baseURL: "http://localhost:3333",
        url: "/api/v1/user/" + id,
        data: user,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      window.location.assign("http://localhost:3000");
      alert("Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);
  if (!user) {
    return <>Loading the data</>;
  }

  return (
    <div>
      <h3>Edit User</h3>
      <br></br>
      <form noValidate onSubmit={(e) => onSubmitForm(e)}>
        <div className="form-group">
          <label>Username :</label>
          <input
            type="text"
            name="username"
            defaultValue={user.username}
            required
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Gender :</label>
          <div className="form-group" style={{ fontWeight: "normal" }}>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={user.gender === "Male"}
              onChange={handleChange}
            />
            <label> Male </label>
          </div>
          <div className="form-group" style={{ fontWeight: "normal" }}>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={user.gender === "Female"}
              onChange={handleChange}
            />
            <label> Female </label>
          </div>
        </div>
        <div className="form-group">
          <label>City :</label>
          <select
            required
            name="city"
            className="form-control"
            value={user.city}
            onChange={handleChange}
          >
            <option value="Colombo">Colombo</option>
            <option value="Kandy">Kandy</option>
            <option value="Matara">Matara</option>
            <option value="Galle">Galle</option>
            <option value="Kurunegala">Kurunegala</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date :</label>
          <div>
            <DatePicker
              name="dob"
              value={format(new Date(user.dob), "yyyy-MM-dd")}
              onChange={(newDate) =>
                setUser({
                  ...user,
                  dob: newDate,
                })
              }
            />
          </div>
        </div>
        <div className="form-group">
          <label>Photo :</label>
          <div>
            <input
              type="file"
              name="photo"
              defaultValue={""}
              accept=".png, .jpg, .jpeg"
              onChange={handleChange}
            />
          </div>
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Edit User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default EditUser;
