import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({show, toggleShow}) {
    if (show) {
        return (
            <div>
                <p>Hubo cambios</p>
                <button 
                    onClick={() => toggleShow(false)} 
                >Recargar la info</button>
            </div>
        )
    } else {
        return null
    }
}

const ChangeAlerWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlerWithStorageListener };