import React from 'react';
import Reflux from 'reflux';
import GlobalStore from './Store/GlobalStore';
import './village.css'

export default class Village extends Reflux.Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.store = GlobalStore;
	}

	render(){
		console.log('State in Village', this.state);
		const details = Object.keys(this.state.village).map((key) => {
			return (
				<div
				 key={key}
				 className={key}>
					<img
						src={`/assets/misc/${key}.png`}
						alt={`${key} icon`} />
					{key}: {this.state.village[key]}
				</div>
			)
		})

		return (
			<div>
				<h1>Welcome back {this.state.username}, This is your village!</h1>
				<div className="village" style={{width: '600px', height: '418px'}}>

				</div>
				<div className="details">
					{details}
				</div>
			</div>
		)
	}
}