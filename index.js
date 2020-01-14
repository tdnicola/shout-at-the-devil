'use strict';


const insultUrl="https://insult.mattbas.org/api/insult.json";


//////////////// Watch User Form //////////////////////

function watchUserForm() {
    $('form').submit(event => {
        event.preventDefault(); 

 
   let herokuUrl = 'https://cors-anywhere.herokuapp.com/' + insultUrl;

        fetch(herokuUrl)
        .then(response => {
          // console.log(response)
          return response.json()
        })
        
        .then((myJson => {
          console.log(myJson.insult)
          alert(myJson.insult);
        }))
        .catch(err => {
          $('#js-error-message').text(`Something went wrong: ${err.message}`);
            }
          ); 
        }) 
      };

    $(watchUserForm);








