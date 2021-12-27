import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();

  const [userdata, setuserdata] = useState({
    Name: "",
    Mobile: "",
    Email: "",
    Password: "",
    City: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuserdata({ ...userdata, [name]: value });
  };

  const postData = async (e) => {
    try {
      e.preventDefault();
      const { Name, Mobile, Email, Password, City } = userdata;
      const res = await fetch("/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name,
          Mobile,
          Email,
          Password,
          City,
        }),
      });

      const data = await res.json();

      if (res.status === 400 || !data) {
        alert("please enter data");
      } else if (res.status === 422) {
        alert("please enter correct phone no.");
      } else if (res.status === 201) {
        alert("add Item successfully");
        navigate("/allData");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mainContainer">
        <div className="contariner-fluid m-5 formContainer">
          <form method="POST" autoComplete="off">
            <div className="row mb-3">
              <label htmlFor="Name" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="Name"
                  placeholder="Enter Name"
                  value={userdata.Name}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="LastName" className="col-sm-2 col-form-label">
                Mobile
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="Mobile"
                  placeholder="Enter Moblie No."
                  value={userdata.Mobile}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="row mb-3 ">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label ">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="Email"
                  placeholder="Enter Email Id"
                  value={userdata.Email}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="passward"
                  name="Password"
                  placeholder="Enter Password"
                  value={userdata.Password}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                City
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="City"
                  placeholder="Enter City"
                  value={userdata.City}
                  onChange={handleInput}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-outline-dark submitBtn "
              onClick={postData}
            >
              Add Data
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
