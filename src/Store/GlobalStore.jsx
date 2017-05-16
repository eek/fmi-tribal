import Reflux from 'reflux';
import GlobalActions from './GlobalActions';

export default class GlobalStore extends Reflux.Store {
	constructor() {
		super();

		const globalStoreState = JSON.parse(localStorage.getItem('globalStore'));

		if (globalStoreState) {
			this.state = globalStoreState;
		} else {
			this.state = {
				username: 'N/A',
				village: {
					gold: 100,
					peasants: 5,
					soldier: 0,
					archers: 0,
					priests: 0
				}
			}
		}

		this.listenables = GlobalActions;
		window.GlobalActions = GlobalActions;
	}

	saveAndSetAction(state) {
		this.setState(state);
		localStorage.setItem('globalStore', JSON.stringify(this.state));
	}

	setUsernameAndStart(username, history) {
		this.saveAndSetAction({
			username
		});
		history.push('/village');
	}
}