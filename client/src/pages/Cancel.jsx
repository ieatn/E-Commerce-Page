import { Link } from "react-router-dom";

const Cancel = () => {
    return ( 
        <div className="text-center">
            <h1>you did not purchase</h1>
            <Link to='/' className="bg-orange-400 font-bold text-white rounded-xl px-3 py-1">home</Link>
        </div>
     );
}
 
export default Cancel;