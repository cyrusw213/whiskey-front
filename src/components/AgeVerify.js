import React from 'react'
import $ from 'jquery';

function AgeVerify() {

  
  $(document).ready(function(){
// put the popup at the start of the body

$('#ageWrapper').prependTo($('body'));
    // check if the age has been checked

    if(($.cookie('age')) !== 'true') {
      $('#ageWrapper').addClass('ageConfirmed');
    }

    // if yes is clicked and add a cookie and hide the popup
    $('#ageOkay').click(function() {
      $.cookie('age',true, { expires: 1,
        path: '/'});

        $('#ageWrapper').removeClass('ageUnknown');
      });

      // if no is clicked take it to another site 
      $('#ageBad').click(function(){
        window.location.href='https://www.toysrus.com/';
      })

      })
      return(
        <div id = "ageWrapper">
          <div id="agePopUp">
            <h3>Are you over 21 years old ?</h3>
            <a href="https://spirit-within.netlify.app/" id="ageOkay">Yes</a>
            <a href="https://www.toysrus.com/" id="ageBad">No</a>
          </div>
        </div>
      )
    }





export default AgeVerify