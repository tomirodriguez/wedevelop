import React from 'react'
import styles from './styles.module.scss'

export default function BookCard({book}){

  console.log(book);

  return  <div className={`card h-100 ${styles.book}`}>
    <h2>{book.title}</h2>
    <div className={`d-flex jc-center ${styles.imageContainer}`}>
    <img src={book.image} alt={book.title} width={100} height={150} />
    </div>
    <div className={styles.price}>{book.price}</div>
  </div>

}