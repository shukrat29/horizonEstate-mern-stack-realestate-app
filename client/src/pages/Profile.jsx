import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border p-2 rounded-lg"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          className="border p-2 rounded-lg"
        />
        <button className="bg-slate-700 text-slate-50 p-2 rounded-lg">
          Update
        </button>
      </form>
      <div className="flex justify-between p-2 ">
        <span className="text-red-600 cursor-pointer">Delete account</span>
        <span className="text-red-600 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
};

export default Profile;
