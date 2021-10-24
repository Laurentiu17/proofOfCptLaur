import React from 'react';
import { useState, useEffect } from 'react';
import BookCard from './components/BookCard';
import axios from 'axios';

const App = () => {
  const [gridStyle, setGridStyle] = useState(true);
  const [lightTheme, setLightTheme] = useState(true);
  const [inputValue, setValue] = useState('');
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get('https://riabooksapi.azurewebsites.net/books');
    setData(result.data.books);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={`app ${!lightTheme ? 'darkmode' : ''}`}>
      <div className='container top_hero'>
        <div className='hero'>
          <h1>Ria Books</h1>
        </div>
        <div className='filter_bar'>
          <input type='text' placeholder='Search for a book...' onChange={e => setValue(e.target.value)} />
          <i className='fas fa-search' />
        </div>
        <div className='list_style'>
          <p>List Style: </p>
          <div className='icons_style'>
            <i className={`fas fa-th ${gridStyle ? 'active' : ''}`} onClick={() => setGridStyle(true)} />
            <i className={`fas fa-list ${!gridStyle ? 'active' : ''}`} onClick={() => setGridStyle(false)} />
          </div>
        </div>
        <div className='theme_switcher'>
          <p>Mode:</p>
          <div className='switchers'>
            <i className={`far fa-lightbulb ${lightTheme ? 'active' : ''}`} onClick={() => setLightTheme(true)} />
            <i className={`fas fa-moon  ${!lightTheme ? 'active' : ''}`} onClick={() => setLightTheme(false)} />
          </div>
        </div>
        <div className={gridStyle ? 'grid_books' : 'list_books'}>
          {data &&
            data
              .filter(
                e =>
                  e.title.concat(e.authors, e.categories).toLowerCase().includes(inputValue.toLowerCase()) &&
                  e.thumbnailURL !== null
              )
              .map((book, i) => <BookCard data={book} key={i} lightTheme={lightTheme} />)}
        </div>
      </div>
    </div>
  );
};

export default App;
