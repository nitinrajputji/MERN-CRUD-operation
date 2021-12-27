import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const ID = String(id);
  const navigate = useNavigate();

  const [updatedItem, setUpdatedItem] = useState({
    Name: "",
    Mobile: "",
    Email: "",
    Password: "",
    City: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/read`).then((response) => {
      const data = response.data;
      data
        .filter((val) => {
          return val._id === ID;
        })
        .map((val) => {
          setUpdatedItem(val);
        });
    });
  }, [ID]);

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setUpdatedItem((preInput) => {
      return {
        ...preInput,
        [name]: value,
      };
    });
  };

  const updateItem = (id) => {
    axios
      .put(`http://localhost:3000/update/${ID}`, updatedItem)
      .then((res) => {});
    alert("item updated");
    navigate("/allData");
  };

  return (
    <>
      <div className="mainContainer">
        <div className="contariner-fluid m-5 formContainer">
          <form method="POST">
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
                  value={updatedItem.Name}
                  onChange={handleUpdate}
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
                  value={updatedItem.Mobile}
                  onChange={handleUpdate}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="Email"
                  placeholder="Enter Email Id"
                  value={updatedItem.Email}
                  onChange={handleUpdate}
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
                  value={updatedItem.Password}
                  onChange={handleUpdate}
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
                  value={updatedItem.City}
                  onChange={handleUpdate}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-success submitBtn "
              onClick={updateItem}
            >
              Update Data
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
