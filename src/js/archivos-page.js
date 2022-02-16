import { subirImagen } from './http-provider';

const body = document.body;
let inputFile, div;

const crearInputFileHtml = () => {

    const html = `
        <h1 class="mt-5">Subir archivos.</h1>
        <hr>

        <label>Selecciona una fotografía:</label>
        <input type="file" accept="image/png, image/jpeg, image/jpg" multiple />

        <br />
        <hr>
        <br />
        <br />
        `;

    div = document.createElement( 'div' );
    div.innerHTML = html;
    body.append( div );

    inputFile = document.querySelector( 'input' );

};

const eventos = () => {

    inputFile.addEventListener( 'change', ( event ) => {

        const files = event.target.files;
        subirImagen( files ).then( urls => {

            for (const url of urls) {


                const imgElement = document.createElement( 'img' );
                imgElement.style.width = '500px';
                imgElement.style.height = '250px';
                imgElement.src = url;
                div.append( imgElement );
                
            }
        });

    });

};


export const init = () => {
    crearInputFileHtml();
    eventos();
};


