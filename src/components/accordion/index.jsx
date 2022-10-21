import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

function AccordionHeader({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  const handleClick = (e) => {
    if (!e.target.matches(".block-click")) {
      decoratedOnClick();
    }
  };
  return (
    <Card.Header className="bg-white" onClick={handleClick}>
      {children}
    </Card.Header>
  );
}

export const AccordionItem = (props) => (
  <Card className={props.className || ""}>
    <AccordionHeader eventKey={props.eventKey}>
      {props.children[0]}
    </AccordionHeader>
    <Accordion.Collapse eventKey={props.eventKey}>
      <Card.Body>{props.children[1]}</Card.Body>
    </Accordion.Collapse>
  </Card>
);

export const AccordionContainer = (props) => (
  <Accordion defaultActiveKey={props.default ?? -1}>{props.children}</Accordion>
);
