const db = require('../models');
const ServerError = require('../errors/ServerError');
const CONSTANTS = require('../constants');

module.exports.getOffers = async (req, res, next) => {
  try {
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

module.exports.setOfferModerator = async (req, res, next) => {
  if (req.body.command === 'reject') {
    try {
      // const { body } = req;
      const [updatedCount, [updatedOffer]] = await db.Offers.update(req.body, {
        where: { id: req.body.offerId },
        returning: true,
      });
      if (updatedCount !== 1) {
        throw new ServerError('cannot update offer!');
      } else {
        return res.status(200).send(updatedOffer);
      }

      // return res.status(200).send(req.body);
      // const offer = await rejectModeratorOffer(req.body.offerId);
      // res.status(200).send(offer);
    } catch (error) {
      next(error);
    }
  }
};

// module.exports.approveOffer = async (req, res, next) => {};

// module.exports.rejectOffer = async (req, res, next) => {};
