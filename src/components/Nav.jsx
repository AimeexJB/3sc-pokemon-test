 import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='custom-nav'>
            <div className='container'>
                <h3 className="n">Pokemon App</h3>
                <div className="navbar row">
                    <Link to="/" className="col-sm">Home</Link>
                    <Link to="/search" className="col-sm">Search Pokemon</Link>
                    <Link to="/filter" className="col-sm">Filter Pokemon</Link>
                    <Link to="/compare" className="col-sm">Compare Pokemon</Link>
                </div>
            </div>
        </div>
        
    )
}
 
export default Navbar