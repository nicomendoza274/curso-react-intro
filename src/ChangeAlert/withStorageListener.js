import react from "react"

function withStorageListener(WreappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = react.useState(false)

        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1') {
                console.log('Hubo cambios en TODO_V1');
                setStorageChange(true)
            }
        })

        const toggleShow = () => {
            props.sincronize()
            setStorageChange(false)
        }

        return (
            <WreappedComponent 
                show={storageChange}
                toggleShow={toggleShow}
            />
        )
    }
}

export { withStorageListener }