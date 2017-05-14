'use strict'

let mongoose = require('mongoose');
let Tool = mongoose.model('Tools');

exports.list_all_tools = (req, res) => {
	Tool.find({}, function(err, tool) {
			if(err)
					res.send(err);
			res.json(tool);
    });
};

exports.create_a_tool = (req, res) => {
	let new_tool = new Tool(req.body);
  new_tool.save(function(err, tool) {
		if(err)
				res.send(err);
		res.json(tool);
    });
};

exports.read_a_tool = (req, res) => {
	Tool.findById(req.params.toolId, function(err, tool) {
			if(err)
					res.send(err);
			res.json(tool);
    });
};

exports.update_a_tool = (req, res) => {
	Tool.findByIdAndUpdate(req.params.toolId, req.body, {new: true}, function(err, tool) {
		if(err)
			res.send(err);
		res.json(tool)
	});
};

exports.delete_a_tool = (req, res) => {
	Tool.remove({
		_id: req.params.toolId
	}, function(err, tool) {
		if(err)
			res.send(err)
		res.json({message: 'Task successfully deleted'});
	});
};