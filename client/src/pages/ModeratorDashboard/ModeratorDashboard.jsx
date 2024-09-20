import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import CONSTANTS from '../../constants';
import { getUser } from '../../store/slices/userSlice';
import { getOffers } from '../../store/slices/offersSlice';
import OfferBox from '../../components/OfferBox/OfferBox';

class ModeratorDashboard extends React.Component {
  componentDidMount() {
    console.log(this.props);
    if (!this.props.data) {
      this.props.getOffers();
    }
  }

  needModeratorButtons = (offerModeratorStatus) => {
    // const contestCreatorId = this.props.contestByIdStore.contestData.User.id;
    // const userId = this.props.userStore.data.id;
    // return (
    //   contestCreatorId === userId &&
    //   offerModeratorStatus === CONSTANTS.OFFER_MODERATOR_STATUS_PENDING
    // );
    console.log(offerModeratorStatus);
  };

  setOfferList = () => {
    const array = [];
    console.log(this.props);
    const { offers } = this.props.offersStore;
    console.log(offers);
    for (let i = 0; i < offers.length; i++) {
      console.log(offers[i]);
      array.push(
        <OfferBox
          data={offers[i]}
          key={offers[i].id}
          needModeratorButtons={this.needModeratorButtons}
          contestType={offers[i].Contest.contestType}
          date={new Date()}
        />
      );
      console.log(array);
    }
    return array.length !== 0 ? (
      array
    ) : (
      <div>There is no suggestion at this moment</div>
    );
  };
  render() {
    return (
      <div className="offersContainer">
        <div className="offerBox">
          <div className="infoCreator">
            <span>Name Surname</span>
            <span>email</span>
          </div>
          <div className="response">
            <span>Offer</span>
          </div>
        </div>
        <div className="buttonBox">
          <button>Approve</button>
          <button>Reject</button>
        </div>
        <div>{this.setOfferList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { userStore, offersStore } = state;
  return { userStore, offersStore };
};
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
  getOffers: () => dispatch(getOffers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModeratorDashboard);
