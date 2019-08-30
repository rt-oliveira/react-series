import React from 'react';

import Gol from './Gol';

export default class Time extends React.Component{
	render(){
		return (
			<div>
				<h1>{this.props.nome}</h1>
				<h2>{this.props.gols}</h2>
				<Gol marcarGol={this.props.marcarGol}/>
			</div>
		);
	}
}