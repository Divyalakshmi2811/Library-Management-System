import React from 'react';
import {Link} from 'react-router-dom';

function Navi()
{
    return(
        <div>
           
            <nav className="navbar navbar-dark bg-dark">
            <ul className="justify-content-left">
               

               

                <Link to='/createuser' className="nav-item">Insert Employee
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 

                <Link to='/userpage' className="nav-item">Display Employee
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Link to='/deleteuser' className="nav-item">Delete Employee
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                {/* <Link to='/loginuser' className="nav-item">Login Employee
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}


                <Link to='/app' className="nav-item">Home
                </Link>
            </ul>
            </nav>
        </div>
    );
}
export default Navi;