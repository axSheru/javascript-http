const jokesUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';
const urlCloudinary = 'https://api.cloudinary.com/v1_1/axsheru/upload';

const cloudPreset = 'k45rngiw';


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

// Archivo es de tipo file.
const subirImagen = async ( archivo ) => {

    const formData = new FormData();
    formData.append( 'upload_preset', cloudPreset );
    formData.append( 'file', archivo );

    try {

        const resp = await fetch( urlCloudinary, {
            method: 'POST',
            body: formData,
        });
    
        if ( ! resp.ok ) throw await resp.json();
    
        const cloudinaryResp = await resp.json();

        return cloudinaryResp.secure_url;
        
    } catch ( err ) {

        throw err;
        
    }

};


export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen,
};
