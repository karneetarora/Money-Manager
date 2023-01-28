import MaterialIcon from "material-icons-react"
import '../pages_css/TopBar.css'
function TopBar() {
    return(
        <div className="top-bar-cntr">
            <span className="top-bar-item-cntr">
                <h2>Page Title</h2>
            </span>
            <span className="top-bar-item-cntr">
                <input type='text' placeholder='Search'></input>
                <MaterialIcon icon='search'/>
            </span>
            <span className="top-bar-item-cntr">
                <MaterialIcon icon='add' />
                <MaterialIcon icon='notifications' />
                <MaterialIcon icon='person' />
            </span>
        </div>
    )
}

export default TopBar