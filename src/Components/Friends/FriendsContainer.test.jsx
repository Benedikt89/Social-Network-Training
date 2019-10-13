import React from "react";
import {create} from "react-test-renderer";
import FriendsContainer from "./FriendsContainer";
import {Provider} from "react-redux";
import store from "../../redux/redux-store";


describe("Profile Status component", () => {

    test("Status from props should be in state", () => {
        const component = create(
            <Provider store={store}>
                <FriendsContainer totalUsersCount={30} pageSize={15}/>
            </Provider>
        );
        const instance = component.getInstance();
        expect(instance.props.totalUsersCount).toBe(30);
    });

    test("Status from props should be in state", () => {
        const component = create(<FriendsContainer isFetching={true}/>);
        const instance = component.root;
        let preloader = instance.findByType('img');
        expect(preloader.length).toBe(1);
    });
});