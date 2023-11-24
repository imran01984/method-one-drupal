import React from 'react';
import './header.css';
import StaticExample from './searchmodal';
import Accenturelogo from './logo.png';


const Header = () => {

  return (
    <>  <header class="header" style={{  borderBottom: '2px solid #ccc'}}>
      <div className="header-part part1">
      <img src={Accenturelogo} alt="Example" style={{width:'100px', marginLeft:'-30px'}}/>
      </div>
      <div className="header-part part3">
      <StaticExample/>
      </div>
      <nav>
        <ul class="menu-items">


          <li>
            <a href="/" className="header-link fixed">Learn</a>
            <a href="/" className="header-link move">Use</a>
            <div class="mega-menu">
              <div class="content">
              
                <div className="col1">
                  <section>

                    <ul class="mega-links">
                      <li><a href="/">Overview  </a></li>
                      
                    </ul>
                  </section>
                </div>
                <div className="col2">
                  <section>

                    <ul class="mega-links">
                      <li><a href="/">Standard Approach</a></li>
                      <li><a href="/">Methods</a></li>
                      <li><a href="/">Deliverables</a></li>
                    </ul>
                  </section>
                </div>

              </div>
            </div>
          </li>


        </ul>
      </nav>
    </header>
      
    </>
  );
};

export default Header;
