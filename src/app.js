import React from 'react';
/*
Importa os conteúdos do módulo 'react'
e coloca eles dentro da variável 'React'.
*/
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
	<App/>,
	document.getElementById("app")
);
/*
Este comando fará com que seja renderizado 
o componente App no browser.
*/
