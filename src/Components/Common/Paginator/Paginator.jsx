import React, { useState } from 'react';
import style from "./Paginator.module.css";


let Paginator = ({currentPage, totalUsersCount, pageSize, selectPage}) => {

    let pagesCount = Math.ceil(totalUsersCount/pageSize);
    let classNameForPages = (i) => currentPage !== i ? style.pageNumber : style.pageNumberSelected;

    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
    }
    const maxDisplayPages = 15;
    let portionsCount = Math.ceil(pages.length/maxDisplayPages);
    let [selectedPortion, setSelectedPortion] = useState(1);

    return (
        <div>
            <button
                disabled={selectedPortion === 1}
                onClick={()=>{setSelectedPortion(selectedPortion-1)}}
            >prev</button>{
        pages.filter(p => p <= selectedPortion * maxDisplayPages && p >= (selectedPortion -1) * maxDisplayPages )
            .map(p => <span
            key={p + 'FriendsPageID'}
                className={classNameForPages(p)}
                onClick={() => {
                    selectPage(p)
                }}
            >{p}</span>)}
            <button
                disabled={selectedPortion === portionsCount}
                onClick={()=>{setSelectedPortion(selectedPortion+1)}}
            >next</button>
        </div>
    )
};
export default Paginator;