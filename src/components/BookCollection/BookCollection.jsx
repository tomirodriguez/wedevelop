import React from 'react'
import BookCard from '../BookCard/BookCard'
import styles from './styles.module.scss'

export default function BookCollection({books}){

  return <ul className={`d-grid grid-col-1 grid-md-col-2 grid-lg-col-3 grid-xl-col-4 ${styles.booksList}`}>{
    books.map((book, index) => <li key={index}><BookCard book={book} /></li>)}</ul>

}