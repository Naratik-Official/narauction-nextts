import React from 'react';

import HTMLFlipBook from 'react-pageflip';

import styles from 'styles/Book.module.css';

export default function Book() {
  return (
    <HTMLFlipBook
      width={300}
      height={500}
      maxShadowOpacity={0.5}
      className={styles.book}
    >
      <div className={styles.page}>Page 1</div>
      <div className={styles.page}>Page 2</div>
      <div className={styles.page}>Page 3</div>
      <div className={styles.page}>Page 4</div>
    </HTMLFlipBook>
  );
}
