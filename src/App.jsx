import React from 'react'
import BookCollection from './components/BookCollection/BookCollection';
import useData from './hooks/useData'
import Loader from './components/Loader/Loader'
import NavBar from './components/NavBar/NavBar'

function App() {
  const { data: books, loading } = useData()
  return (
    <div className="App">
      <header >
          <NavBar />
      </header>
      <main className='container'>
        <h1>BOOK COLLECTION EXCERCISE</h1>
        <section className="d-flex">
        {loading ? <Loader />  : <BookCollection books={books} />}
        </section>
      </main>
    </div>
  );
}

export default App;
