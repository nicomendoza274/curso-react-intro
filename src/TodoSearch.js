import './TodoSearch.css';

function TodoSearch({
    searchValue, 
    setSearchValue
}) {

    return (
        <input 
            placeholder="Cortar Cebolla"
            className="TodoSearch"
            value={searchValue}
            onChange={(event) => {
                const value = event.target.value
                setSearchValue(value)
            }}
        />
    );
}

export { TodoSearch };