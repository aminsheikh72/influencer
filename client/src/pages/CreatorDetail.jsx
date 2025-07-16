import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import { addBooking, fetchInfluencerDetails } from '../services/influencerService'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const CreatorDetail = () => {
  const { id } = useParams()
  const {user}= useSelector(state=>state.auth)
  const navigate = useNavigate()

  const { data: creator = {}, isLoading } = useQuery({
    queryKey: ['influencers details', id],
    queryFn: () => fetchInfluencerDetails(id),
  })
  const mutation = useMutation({
  mutationFn: addBooking,
  onSuccess: () => {
    toast.success("Booking added successfully")
    navigate("/my-bookings")
  },
  onError: (err) => {
    toast.success("Influencer not Book")
  },
});


const handleBooking = () => {
  const formData = {
   user : user._id,
   influencer : id,
   token : user.token
  };

  mutation.mutate(formData)
};

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/30 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Cover Image */}
    
<div className="relative h-60 sm:h-80 md:h-96 w-full overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-rgb">
  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
</div>


      {/* Creator Profile */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="card-glow pb-8">
          {/* Avatar */}
          <div className="flex justify-center -mt-20 mb-6">
            <div className="w-36 h-36 rounded-full border-4 border-background-card overflow-hidden shadow-lg">
              <img
                src={creator?.profilePic}
                alt={creator?.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Creator Info */}
          <div className="text-center px-6">
            <h1 className="text-3xl font-bold text-white">{creator?.name}</h1>

            <p className="text-accent-muted">@{creator?.instagram_handle}</p>

            <div className="inline-block px-3 py-1 bg-primary/20 rounded-full text-sm font-medium mt-2 text-primary">
              {creator?.niche}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 max-w-md mx-auto text-left">
              <p className="text-white"><strong>Followers : </strong> {Number(creator?.followers).toLocaleString()}</p>
              <p className="text-white"><strong>Gender : </strong> {creator?.gender}</p>
              <p className="text-white"><strong>Location : </strong> {creator?.location}</p>
              <p className="text-white"><strong>Rate : </strong> ₹{creator?.rate}</p>
              <p className="text-white"><strong>Joined : </strong> {new Date(creator?.createdAt).toLocaleDateString()}</p>
            </div>

            <div className="mt-8 space-y-4 max-w-sm mx-auto">
             {
              user ? (
                <button
  className={`btn-outline w-full ${creator?.isActive === false ? "cursor-not-allowed opacity-50" : ""}`}
  onClick={handleBooking}
  disabled={mutation.isPending || creator?.isActive === false}
>
  {mutation.isPending
    ? "Booking..."
    : creator?.isActive === false
    ? "Not Available"
    : "Book"}
</button>
              ) : ( <Link to={'/login'}
  className={`btn-outline w-full ${creator?.isActive === false ? "cursor-not-allowed opacity-50" : ""}`}
>
  {mutation.isPending
    ? "Booking..."
    : creator?.isActive === false
    ? "Not Available"
    : "Book"}
</Link>)
             }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatorDetail
