/* import { init } from './js/usuarios-page';
import { init } from './js/chistes-page'; */
import * as CRUD from './js/crud-provider';

CRUD.getUsuario(2).then( console.log );
