import React from 'react';

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";


import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

import styles from '../Style/ScrollBtnComponent.module.sass';



function Scroll() {
  return (
window.addEventListener("scroll",function () {


  var currScrollPos =  window.pageYOffset;

 if ( currScrollPos >=500 ) {

  document.getElementById ("scrollBtn").style.opacity =1;
  document.getElementById ("scrollBtn").style.zIndex ="1";
}
else {
  document.getElementById ("scrollBtn").style.opacity = -1;
  document.getElementById ("scrollBtn").style.zIndex ="-1";
}
}),

(
    <div>             
<a href="#" className={styles.circle} id="scrollBtn" > 
<FontAwesomeIcon icon= {faAngleUp} />
        </a>

        
    </div>
)
  );
}

export default Scroll;