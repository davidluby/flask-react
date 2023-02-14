import React from 'react'
import ReactDom from 'react-dom/client'

function Nav() {
  return (
    <nav class="navbar navbar-expand-sm navbar-light fixed-top border border-3 border-primary bar pad-strip">

            <div class="container-fluid">
            
                

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"> </span>
                </button>
                
                <a class = "navbar-brand logo nav-link active" href="/"></a>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul class="navbar-nav me-auto mb-lg-0">

                        <li class="nav-item">
                            <a class="nav-link active nav-but" aria-current="page" href="/resume.html">
                                Resume
                            </a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link active nav-but nav-bar" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Software
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="/big.html">
                                        Big-O Notation
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/fifo.html">
                                        First In, First Out
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/fft.html">
                                        Fast Fourier Transform
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link active nav-but" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Firmware
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="/micro.html">
                                        Microcontroller Basics
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/timer.html">
                                        Timer Function
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link active nav-but" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Mechanical
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="/controls.html">
                                        Control Systems
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/fourier.html">
                                        Fourier Transform
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/fea.html">
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

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Nav />)

export default Nav