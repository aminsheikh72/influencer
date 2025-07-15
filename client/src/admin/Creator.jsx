import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCreators,
  getAllCreators,
  removeCreator,
  updateCreator,
} from "../features/creator/creatorSlice";
import { toast } from "react-toastify";
import Loading from "../components/loaders/Loading";
import { Link } from "react-router-dom";

const Creator = () => {
  const { allCreators, isSuccess, isError, message, isLoading } = useSelector(
    (state) => state.creator
  );
  const dispatch = useDispatch();
  const [showAddCreator, setShowAddCreator] = useState(false);
  const [showUpdateCreator, setShowUpdateCreator] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCreator, setSelectedCreator] = useState(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const [newCreator, setNewCreator] = useState({
    name: "",
    niche: "",
    followers: "",
    instagram_handle: "",
    rate: "",
    location: "",
    profilePic: "",
    gender: "",
  });

  const formatNumber = (num) => {
    if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `$${(num / 1000).toFixed(0)}K`;
    return `$${num}`;
  };

  const formatFollowers = (num) => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const handleInputChange = (e) => {
    setNewCreator({
      ...newCreator,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addCreators(newCreator)).unwrap();
      toast.success("Influencer added successfully", {
        position: "top-center",
      });
      setShowAddCreator(false);
      dispatch(getAllCreators());
    } catch (error) {
      toast.error(message || "Something went wrong", {
        position: "top-center",
      });
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        updateCreator({ ...newCreator, _id: selectedCreator._id })
      ).unwrap();
      toast.success("Creator updated successfully", { position: "top-center" });
      setShowUpdateCreator(false);
      setSelectedCreator(null);
      setNewCreator({
        name: "",
        niche: "",
        followers: "",
        instagram_handle: "",
        rate: "",
        location: "",
        profilePic: "",
        gender: "",
      });
      dispatch(getAllCreators());
    } catch (error) {
      toast.error("Update failed", { position: "top-center" });
    }
  };
