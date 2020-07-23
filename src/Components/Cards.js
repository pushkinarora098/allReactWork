import React, {Component} from 'react';
import {Card} from 'reactstrap'

function Cards(props){
const v =     [
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ]
const k = v.map((variant, idx) => {
    return(
        <Card
          bg={variant.toLowerCase()}
          key={idx}
          
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    );})
    return(
        <div>{k}</div>
    );
    }
export default Cards