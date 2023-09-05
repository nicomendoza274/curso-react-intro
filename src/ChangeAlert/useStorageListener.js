import react from "react"

function useStorageListener(sincronize) {
    const [storageChange, setStorageChange] = react.useState(false)

    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            console.log('Hubo cambios en TODO_V1');
            setStorageChange(true)
        }
    })

    const toggleShow = () => {
        sincronize()
        setStorageChange(false)
    }

    return {
        show: storageChange,
        toggleShow: toggleShow
    }
    
}

export { useStorageListener }