import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBookings,
  updateBooking,
} from "../features/booking/bookingSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Booking = () => {
  const { bookings } = useSelector((state) => state.booking);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const openUpdateModal = (booking) => {
    setSelectedBooking(booking);
    setShowUpdateModal(true);
  };
  const closeUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedBooking(null);
  };

  const handleBooking = async (formData) => {
    try {
      await dispatch(updateBooking(formData)).unwrap();
      toast.success("Booking update successfully", {
        position: "top-center",
      });
      dispatch(getAllBookings());
    } catch (error) {
      toast.error("booking not updated", {
        position: "top-center",
      });
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "text-green-500";
      case "Pending":
        return "text-yellow-500";
      case "Cancelled":
        return "text-red-500";
      case "Accepted":
        return "text-green-500";
      case "Rejected":
        return "text-red-500";
      case "Completed":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div
      className="font-sans"
      style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
    >
      <div className="flex min-h-screen flex-col md:flex-row my-10 overflow-hidden">
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
        {/* Main content */}
        <div className="flex-1 overflow-y-auto pt-16 md:pt-0 md:ml-64">
          <div className="py-6 px-4 sm:px-6 md:px-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h1 className="text-3xl font-bold text-white mb-4 sm:mb-0">
                Bookings
              </h1>
            </div>

            {/* Booking Stats */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Card Example */}
              <div className="card-gradient border border-gray-800 rounded-lg p-4 text-center shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300">
                <div className="text-white font-bold text-lg">
                  Total Bookings
                </div>
                <div className="text-3xl font-extrabold mt-2">
                  {bookings?.length}
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="mt-8 card-gradient border border-gray-800 rounded-lg shadow-lg w-full overflow-x-auto custom-scrollbar">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-x-auto">
                  <table className="min-w-[900px] w-full divide-y divide-gray-800 text-sm sm:text-base">
                    <thead className="bg-gray-900">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase whitespace-nowrap">
                          Booking ID
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase whitespace-nowrap">
                          User
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase whitespace-nowrap">
                          Date & Time
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase whitespace-nowrap">
                          Status
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase whitespace-nowrap">
                          Price
                        </th>

                        {bookings.some(
                          (booking) =>
                            booking.status === "pending" ||
                            booking.status === "accepted"
                        ) && (
                          <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase whitespace-nowrap">
                            Actions
                          </th>
                        )}
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-800">
                      {bookings.map((booking) => (
                        <tr
                          key={booking?._id}
                          className="hover:bg-gray-900 transition-colors duration-200"
                        >
                          <td className="px-4 py-3 whitespace-nowrap truncate max-w-[100px] text-white">
                            {booking?._id}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="flex items-center space-x-3">
                              <div className="min-w-0">
                                <div className="text-sm font-medium text-white truncate">
                                  {booking.user.name}
                                </div>
                                <div className="text-sm text-gray-400 truncate">
                                  {booking.user.email}
                                </div>
                              </div>
                            </div>
                          </td>

                          {/* Event column removed */}

                          <td className="px-4 py-3">
                            <div className="text-sm text-white truncate">
                              {booking.user.createdAt}
                            </div>
                            <div className="text-sm text-gray-400 truncate">
                              {booking.time}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                                booking.status
                              )}`}
                            >
                              {booking.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-white truncate">
                            {booking.influencer?.rate}
                          </td>
                          <td className="px-4 py-3 text-right whitespace-nowrap space-x-2">
                            {/* PENDING: Accept + Reject */}
                            {booking.status === "pending" && (
                              <>
                                <button
                                  onClick={() =>
                                    handleBooking({
                                      id: booking._id,
                                      status: "accepted",
                                    })
                                  }
                                  className="text-green-500 hover:text-green-300 text-xl"
                                  title="Accept Booking"
                                >
                                  ✔️
                                </button>
                                <button
                                  onClick={() =>
                                    handleBooking({
                                      id: booking._id,
                                      status: "rejected",
                                    })
                                  }
                                  className="text-red-500 hover:text-red-300 text-xl"
                                  title="Reject Booking"
                                >
                                  ✖️
                                </button>
                              </>
                            )}

                            {/* ACCEPTED: Mark as Completed */}
                            {booking.status === "accepted" && (
                              <button
                                onClick={() =>
                                  handleBooking({
                                    id: booking._id,
                                    status: "completed",
                                  })
                                }
                                className="text-blue-500 hover:text-blue-300 text-xl"
                                title="Mark as Completed"
                              >
                                ✅
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .card-gradient {
          background: linear-gradient(
            145deg,
            rgba(40, 40, 40, 0.6),
            rgba(20, 20, 20, 0.8)
          );
        }
        @media screen and (max-width: 640px) {
          table th,
          table td {
            white-space: nowrap;
          }
        }
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 0, 60, 0.6);
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default Booking;
