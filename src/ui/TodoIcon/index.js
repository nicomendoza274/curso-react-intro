import { ReactComponent as CheckSVG } from './check.svg'
import { ReactComponent as DeleteSVG } from './delete.svg'
import { ReactComponent as EditSvG } from './edit.svg'
import './TodoIcon.css'

const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color}/>,
    "edit": () => <EditSvG className="Icon-svg" fill="gray"/>
}

function TodoIcon({ type, color, click }) {
    return (
        <span className={`Icon-container Icon-container-${type}`} onClick={click}>
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon }