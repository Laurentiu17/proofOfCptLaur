const BookDetails = ({ book, closeModal }) => {
  const { thumbnailURL, authors, categories, longDescription, pageCount, title } = book;
  return (
    <div className='book_modal'>
      <div className='close_modal' onClick={() => closeModal()}>
        <i className='fas fa-times' />
      </div>
      <div className='img_side'>
        <p>{title}</p>
        <img src={thumbnailURL} alt={thumbnailURL} />
      </div>
      <div className='content_side'>
        <div className='category'>
          <p>Category :</p>
          <ul>
            {categories.map((category, i) => (
              <li key={i}>- {category}</li>
            ))}
          </ul>
        </div>
        <div className='authors'>
          <p className='authors_header'> Authors: </p>
          <ul>
            {authors.map((author, i) => (
              <li key={i}>- {author}</li>
            ))}
          </ul>
        </div>
        <div className='description'>
          <p>Description: </p>
          <p>{longDescription}</p>
        </div>
        <div className='page_count'>
          <p>Pages: {pageCount}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
