import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 200px;
  height: 30px;
  border: 1px solid #ccc;
  padding: 0px 3px;
`;

class InputTodo extends React.Component {
  render() {
    return(
      <>
        <Input value={this.props.val} onChange={this.props.change} />
      </>
    )
  }
}
export default InputTodo;