import React from 'react';
import {create} from "react-test-renderer";
import Paginator from "./Paginator";

describe("Paginator component Tests", ()=>{
    test("pages count should be 15", ()=>{
        const component = create(<Paginator totalUsersCount={30} pageSize={1} />);
        const root = component.root;
        let spans = root.findAllByType("span");
        expect(spans.length).toBe(15);
    });

});