const { string } = require('joi');
const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
    // Your code goes here
    id:Number,
    topic:String,
    description:String,
    posted_at:Date,
    posted_by:String
})

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;