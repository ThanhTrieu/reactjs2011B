import React from 'react';

class ChildrenLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      c: 0
    }
    console.log('constructor ChildrenLifeCycle mouting da chay ');
  }

  static getDerivedStateFromProps(props, state) {
    console.log(state, props);
    console.log('getDerivedStateFromProps cua ChildrenLifeCycle cua phan mouting da chay');
    return null;
  }
  componentDidMount() {
    console.log('componentDidMount cua ChildrenLifeCycle da chay');
  }

  render() {
    console.log('render ChildrenLifeCycle da chay');
    return(
      <>
        <h3>gia tri nhan tu props: {this.props.count}</h3>
        <h2>gia tri state cua component: {this.state.c}</h2>
      </>
    )
  }
}
export default ChildrenLifeCycle;