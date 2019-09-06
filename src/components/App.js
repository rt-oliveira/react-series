import React from 'react';

import PlacarContainer from './PlacarContainer';

const dados={
	partida:{
		estadio: "Maracanã/RJ",
		data: "30/08/2019",
		hora: "19h"
	},
	casa:{
		nome:"Vasco"
	},
	visitante:{
		nome:"Flamengo"
	}
};

export default class App extends React.Component{
	render(){
		return (
			<PlacarContainer 
			{...dados}
			tempo={92}
			/>
		);
	}
}