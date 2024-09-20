const db = require('../models');
const ServerError = require('../errors/ServerError');
const CONSTANTS = require('../constants');

module.exports.getOffers = async (req, res, next) => {
  try {
    // let resultsArr = await db.Offers.findAll({
    //   include: [
    //     {
    //       model: db.Contests,
    //       // required: true,
    //       // attributes: {
    //       //   exclude: ['userId'],
    //       // },
    //     },
    //     // {
    //     //   model: db.Users,
    //     // },
    //   ],
    // });
    let resultsArr = await db.Offers.findAll({
      include: [
        {
          model: db.Users,
        },
        {
          model: db.Contests,
        },
      ],
    });
    res.status(200).send(resultsArr);
  } catch (error) {
    next(new ServerError(error));
  }
};

// module.exports.approveOffer = async (req, res, next) => {};

// module.exports.rejectOffer = async (req, res, next) => {};
