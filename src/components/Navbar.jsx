import React from 'react';
import logoUrl from '/images/notesLogo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
  return(
    <>
        <div className='myNav'>
            <div className='container'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='brandLogo d-flex align-items-center'>
                        <img src={logoUrl} alt='brandLogo' className='img-fluid'/>
                        <h3 className='logoText mt-2'>Notify</h3>
                    </div>
                    <div className='sideBar pt-3'>
                        <ul className='navUl'>
                            <li>
                                <NavLink to='/' activeclassname='active' >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/details' activeclassname='active'>Details</NavLink>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>        
    </>
  );
}
export default Navbar;