const express = require("express");
const {
  getInfluencers,
  getInfluencer,
  searchInfluencer,
} = require("../controllers/influencerController");

const router = express.Router();

//  /api/influencer

router.get("/", getInfluencers);
router.get("/single/:id", getInfluencer);
router.get("/search", searchInfluencer);

module.exports = router;



