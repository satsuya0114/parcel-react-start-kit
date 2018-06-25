import React from 'react';
import './Home.less';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div style={{ textAlign: 'center' }} >
        <h2 className="orange">Hello, This is parcel demo for React</h2>
        <p>:D :O</p>
      </div>
    );
  }
}
