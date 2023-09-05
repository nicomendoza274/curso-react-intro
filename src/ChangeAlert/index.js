import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css"

function ChangeAlert({show, toggleShow}) {
    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del Navegador</p>
                    <p>¿Quiere sincronizar tus TODOS?</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={() => toggleShow(false)} 
                    >Yes!</button>
                </div>
            </div>
        )
    } else {
        return null
    }
}

const ChangeAlerWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlerWithStorageListener };