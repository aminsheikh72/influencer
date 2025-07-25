const asyncHandler = require("express-async-handler");
const Comment = require("../models/commentModel");

const getComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find({ booking: req.params.bid }).populate('user')
  if (!comments) {
    res.status(404);
    throw new Error("No Comments Found");
  }

  res.status(200).json(comments);
});

const addComment = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please Enter Your Comment");
  }

  const comment = await Comment.create({
    user: req.user._id,
    booking: req.params.bid,
    text: req.body.text,
  })
  if (!comment) {
    res.status(400);
    throw new Error("Comments No Created");
  } 

  const newComment = await Comment.findById(comment._id).populate("user").populate('booking')


  res.status(201).json(newComment);
});

module.exports = { getComments, addComment };
