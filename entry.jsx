import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import HomeDetail from './HomeDetail';
import Translate from './Translate';

class HomeView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Translate Template={<HomeDetail/>}/>
    );
  }

}

ReactDOM.render(<HomeView />, document.getElementById('content'));