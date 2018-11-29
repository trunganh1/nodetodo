/*var configValues = require("./config.json");
module.exports = {
  getDbconnectionString: function(){
    return `mongodb://${configValues.username}:${configValues.password}@ds151863.mlab.com:51863/nodetodo`;
  }
}*/
var configValues = require("./config.json");
module.exports = {
  getDbconnectionString: function(){
    return `mongodb://${configValues.username}:${configValues.password}@ds151863.mlab.com:51863/nodetodo`
  }
}
