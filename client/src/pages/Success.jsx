import { Link } from "react-router-dom";

const Success = () => {
    return ( 
        <div className="container text-center mx-auto">
            <h1>thank you for your purchase</h1>
            <Link to='/' className="bg-orange-400 text-white font-bold rounded-xl">home</Link>
        </div>
     );
}
 
export default Success;