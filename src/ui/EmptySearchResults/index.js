import './EmptySearchResults.css';

function EmptySearchResults({searchText}) {
  return (
    <p className='EmptySearchResults'>¡No encontre resultados para: {searchText} </p>
  )
}

export { EmptySearchResults }