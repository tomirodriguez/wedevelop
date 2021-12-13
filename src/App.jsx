import React from 'react'
import BookCollection from './components/BookCollection/BookCollection';
import useData from './hooks/useData'
import Loader from './components/Loader/Loader'


function App() {
  const { data: books, loading } = useData()
  return (
    <div className="App">
      <header className="App-header">
        
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
