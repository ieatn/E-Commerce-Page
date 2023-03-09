import { Link } from "react-router-dom";

const Cancel = () => {
    return ( 
        <div>
            <h1>you did not purchase</h1>
            <Link to='/'>home</Link>
        </div>
     );
}
 
export default Cancel;