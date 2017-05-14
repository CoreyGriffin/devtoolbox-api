'use strict'
module.exports = (app) => {
  let devTools = require('../controllers/devToolBoxController');

  //Routes
  app.route('/api/tools')
    .get(devTools.list_all_tools)
    .post(devTools.create_a_tool);

  app.route('/api/tools/:toolId')
    .get(devTools.read_a_tool)
    .put(devTools.update_a_tool)
    .delete(devTools.delete_a_tool);
};