import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  height: 30px;
  padding: 5px;
  background-color: blue;
  color: white;
`

class ButtonTodo extends Component {
  render() {
    return(
      <>
        <Button onClick={()=> this.props.add()}>{this.props.children}</Button>
      </>
    )
  }
}
export default ButtonTodo;