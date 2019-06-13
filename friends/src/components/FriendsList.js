import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { getData } from "../actions/actions";
import styled from "styled-components";

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    if (this.props.fetchingFriends) {
      return <Loader type="Puff" color="#59dab8" height="100" width="100" />;
    } else {
      return this.props.friends.map(friend => (
        <FriendCardStyle>
          <div className="friend-card">
            <h4>{friend.name}</h4>
            <h4>{friend.age}</h4>
            <h4>{friend.email}</h4>
          </div>
        </FriendCardStyle>
      ));
    }
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friends: state.friends
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(FriendsList)
);

const FriendCardStyle = styled.div`
  width: 500px;
  border: 1px solid black;
  margin: 20px auto;
`;
