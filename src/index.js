const jokesUrl = 'https://api.chucknorris.io/jokes/random';

fetch( jokesUrl ).then( resp => {

    resp.json().then( ({ id, value }) => {

        console.log( id );
        console.log( value );

    });

});


