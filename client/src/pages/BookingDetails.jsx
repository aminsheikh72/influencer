import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getBookingComments,
  getMyBooking,
  postComment,
} from "../services/influencerService";
import Loading from "../components/loaders/Loading";
import { toast } from "react-toastify";

const BookingDetails = () => {
  const { user } = useSelector((state) => state.auth);
  const [text, setText] = useState("");
  const token = user.token;
  const { id } = useParams();
  

  const queryClient = useQueryClient();

  const {
    data: booking = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bookingDetails", id],
    queryFn: () => getMyBooking(token, id),
  });

  const {
    data: comments = [],
    isLoading: commentIsLoading,
  } = useQuery({
    queryKey: ["comment", id],
    queryFn: () => getBookingComments(token, id),
  });

  const mutation = useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      toast.success("Comment added successfully", {
        position: "top-center",
      });
      queryClient.invalidateQueries(["comment", id]);
      setText("");
    },
   
 onError: (error) => {
   toast.error(error,{
    position : "top-center"
   })
  }})


  const handleComment = (text) => {
      const formData = {
    user: user._id,
    influencer: id,
    text: text,
    token: user.token,
  };
  mutation.mutate(formData);
  };

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong");
    }
  }, [isError]);

  if (isLoading || commentIsLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen w-full bg-black text-white font-sans">
      {/* RGB Banner */}
      <div className="relative h-64 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-rgb mb-20">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto bg-gradient-to-tr from-[#1c1c1c] via-[#111] to-[#1c1c1c] rounded-xl shadow-lg p-6 border border-gray-800 card-glow -mt-48 relative z-10">
        {/* Influencer Section */}
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#FF003C] shadow-md mb-4">
            <img
              src={booking.influencer.profilePic}
              alt={booking.influencer.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold">{booking.influencer.name}</h1>
          <p className="text-accent-muted">
            @{booking.influencer.instagram_handle}
          </p>
          <span className="mt-2 px-3 py-1 bg-[#FF003C]/20 text-[#FF003C] text-sm rounded-full">
            {booking.influencer.niche}
          </span>
        </div>

        {/* Booking Info */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm sm:text-base">
          <div>
            <p className="text-gray-400">Gender</p>
            <p>{booking.influencer.gender}</p>
          </div>
          <div>
            <p className="text-gray-400">Location</p>
            <p>{booking.influencer.location}</p>
          </div>
          <div>
            <p className="text-gray-400">Followers</p>
            <p>{Number(booking.influencer.followers).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-400">Rate</p>
            <p>₹{booking.influencer.rate}</p>
          </div>
          <div>
            <p className="text-gray-400">Booking Status</p>
            <p
              className={`font-semibold ${
                booking.status === "accepted"
                  ? "text-green-400"
                  : booking.status === "pending"
                  ? "text-yellow-400"
                  : "text-red-400"
              }`}
            >
              {booking.status}
            </p>
          </div>
          <div>
            <p className="text-gray-400">Joined</p>
            <p>
              {new Date(booking.influencer.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-gray-400">Last Updated</p>
            <p>{new Date(booking.updatedAt).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-400">Booking ID</p>
            <p>{booking._id}</p>
          </div>
        </div>

        {/* Comment Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
            Comments
          </h2>

          {/* Comment Input */}
          <div className="flex items-start gap-4 mb-6">
            <img
              src="https://api.dicebear.com/7.x/initials/svg?seed=You"
              alt="User avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <textarea
                rows="3"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full bg-[#111] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF003C]"
                placeholder="Write a comment..."
              ></textarea>
              <div className="mt-2 flex justify-end">
                <button
                  onClick={()=>handleComment(text)}
                  className="bg-[#FF003C] hover:bg-[#e60035] text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  Post Comment
                </button>
              </div>
            </div>
          </div>

          {/* Comment List */}
          <div className="space-y-6">
            {comments?.map((comment) => (
              <div
                key={comment._id}
                className="flex items-start gap-4 bg-[#1c1c1c] p-4 rounded-lg border border-gray-800"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-white">
                      {comment?.user.isAdmin ? "Admin" : "You"}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {new Date(comment.createdAt).toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-gray-300 mt-1">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RGB Animation Style */}
      <style>{`
        .card-glow {
          box-shadow: 0 0 15px rgba(255, 0, 60, 0.5);
        }

        @keyframes rgb {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-rgb {
          background-size: 300% 300%;
          animation: rgb 6s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default BookingDetails;
