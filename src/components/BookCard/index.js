import React from 'react';
import Modal from 'react-modal';
import BookDetails from '../BookDetails';
import { useState } from 'react';

const BookCard = ({ data, lightTheme }) => {
  const { thumbnailURL, authors, categories, title } = data;
  const [openModal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };
  return (
    <React.Fragment>
      <div className='book_card' onClick={() => setModal(true)}>
        <div className='img_card'>
          <p>{title}</p>
          <img src={thumbnailURL} alt='img_book' />
        </div>
        <div className='authors'>
          <p className='authors_header'> Authors: </p>
          <ul>
            {authors.map((author, i) => (
              <li key={i}>- {author}</li>
            ))}
          </ul>
        </div>
        <div className='genre'>
          <p className='genre_header'> Category: </p>
          <ul>
            {categories.map((category, i) => (
              <li key={i}>- {category}</li>
            ))}
          </ul>
        </div>
      </div>
      <Modal isOpen={openModal} onRequestClose={closeModal} className={`modal ${!lightTheme ? 'dark_modal' : ''}`}>
        <BookDetails closeModal={closeModal} book={data} />
      </Modal>
    </React.Fragment>
  );
};

export default BookCard;
