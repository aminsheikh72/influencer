import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllBookings } from "../features/booking/bookingSlice";
import { getAllCreators } from "../features/creator/creatorSlice";
import { getUser } from "../features/user/userSlice";
import { getReviews } from "../features/review/reviewSlice";

const Dashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const { users } = useSelector((state) => state.user);
  const { allCreators } = useSelector((state) => state.creator);
  const { bookings } = useSelector((state) => state.booking);
  const { reviews } = useSelector((state) => state.review);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBookings());
    dispatch(getAllCreators());
    dispatch(getUser());
    dispatch(getReviews());
  }, []);

  return (
    <div
      className="font-sans my-10 min-h-screen overflow-x-hidden"
      style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
    >
      <div className="flex flex-col md:flex-row">
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
        <div className="flex flex-col flex-1">
          <main className="flex-1 relative overflow-y-auto  md:pt-0 md:ml-64 ml-0 px-4">
            <div className="py-6">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              </div>

              <div className="max-w-7xl mx-auto">
                {/* Stats Cards */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {/* Card Reusable */}
                  {[
                    {
                      title: "Total Users",
                      count: users.length,

                      iconPath:
                        "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
                    },
                    {
                      title: "Total Creators",
                      count: allCreators.length,

                      iconPath:
                        "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                    },
                    {
                      title: "All Bookings",
                      count: bookings.length,
                      iconPath:
                        "M9 12h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h3l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2z",
                    },
                    {
                      title: "All Reviews",
                      count: reviews.length,
                      iconPath:
                        "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.92c.969 0 1.371 1.24.588 1.81l-3.983 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.983-2.89a1 1 0 00-1.176 0l-3.983 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.983-2.89c-.783-.57-.38-1.81.588-1.81h4.92a1 1 0 00.95-.69l1.518-4.674z",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="card-gradient border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(255,0,60,0.7)] transition-all duration-300"
                    >
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-[#FF003C] rounded-md p-3">
                            <svg
                              className="h-6 w-6 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={item.iconPath}
                              />
                            </svg>
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-400 truncate">
                                {item.title}
                              </dt>
                              <dd>
                                <div className="text-lg font-bold text-white">
                                  {item.count}
                                </div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-800 px-4 py-3">
                        <div className="text-sm">
                          <a
                            href={item.link}
                            className="font-medium text-[#FF003C] hover:text-[#FF003C]"
                          >
                            {item.linkText}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <style jsx>{`
        .card-gradient {
          background: linear-gradient(
            145deg,
            rgba(40, 40, 40, 0.6),
            rgba(20, 20, 20, 0.8)
          );
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
