import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './App.css';
import HeartIcon from './heartheart.png'

function View(props){
    // const todos = [{ id: 1, task: "make static data", complete: false },
    // { id: 2, task: "make dynamic data", complete: false }]


  // const buildRows = () =>  {
  //   return props.activeTodoArray.map((current) => (
  //     <tr key={current.postId}>
  //       <td>{current.id}</td>
  //       <td>{current.task}</td>
  //       <td>{current.likes}</td>
  //     </tr>
  //   ));
  // };

  const makePost = () =>  {
    console.log(props.activeTodoArray)
    return props.activeTodoArray.map((current) => (
      <Card key={current.postId} className="card">
        <Card.Body className="card-body">
        <Card.Img thumbnail className="mh-50 mw-50" src={current.img} alt="" />
        <Card.Title className="card-title">{current.id}</Card.Title>
        <Card.Text className="card-text">{current.task}</Card.Text>
        <Card.Text>
          <button class="like-button" onClick={() => props.addLikes(current.postId)}>Like</button> 
          <button class="unlike-button" onClick={() => props.removeLikes(current.postId)}>Unlike</button>
          {current.likes} people <Image src={HeartIcon} className="hearticon" alt="Heart icon" width="30" height="30" /> this
          </Card.Text>
        </Card.Body>
      </Card>
    ));
  };

    return (
      // <>
      //   <Table striped bordered hover>
      //     <thead>
      //       <tr>
      //         <th>ID</th>
      //         <th>Task</th>
      //         <th>Likes</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {buildRows()}
      //     </tbody>
      //   </Table>
      // </>
      <Col>
      {makePost()}
      </Col>
    );
}
export default View;
