import React from "react";
import FriendsNav from "./FriendsNav";
import StoreContext from "../../../StoreContext";

const FriendsNavContainer = (props) => {

    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState().sidebarReducer.friends;

                return <FriendsNav friends={state} />
            }
            }
        </StoreContext.Consumer>

    );
};

export default FriendsNavContainer;