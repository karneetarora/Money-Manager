import MaterialIcon from "material-icons-react"
import '../pages_css/TopBar.css'
function TopBar(props) {
    let pageTitle = props.pageName;
    return(
        <div className="top-bar-cntr">
            <span className="top-bar-item-cntr">
                <h2>{pageTitle}</h2>
            </span>
            <span className="top-bar-item-cntr">
                <input type='text' placeholder='Search' id="top-search"></input>
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