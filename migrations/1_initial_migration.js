const Migrations = artifacts.require("Bulb");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
