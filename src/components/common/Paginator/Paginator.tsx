import React, { useState } from 'react';
import { PaginatorType } from "./PaginatorType";
import styles from "./paginator.module.css";


const Paginator: React.FC<PaginatorType> = ({ totalItemsCount, itemsPerPage, currentPage, onPageChanged, portionSize = 15 }) => {

  let pagesCount = Math.ceil(totalItemsCount / itemsPerPage);

  const pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const [portionNumber, setPortionNumber] = useState(1);

  let portionCount = Math.ceil(totalItemsCount / portionSize);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return <div className={styles.pagination}>
    {portionNumber > 1 &&
      <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}

    {pages
      .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
      .map(page => {
        return <span key={page} className={`${styles.page} ${currentPage === page && styles.selectedPage}`}
          onClick={(e) => { onPageChanged(page) }}>{page}</span>
      })}

    {portionCount > portionNumber &&
      <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
  </div>
}

export default Paginator;