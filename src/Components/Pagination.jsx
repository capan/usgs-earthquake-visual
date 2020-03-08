import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to, step = 1) => {
    let i = from;
    const returnRange = [];

    while (i <= to) {
        returnRange.push(i);
        i += step;
    }

    return returnRange;
};

class Pagination extends Component {
    constructor(props) {
        super(props);
        const { totalRecords, pageLimit, pageNeighbours } = props;
        this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 10;
        this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 1;

        this.pageNeighbours = typeof pageNeighbours === 'number'
            ? Math.max(0, Math.min(pageNeighbours, 2))
            : 0;

        this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);
        this.state = { currentPage: 1 };
        this.gotoPage = this.gotoPage.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleMoveLeft = this.handleMoveLeft.bind(this);
        this.handleMoveRight = this.handleMoveRight.bind(this);
        this.fetchPageNumbers = this.fetchPageNumbers.bind(this);
    }

    componentDidMount() {
        this.gotoPage(1);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { totalRecords, pageLimit, pageNeighbours } = nextProps;
        this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 10;
        this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 1;

        this.pageNeighbours = typeof pageNeighbours === 'number'
            ? Math.max(0, Math.min(pageNeighbours, 2))
            : 0;

        this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);
        this.setState({ currentPage: 1 });
    }

    gotoPage(page) {
        const { onPageChanged = (f) => f } = this.props;

        const currentPage = Math.max(0, Math.min(page, this.totalPages));

        const paginationData = {
            currentPage,
            totalPages: this.totalPages,
            pageLimit: this.pageLimit,
            totalRecords: this.totalRecords,
        };
        debugger
        this.setState({ currentPage }, () => onPageChanged(paginationData));
    }

    handleClick(page, evt) {
        evt.preventDefault();
        this.gotoPage(page);
    }

    handleMoveLeft(evt) {
        evt.preventDefault();
        const { currentPage } = this.state;
        this.gotoPage(currentPage - this.pageNeighbours * 2 - 1);
    }

    handleMoveRight(evt) {
        evt.preventDefault();
        const { currentPage } = this.state;
        this.gotoPage(currentPage + this.pageNeighbours * 2 + 1);
    }

    fetchPageNumbers() {
        const { totalPages, pageNeighbours } = this;
        const { currentPage } = this.state;

        const totalNumbers = this.pageNeighbours * 2 + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {
            let pages = [];

            const leftBound = currentPage - pageNeighbours;
            const rightBound = currentPage + pageNeighbours;
            const beforeLastPage = totalPages - 1;

            const startPage = leftBound > 2 ? leftBound : 2;
            const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

            pages = range(startPage, endPage);

            const pagesCount = pages.length;
            const singleSpillOffset = totalNumbers - pagesCount - 1;

            const leftSpill = startPage > 2;
            const rightSpill = endPage < beforeLastPage;

            const leftSpillPage = LEFT_PAGE;
            const rightSpillPage = RIGHT_PAGE;

            if (leftSpill && !rightSpill) {
                const extraPages = range(startPage - singleSpillOffset, startPage - 1);
                pages = [leftSpillPage, ...extraPages, ...pages];
            } else if (!leftSpill && rightSpill) {
                const extraPages = range(endPage + 1, endPage + singleSpillOffset);
                pages = [...pages, ...extraPages, rightSpillPage];
            } else if (leftSpill && rightSpill) {
                pages = [leftSpillPage, ...pages, rightSpillPage];
            }

            return [1, ...pages, totalPages];
        }

        return range(1, totalPages);
    }

    render() {
        if (!this.totalRecords) return null;

        if (this.totalPages === 1) return null;

        const { currentPage } = this.state;
        const pages = this.fetchPageNumbers();

        return (
            <>
                <nav aria-label="Countries Pagination">
                    <ul className="pagination">
                        {pages.map((page, index) => {
                            if (page === LEFT_PAGE) {
                                return (
                                    <li key={Math.ceil(index * Math.random() * 1000)} className="page-item">
                                        <Button
                                            className="page-link"
                                            href="#"
                                            aria-label="Previous"
                                            onClick={this.handleMoveLeft}
                                        >
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                        </Button>
                                    </li>
                                );
                            }

                            if (page === RIGHT_PAGE) {
                                return (
                                    <li key={Math.ceil(index * Math.random() * 1000)} className="page-item">
                                        <Button
                                            className="page-link"
                                            href="#"
                                            aria-label="Next"
                                            onClick={this.handleMoveRight}
                                        >
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </Button>
                                    </li>
                                );
                            }

                            return (
                                <li
                                    key={Math.ceil(index * Math.random() * 1000)}
                                    className={`page-item${
                                        currentPage === page ? ' active' : ''
                                        }`}
                                >
                                    <Button
                                        className="page-link"
                                        href="#"
                                        onClick={(e) => this.handleClick(page, e)}
                                    >
                                        {page}
                                    </Button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </>
        );
    }
}

Pagination.defaultProps = {
    pageLimit: 10,
    pageNeighbours: 1,
    onPageChanged: () => { },
};

Pagination.propTypes = {
    totalRecords: PropTypes.number.isRequired,
    pageLimit: PropTypes.number,
    pageNeighbours: PropTypes.number,
    onPageChanged: PropTypes.func,
};

export default Pagination;