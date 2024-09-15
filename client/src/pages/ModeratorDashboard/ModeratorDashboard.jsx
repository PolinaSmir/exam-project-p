import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import TryAgain from '../../components/TryAgain/TryAgain';
import CONSTANTS from '../../constants';
import { clearUserStore } from '../../store/slices/userSlice';
import { getUser } from '../../store/slices/userSlice';

class ModeratorDashboard extends React.Component {
  componentDidMount() {
    console.log(this.props);
    if (!this.props.data) {
      this.props.getUser();
    }
  }
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
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return state;
// };

// const mapDispatchToProps = (dispatch) => ({
//   getContests: (data) =>
//     dispatch(getContests({ requestData: data, role: CONSTANTS.MODERATOR })),
// });

// export default connect(mapStateToProps)(ModeratorDashboard);

const mapStateToProps = (state) => state.userStore;
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
  clearUserStore: () => dispatch(clearUserStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModeratorDashboard);
