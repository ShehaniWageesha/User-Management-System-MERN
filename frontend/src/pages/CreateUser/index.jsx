/** @format */
import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateUser() {
  const [data, setData] = useState({
    username: "",
    gender: "",
    city: "",
    dob: new Date(),
    photo: null,
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setData({
      ...data,
      [name]: value,
    });
  }

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault();

      const res = await axios({
        method: "post",
        baseURL: "http://localhost:3333",
        url: "/api/v1/user/",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      alert("Data Saved Successfully!");
      window.location.assign("http://localhost:3000");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Create New Users</h3>
      <br></br>
      <form noValidate onSubmit={(e) => onSubmitForm(e)}>
        <div className="form-group">
          <label>Username :</label>
          <input
            type="text"
            name="username"
            required
            className="form-control"
            value={data.username}
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
              checked={data.gender === "Male"}
              onChange={handleChange}
            />
            <label> Male </label>
          </div>
          <div className="form-group" style={{ fontWeight: "normal" }}>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={data.gender === "Female"}
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
            value={data.city}
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
          <label>Date of Birth :</label>
          <div>
            <DatePicker
              name="dob"
              selected={data.dob}
              onChange={(newDate) =>
                setData({
                  ...data,
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
              value={data.photo}
              accept=".png, .jpg, .jpeg"
              onChange={handleChange}
            />
          </div>
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
