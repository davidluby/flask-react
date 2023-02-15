import React from 'react'

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light fixed-top border border-3 border-primary bar pad-strip">

            <div className="container-fluid">
            
                

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                
                <a className = "navbar-brand logo nav-link active" href="/"></a>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav me-auto mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link active nav-but" aria-current="page" href="/resume.html">
                                Resume
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link active nav-but nav-bar" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Software
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="/big.html">
                                        Big-O Notation
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/fifo.html">
                                        First In, First Out
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/fft.html">
                                        Fast Fourier Transform
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link active nav-but" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Firmware
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="/micro.html">
                                        Microcontroller Basics
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/timer.html">
                                        Timer Function
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link active nav-but" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Mechanical
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="/controls.html">
                                        Control Systems
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/fourier.html">
                                        Fourier Transform
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/fea.html">
                                        Finite Element Analysis
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Nav