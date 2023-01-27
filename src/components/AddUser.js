import React from "react";
import toast, { Toaster } from "react-hot-toast";

const AddUser = () => {
  const handleAddUser = (e) => {
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
    fetch("https://user-mamagement-system-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        if (data.acknowledged) {
          toast.success("User Added Successfully.");
        }
      });
  };
  return (
    <div className="container">
      <h3 className="text-xl mt-3 uppercase">Please Add Your User</h3>
      <form
        onSubmit={handleAddUser}
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
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Country:</span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            name="country"
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
          >
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>
        <button className="btn btn-primary mt-2 w-full">Add User</button>
      </form>
      <Toaster position="top-center" />
    </div>
  );
};

export default AddUser;
