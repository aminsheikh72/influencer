import React, { useEffect, useState } from 'react';
import { Send } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, addComment } from '../features/review/reviewSlice';
import { toast } from 'react-toastify';

const Reviews = () => {
  const { reviews } = useSelector(state => state.review);
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [replyText, setReplyText] = useState({});
  const [replyOpenForBooking, setReplyOpenForBooking] = useState(null);

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  // Group reviews by booking ID
  const groupedComments = reviews.reduce((acc, comment) => {
    const bookingId = comment?.booking?._id;
    if (!bookingId) return acc;
    if (!acc[bookingId]) acc[bookingId] = [];
    acc[bookingId].push(comment);
    return acc;
  }, {});

  const handleReplySubmit = async (bookingId) => {
try {
      const text = replyText[bookingId];
    if (!text?.trim()) return;

    await dispatch(
      addComment({
        booking: bookingId,
        text,
        user: user._id,
        isAdmin: user.isAdmin,
      })
    ).unwrap();
    toast.success("Reply successfull",{
      position : "top-center"
    })
    setReplyText(prev => ({ ...prev, [bookingId]: '' }));
    setReplyOpenForBooking(null);
    dispatch(getReviews());
} catch (error) {
  toast.error("Reply not added",{
    position : "top-center"
  })
}
  };

  return (
   <div className="p-6 pt-14 sm:p-6 md:p-10 w-full md:ml-64"> 
  <div className="mb-6">
    <h2 className="text-xl sm:text-2xl font-bold text-white">All Reviews</h2>
    <p className="text-gray-300 text-sm sm:text-base">Manage all customer replies</p>
  </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(groupedComments).map(([bookingId, commentList]) => (
          <div
            key={bookingId}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <h3 className="text-white font-bold mb-3 text-base sm:text-lg">
              Booking ID: <span className="text-yellow-400 break-all">{bookingId}</span>
            </h3>

            <div className="space-y-2 mb-4 max-h-48 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
              {commentList.map((c, index) => (
                <div key={index} className="text-sm text-gray-300 bg-white/5 p-2 rounded-md">
                  <span
                    className={`inline-block px-2 py-1 font-medium rounded-sm mr-2 text-xs ${
                      c?.isAdmin ? 'bg-yellow-400 text-black' : 'bg-gray-600 text-white'
                    }`}
                  >
                    {c?.isAdmin ? 'Admin' : c?.user?.name}
                  </span>
                  {c.text}
                </div>
              ))}
            </div>

            {replyOpenForBooking === bookingId ? (
              <div className="flex gap-2">
                <input
                  className="bg-transparent border border-white/20 text-white rounded-md px-3 py-1 w-full text-sm"
                  type="text"
                  placeholder="Reply to this booking..."
                  value={replyText[bookingId] || ''}
                  onChange={(e) =>
                    setReplyText(prev => ({ ...prev, [bookingId]: e.target.value }))
                  }
                />
                <button
                  onClick={() => handleReplySubmit(bookingId)}
                  className="text-yellow-400 hover:text-yellow-300 flex items-center"
                >
                  <Send size={18} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setReplyOpenForBooking(bookingId)}
                className="mt-2 text-green-400 text-sm hover:underline"
              >
                Reply
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
