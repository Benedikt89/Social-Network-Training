import React from 'react';
import Feed from "./Feed";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        myFeed: state.feedReducer.myFeed
}
};
let mapDispatchToProps = () => {
    return{
    }
};
const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(Feed);


export default FeedContainer;
