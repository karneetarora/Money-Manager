import '../components_css/CategoryBalance.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';
function CategoryBalance(props){
    return(
        <span className="card">
            <MaterialIcon icon='star' />
            <div className=''>
                <h4>{props.title}Title</h4>
                <h1>{props.balance}Balance</h1>
            </div>

        </span>
    );
}

export default CategoryBalance; 