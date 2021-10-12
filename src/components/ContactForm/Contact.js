import { Card, CardGroup, CardHeader } from "react-bootstrap";
function Contacts(props) {
  //   const [contact, setContact] = useState([]);

  //   function addContact(url, text) {
  //     const newContact = { id: counter, url, text };
  //     setContact([...contact, newContact]);
  //   }

  return (
    <Card border="info" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          {" "}
          {props.first} {props.last}
        </Card.Title>
        <Card.Text>{props.phone}</Card.Text>
        <Card.Text>{props.address} </Card.Text>
      </Card.Body>
    </Card>

    // <div className="card w-50">
    //   <div className="card-body">
    //     <h4 className="card-title">
    //       {props.first} {props.last}{" "}
    //     </h4>
    //     <p className="card-text">{props.phone}</p>
    //     <p className="card-text">{props.address} </p>
    //   </div>
    //   <a href="#" class="btn btn-primary">
    //     Button
    //   </a>
    // </div>
  );
}

export default Contacts;
