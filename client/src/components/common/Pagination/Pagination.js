import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.scss';

class Pagination extends React.Component {
  state = {
    presentPage: this.props.initialPage || 1
  };
  render() {
    const { pages, onPageChange } = this.props;
    const { presentPage } = this.state;
    const { changePage } = this;

    return (
      <div className="pagination">
        <ul className="pagination__list">
          {[...Array(pages)].map((el, page) => (
            <li
              key={++page}
              onClick={() => {
                changePage(page);
              }}
              classname={`pagionation_list_item${page === presentPage ? ' pagination__list__item--active' : ''}`}
            >
              {page}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  initialPage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;