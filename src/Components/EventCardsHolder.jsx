/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Pagination from './Pagination';

import './EventCardsHolder.scss';


const EventCardsHolder = (props) => {
    let { currentPage, pageLimit } = props;
    if (!currentPage || !pageLimit) {
        currentPage = 1; pageLimit = 8;
    }

    function pageChangeHandler(paginationData) {
        props.pageChangeHandler(paginationData);
    }
    return (
        <div className="card-holder">
            {props.children.map((el, index) => {
                if ((index >= ((currentPage - 1) * pageLimit))
                    && (index <= pageLimit * currentPage)) {
                    return el;
                }
                return '';
            })}
            <div>
                <Pagination
                    totalRecords={props.totalRecords}
                    pageLimit={8}
                    pageNeighbours={1}
                    onPageChanged={pageChangeHandler}
                />
            </div>
        </div>
    );
};

export default EventCardsHolder;
