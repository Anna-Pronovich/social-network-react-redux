import React from 'react';
import styles from "./paginator.module.css";

const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div className={styles.pagination}>
      {pages.map(page => {
        return <span className={`${styles.page} ${currentPage === page && styles.selectedPage}`}
          onClick={(e) => { onPageChanged(page) }}>{page}</span>
      })}
    </div>
}

export default Paginator;