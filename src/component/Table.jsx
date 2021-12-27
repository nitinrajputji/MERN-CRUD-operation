import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Table = () => {
  const [userData, setuserData] = useState([]);

  const [updatedItem, setUpdateItem] = useState({
    Name: "",
    Mobile: "",
    Email: "",
    Password: "",
    City: "",
  });

  const getData = async () => {
    try {
      const res = await fetch("/read", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setuserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteData = (id) => {
    axios.delete(`http://localhost:3000/delete/${id}`);
    getData();
    alert("item delete");
  };
  const onUpdate = (id) => {
    setUpdateItem((preInput) => {
      return { ...preInput, id: id };
    });
  };

  return (
    <>
      <div className="tableContainer ">
        <table className="table table-hover ">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((val) => {
              return (
                <>
                  <tr key={val._id}>
                    <td>{val.Name}</td>
                    <td>{val.Mobile}</td>
                    <td>{val.Email}</td>
                    <td>{val.Password}</td>
                    <td>{val.City}</td>

                    <td>
                      <Link
                        to={`/edit/${val._id}`}
                        className="btn btn-outline-dark"
                        onClick={() => {
                          onUpdate(val._id);
                        }}
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-dark"
                        onClick={() => deleteData(val._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
