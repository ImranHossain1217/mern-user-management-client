import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);

  const handleUserDelete = (id) => {
    fetch(`https://user-mamagement-system-server.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remainingUsers = users.filter((user) => user._id !== id);
        setUsers(remainingUsers);
        if (data.acknowledged) {
          toast.error("User Deleted Successfully.");
        }
      });
  };

  useEffect(() => {
    fetch("https://user-mamagement-system-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="mt-5 w-2/3 mx-auto">
      <h2 className="uppercase text-2xl">Your All Users</h2>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Gander</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>{user.gander}</td>
                <td>
                  <Link to={`/userEdit/${user._id}`}>
                    <button className="btn btn-primary">
                      <FaEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleUserDelete(user._id)}
                    className="btn btn-error ml-2"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Toaster position="top-center" />
      </div>
    </div>
  );
};

export default User;
