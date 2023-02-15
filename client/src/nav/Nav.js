import React from 'react'
import css from "./Nav.module.css"

function Nav() {
  return (
    <nav className={`${"navbar navbar-expand-sm navbar-dark fixed-top"} ${css.bar} ${css.padstrip}`}>

            <div className="container-fluid">
            
                

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                
                <a className = {`${"navbar-brand nav-link active"} ${css.logo}`} href="/"></a>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav me-auto mb-lg-0">

                        <li className="nav-item">
                            <a className={`${"nav-link active"} ${css.navbut}`} aria-current="page" href="/resume.html">
                                Page
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className={`${"nav-link active"} ${css.navbut}`} aria-current="page" href="/resume.html">
                                Page
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`${"nav-link active"} ${css.navbut}`} aria-current="page" href="/resume.html">
                                Page
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Nav