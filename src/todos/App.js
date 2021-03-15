import React from 'react';
import styled from 'styled-components';
import ButtonTodo from '../components/todos/Button';
import InputTodo from '../components/todos/Input';
import ListTask from '../components/todos/ListTaks';

const DivContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  border: solid 1px red;
  padding: 10px;
`

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      work: ""
    }
  }

  // ham co nhiem vu luu state work tu hanh dong nhap du lieu vao o input
  changeWork = (event) => {
    //console.log(event);
    let nameWork = event.target.value;
    if(nameWork !== ''){
      this.setState({
        work: nameWork
      })
    } 
  }

  addTodo = () => {
    this.setState({
      todos:[...this.state.todos, this.state.work],
      work: ""
    })
  }

  render() {
    console.log(this.state.todos);
    return (
      <>
        <DivContainer>
          <InputTodo val={this.state.work} change={this.changeWork} />
          <ButtonTodo add={this.addTodo}>Add</ButtonTodo>
          <ListTask/>
        </DivContainer>
      </>
    )
  }
}
export default TodoApp;