const handleRemove = async (id) => {
  try {
    await dispatch(removeCreator(id)).unwrap();  
    toast.success("Creator removed successfully", { position: "top-center" });
    dispatch(getAllCreators());
  } catch (error) {
    toast.error("Failed to remove creator", { position: "top-center" });
  }
};


  useEffect(() => {
    dispatch(getAllCreators());
  }, [dispatch]);

  if (isLoading) return <Loading />;
 

  return (
    <div className="flex-1 relative overflow-y-auto pt-16 md:pt-0 ml-0 md:ml-64 mt-5 bg-black text-white">
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800">
        <div className="flex items-center justify-between h-16 px-4">
          <Link to={"/"} className="text-xl font-bold text-[#FF003C]">
            HOME
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } px-2 pt-2 pb-3 space-y-1 bg-gray-900`}
        >
          <Link
            to="/admin"
            className="block px-3 py-2 rounded-md text-gray-300 bg-gray-800 hover:text-white"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/user"
            className="block px-3 py-2 rounded-md text-gray-300 bg-gray-800 hover:text-white"
          >
            Users
          </Link>
          <Link
            to="/admin/creator"
            className="block px-3 py-2 rounded-md text-white bg-gray-800"
          >
            Creators
          </Link>
          <Link
            to="/admin/review"
            className="block px-3 py-2 rounded-md text-gray-300 bg-gray-800 hover:text-white"
          >
            Reviews
          </Link>
          <Link
            to="/admin/booking"
            className="block px-3 py-2 rounded-md text-gray-300 bg-gray-800 hover:text-white"
          >
            Bookings
          </Link>
          
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-0">
            Creators
          </h1>
          <button
            onClick={() => setShowAddCreator(true)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Add Creator
          </button>
        </div>

        {/* Creator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCreators.map((creator) => (
            <div
              key={creator._id}
              className="bg-gray-950 rounded-lg overflow-hidden border border-gray-700 w-full max-w-sm mx-auto"
            >
              {/* Banner Image (optional) */}
              <div className="h-32 bg-gradient-to-r from-purple-900 via-blue-800 to-teal-700 relative">
                {/* Profile Image */}
                <div className="absolute -bottom-10 left-4">
                  <div className="rounded-full border-4 border-red-500 overflow-hidden h-20 w-20">
                    <img
                      src={creator.profilePic}
                      alt={creator.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Name and Niche */}
                <div className="absolute bottom-2 left-28">
                  <h2 className="text-xl font-bold text-white">
                    {creator.name}
                  </h2>
                  <p className="text-sm text-gray-300">{creator.niche}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="pt-12 px-4 pb-4">
                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div>
                    <p className="text-lg font-bold">{creator.followers}</p>
                    <p className="text-gray-400 text-sm">Followers</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold">{creator.gender}</p>
                    <p className="text-gray-400 text-sm">Gender</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold">₹{creator.rate}</p>
                    <p className="text-gray-400 text-sm">Rate</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center mb-4">
                  <div>
                    <p className="text-lg font-bold">
                      {creator.instagram_handle}
                    </p>
                    <p className="text-gray-400 text-sm">Instagram</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold">{creator.location}</p>
                    <p className="text-gray-400 text-sm">Location</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => {
                      setSelectedCreator(creator);
                      setNewCreator({
                        name: creator.name || "",
                        niche: creator.niche || "",
                        followers: creator.followers || "",
                        instagram_handle: creator.instagram_handle || "",
                        rate: creator.rate || "",
                        location: creator.location || "",
                        profilePic: creator.profilePic || "",
                        gender: creator.gender || "",
                      });
                      setShowUpdateCreator(true);
                    }}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md"
                  >
                    EDIT
                  </button>
                  <button onClick={()=>handleRemove(creator._id)} className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md">
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showAddCreator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4 py-6">
          <div className="bg-gray-800 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto p-4 sm:p-6">
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-gray-800 z-10">
              <h2 className="text-xl font-bold">Add New Creator</h2>
              <button
                onClick={() => setShowAddCreator(false)}
                className="text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                "name",
                "niche",
                "followers",
                "instagram_handle",
                "rate",
                "location",
                "profilePic",
              ].map((field) => (
                <div key={field}>
                  <label className="block text-gray-300 mb-1 capitalize">
                    {field.replace("_", " ")}
                  </label>
                  <input
                    type={
                      field === "followers" || field === "rate"
                        ? "number"
                        : "text"
                    }
                    name={field}
                    value={newCreator[field]}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                    required={field !== "profilePic"}
                  />
                </div>
              ))}

              <div>
                <label className="block text-gray-300 mb-1">Gender</label>
                <select
                  name="gender"
                  value={newCreator.gender}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddCreator(false)}
                  className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
                >
                  Add Creator
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showUpdateCreator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4 py-6">
          <div className="bg-gray-800 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto p-4 sm:p-6">
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-gray-800 z-10">
              <h2 className="text-xl font-bold">Update Creator</h2>
              <button
                onClick={() => setShowUpdateCreator(false)}
                className="text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleUpdate} className="space-y-4">
              {[
                "name",
                "niche",
                "followers",
                "instagram_handle",
                "rate",
                "location",
                "profilePic",
              ].map((field) => (
                <div key={field}>
                  <label className="block text-gray-300 mb-1 capitalize">
                    {field.replace("_", " ")}
                  </label>
                  <input
                    type={
                      field === "followers" || field === "rate"
                        ? "number"
                        : "text"
                    }
                    name={field}
                    value={newCreator[field]}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                    required={field !== "profilePic"}
                  />
                </div>
              ))}

              <div>
                <label className="block text-gray-300 mb-1">Gender</label>
                <select
                  name="gender"
                  value={newCreator.gender}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddCreator(false)}
                  className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
                >
                  Update Creator
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Creator;
