import { Button, Card, Col } from "react-bootstrap";

import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
      <Col xs={6} md={3} xl={2}>
        <Card className={this.state.selected ? "border-2 border-danger bg-body-secondary" : ""}>
          <Card.Img variant="top" src={this.props.book.img} onClick={this.toggleSelected} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Button variant="outline-success" className="w-100">
              Scopri di più
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
