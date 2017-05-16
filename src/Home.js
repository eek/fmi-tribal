import React from 'react';
import Reflux from 'reflux';
import GlobalStore from './Store/GlobalStore';
import GlobalActions from './Store/GlobalActions';

class Home extends Reflux.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.store = GlobalStore;
  }

  setNicknameAndStart = () => {
    GlobalActions.setUsernameAndStart(this.nickname.value, this.props.history);
  }

  render() {
    
    return (
      <div className="home">
        <h1>Please enter your nickname!</h1>
        {
          this.state.username === 'N/A'
        ? 
          <div>
            <input ref={
              (el) => {
                this.nickname = el;
              }
            } type="text" placeholder="Your nickname" />
            <button onClick={this.setNicknameAndStart}>
              Randomly set me on the map
            </button>
          </div>
         : 
          <div>
            Welcome back {this.state.username}
          </div>   
        }
      </div>
    );
  }
}

export default Home;
