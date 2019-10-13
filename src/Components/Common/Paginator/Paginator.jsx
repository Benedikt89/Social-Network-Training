import React from 'react';
import style from "./Paginator.module.css";


const Paginator = ({currentPage, pagesCount, selectPage}) => {

    let classNameForPages = (i) => currentPage !== i ? style.pageNumber : style.pageNumberSelected;

    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
    }
    return (
        <div>{
        pages.map(p => <span
            key={p + 'FriendsPageID'}
                className={classNameForPages(p)}
                onClick={() => {
                    selectPage(p)
                }}
            >{p}</span>)}
        </div>
    )
};
export default Paginator;