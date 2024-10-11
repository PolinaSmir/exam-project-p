const bd = require('../../models');
const ServerError = require('../../errors/ServerError');

module.exports.updateOfferModerator = async (data, predicate) => {
  const result = await bd.Offers.update(data, {
    where: predicate,
    returning: true,
  });
};
