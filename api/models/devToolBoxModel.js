'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ToolSchema = new Schema({
    category: {
        type: String,
        enum: ['project', 'design', 'development', 'security','martketing']
    },
    image: {
        type: String,
        Required: 'Please enter image url'
    },
    title: {
        type: String, 
        Required: 'Please enter name of tool'
    },
    description: {
        type: String,
        Required: 'Please enter a short summary of the tools functionality'
    },
    tags: {
        type: Array,
        Required: 'Please enter at least on tag for this product'
    },
    visit_url: {
        type: String, 
        Required: 'Please enter url to tool homepage'
    },
    heart_count: {
        type: Number,
    }
});

module.exports = mongoose.model('Tools', ToolSchema);