const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db_config");
const errorHandler = require("./middleware/erroHandler");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// DB Connection
connectDB();


const allowedOrigins = [
  "http://localhost:5173",
  "https://move-it-aminsheikh72s-projects.vercel.app",
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn("Blocked by CORS: ", origin);
      callback(null, false); //  Don't throw error
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));


// Body-Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    msg: "WELCOME TO INFLUENCER ADDA API 1.0",
  });
});

// Auth Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Admin Routes
app.use("/api/admin", require("./routes/adminRoutes"));

// Booking Routes
app.use("/api/booking", require("./routes/bookingRoutes"));

// Influencer Routes, 
app.use("/api/influencers", require("./routes/influencerRoutes"));

// Error Handler
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`SERVER IS RUNNING AT PORT ${PORT}`.bgBlue.black)
);
