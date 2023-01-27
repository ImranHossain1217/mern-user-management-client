import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const storedUser = useLoaderData();

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const country = form.country.value;
    const gander = form.gander.value;
    const user = {
      name,
      email,
      country,
      gander,
    };
    fetch(`https://user-mamagement-system-server.vercel.app/users/${storedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("User Update Successfully.");
        };
      });
  };
  return (
    <div className="container">
      <h3 className="text-xl uppercase mt-5">
        Now Update Your User: {storedUser.name}
      </h3>
      <form
        onSubmit={handleUpdateUser}
        className="md:w-1/4 mx-auto mt-5 border p-3 rounded-md"
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter Your Name:</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            name="name"
            defaultValue={storedUser.name}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter Your Email:</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            name="email"
            defaultValue={storedUser.email}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Country:</span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            name="country"
            defaultValue={storedUser.country}
          >
            <option>Bangladesh</option>
            <option>India</option>
            <option>England</option>
            <option>USA</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Gander:</span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            name="gander"
            defaultValue={storedUser.gander}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>
        <button className="btn btn-primary mt-2 w-full">Update User</button>
      </form>
      <Toaster position="top-center" />
    </div>
  );
};

export default UpdateUser;
