import React from 'react';
import ReactPaginate from "react-paginate";

const Paginate = ({ pageCount, changePage }) => {
    return (<>
        <ReactPaginate
            previousLabel={<span>&laquo;</span>}
            nextLabel={<span>&raquo;</span>}
            breakLabel={'...'}
            breakClassName={'page-link'}
            pageLinkClassName="page-link"
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName='pagination justify-content-center pagination-lg'
            previousLinkClassName={'page-link'}
            nextLinkClassName={'page-link'}
            disableClassName={'page-item disable'}
            activeClassName={'page-item active'}
        />
    </>);
}

export default Paginate;