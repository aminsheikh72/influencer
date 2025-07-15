import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useSelector } from 'react-redux';
import { getMyBookings } from '../services/influencerService';
import Loading from './../components/loaders/Loading';
import { Link } from 'react-router-dom';

const MyBookings = () => {

    const{user}= useSelector(state=> state.auth)
    const token = user.token
    const {data : bookings = [],isLoading}=useQuery({
        queryKey : ["bookings",token],
        queryFn : ()=> getMyBookings(token)
    })
    



  const getStatusColor = (status) => {
    switch (status) {
      case 'accepted':
        return 'text-green-500';
      case 'pending':
        return 'text-yellow-500';
      case 'rejected':
        return 'text-red-500';
      default:
        return 'text-gray-400';
    }
  };
  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#FF003C]">My Bookings</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-800 rounded-lg overflow-hidden">
          <thead className="bg-gray-900 text-left text-sm uppercase text-gray-400">
            <tr>
              <th className="px-4 py-3">Booking ID</th>
              <th className="px-4 py-3">Influencer</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Price</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {bookings?.map((booking) => (
              <tr key={booking?._id} className="hover:bg-gray-900">
                <td className="px-4 py-3 text-sm">{booking?._id}</td>
                <td className="px-4 py-3 text-sm">{booking?.influencer?.name}</td>
               
                <td className={`px-4 py-3 text-sm font-medium ${getStatusColor(booking?.status)}`}>
                  {booking.status}
                </td>
                <td className="px-4 py-3 text-sm">₹{booking?.influencer?.rate}</td>
                <td className="px-4 py-3 text-sm"><Link to={`/my-bookings/${booking._id}`} className=' text-blue-600'>View</Link></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        table {
          background: linear-gradient(145deg, rgba(40, 40, 40, 0.6), rgba(20, 20, 20, 0.8));
        }

        ::-webkit-scrollbar {
          height: 8px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: rgba(255, 0, 60, 0.6);
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default MyBookings;
