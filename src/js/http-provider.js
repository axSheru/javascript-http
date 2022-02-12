const jokesUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';


const obtenerChiste = async () => {

    try {

        const resp = await fetch( jokesUrl );
    
        if ( ! resp.ok ) throw 'No se pudo realizar la petición.';
    
        const { icon_url, id, value } = await resp.json();

        return { icon_url, id, value };
        
    } catch ( err ) {

        throw err;
        
    }

};

const obtenerUsuarios = async () => {

    try {

        const resp = await fetch( urlUsuarios );
    
        if ( ! resp.ok ) throw 'No se pudo realizar la petición.';
    
        const { data:usuarios } = await resp.json();

        return usuarios;
        
    } catch ( err ) {

        throw err;
        
    }

};


export {
    obtenerChiste,
    obtenerUsuarios,
};
