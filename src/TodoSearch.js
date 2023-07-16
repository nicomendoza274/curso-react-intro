import './TodoSearch.css';

function TodoSearch() {
    return (
        <input 
            placeholder="Cortar Cebolla"
            className="TodoSearch"
            onChange={(event) => {
                console.log('Escribiste en el TodoSearch')
                console.log(event.target.value)
            }}
        />
    );
}

export { TodoSearch };