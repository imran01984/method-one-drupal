import React from 'react';
import './header.css'; // Import your CSS file

import Example from './components/searchmodal';
const Header = () => {

  return (
    <>  <header class="header">
      <div className="header-part part1">
        <svg
          fill="rgb(70, 0, 115)"
          viewBox="0 0 37 40"
          height="40"
          opacity="1"
          width="36.45"
        >
          <path d="m0 40 36.449-14.778V14.778L0 0v10.444L23.569 20 0 29.556V40Z"></path>
        </svg>
      </div>
      <div className="header-part part3">
      <Example/>
      </div>
      <nav>
        <ul class="menu-items">


          <li>
            <a href="#" className="header-link fixed">Learn</a>
            <a href="#" className="header-link move">Use</a>
            <div class="mega-menu">
              <div class="content">
              
                <div className="col1">
                  <section>

                    <ul class="mega-links">
                      <li><a href="#">Overview  </a></li>
                      
                    </ul>
                  </section>
                </div>
                <div className="col2">
                  <section>

                    <ul class="mega-links">
                      <li><a href="#">Standard Approach</a></li>
                      <li><a href="#">Methods</a></li>
                      <li><a href="#">Deliverables</a></li>
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
