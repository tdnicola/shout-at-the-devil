'use strict';


const insultUrl="https://insult.mattbas.org/api/insult";




//////////////// Watch User Form //////////////////////


function watchUserForm() {
    $('form').submit(event => {
        event.preventDefault(); 

 
// Tried to use Cors-anywhere code snippet but I don't think I am passing the correct information
// Source: https://github.com/Rob--W/cors-anywhere

    /*   
    jQuery.ajaxPrefilter(function(options) {
            if (options.crossDomain && jQuery.support.cors) {
                options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
            }
        });
    */

        fetch(insultUrl)
        .then(response => {
        
          if (response.ok) {
          return response.json();
          }
          throw new Error(response.statusText);
        })
        
        .then((myJson => {
          //renderResult(myJson);
          console.log(myJson);
        }))
        .catch(err => {
          $('#js-error-message').text(`Something went wrong: ${err.message}`);
            }
          ); 
        }) 


      };



    $(watchUserForm);








