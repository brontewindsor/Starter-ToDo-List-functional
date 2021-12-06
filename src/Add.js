import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import './App.css';


function Add(props) {
  const [state, setState] = useState({
    postId: Date.now(),
    id: "",
    task: "",
    likes: 0,
    img: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    toastr.success("Post Added");
    setState({
      postId: Date.now(),
      id: "",
      task: "",
      likes: 0,
      img: "",
    });
    props.submitHandler(state);
  };
  const handleChange = (event) => {
    const newState = { ...state };
    // console.log(event.target.name, event.target.value)
    newState[event.target.name] = event.target.value
    setState(newState);
    // console.log(state)
  };
  return (
    <div className="container">
      <Form onSubmit={(e) => submitHandler(e)}>
        <Form.Group controlId="taskID">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="id"
            type="text"
            placeholder="Who are you?"
            value={state.id}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="taskDescription">
          <Form.Label>Post</Form.Label>
          <Form.Control
            name="task"
            type="text"
            placeholder="What's on your mind?"
            value={state.task}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="img">
          <Form.Label>Image</Form.Label>
          <Form.Control
            name="img"
            type="text"
            placeholder="Insert image url here!"
            value={state.img}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <button className="add-post" variant="primary" type="submit">
          Add Post!
        </button>
      </Form>
    </div>
  );
}
export default Add;