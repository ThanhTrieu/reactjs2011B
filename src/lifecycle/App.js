import React from 'react';
import ChildrenApp from './children';

class AppLifeCycle extends React.Component {
  // 1 - mounting
  constructor(props) {
    super(props);
    // khai bao state o day
    this.state = {
      count: 0
    }
    // phuong thuc nay se chay dau tien va duy nhat mot lan trong phan mounting
    console.log('constructor cua AppLifeCycle da chay');
  }
  static getDerivedStateFromProps(props, state) {
    console.log(state, props);
    console.log('getDerivedStateFromProps cua phan mouting da chay');
    return null;
  }

  componentDidMount() {
    // chay duy nhat 1 lan o phan mounting
    console.log('componentDidMount da chay')
  }

  render() {
    console.log('render mounting da chay');
    return(
      <>
        <h1>This is app lifecycle</h1>
        <ChildrenApp/>
      </>
    )
  }
}
export default AppLifeCycle;