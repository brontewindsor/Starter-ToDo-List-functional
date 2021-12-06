import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import View from './View'
import Add from './Add';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App(){
  const [todos, setTodos] = useState([
    { postId: 0, id: "1", task: "make static data", likes: 0, img: "" },
    { postId: 1, id: "2", task: "make dynamic data", likes: 1, img: "" },
    { postId: 2, id: "3", task: "show elevation example", likes: 2, img:"" },
    { postId: 3, id: "4", task: "show elevation example", likes: 3, img:"" },
  ]);

  const updateList = (task) => {
    setTodos((prevTodoList) => {
      return [task, ...prevTodoList];
    });
    localStorage.setItem("list", JSON.stringify([task, ...todos]));
  };
  const addLikes = (postId) => {
    const newTodos = todos.map((item) => {
      if (postId == item.postId){
        item.likes ++
      }
      return item
      })
    setTodos(newTodos)
    localStorage.setItem("list", JSON.stringify(newTodos))
  }
  const removeLikes = (postId) => {
    const newTodos = todos.map((item) => {
      if (postId == item.postId && item.likes > 0){
        item.likes --
      }
      return item
      })
    setTodos(newTodos)
    localStorage.setItem("list", JSON.stringify(newTodos))
  }
  useEffect(() => {
    const listContents = localStorage.getItem("list");
    setTodos(JSON.parse(listContents) || []);
  }, []);


    return (
      <Router>
         <Navbar>
        <Navbar.Brand>
          <Link className="brand-name" to="/">
          Facegram</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-nav-nav"></Navbar.Toggle>
        <Navbar.Collapse className="nav-link">
          <Nav>
            <Link className="home-link" to="/">
              Home
            </Link>
            <Link className="post-link" to="/add">
              Post
            </Link>
          </Nav>
        </Navbar.Collapse>
         </Navbar>
        <Container>
          <Switch>
            <Route path="/add">
          <Add 
          submitHandler={(task) => {
            updateList(task);
          }}
          />
          </Route>
          <Route exact path="/">
          <View activeTodoArray={todos} addLikes={addLikes} removeLikes={removeLikes} />
          </Route>
          <Route path="/">Error 404</Route>
          </Switch>
        </Container>
      </Router>
    );

}
export default App;
