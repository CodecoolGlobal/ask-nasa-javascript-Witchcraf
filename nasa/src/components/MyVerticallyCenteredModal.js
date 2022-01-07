import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';




const MyVerticallyCenteredModal = ({ planet }) => {
    const [open, setOpen] = useState(true)
    const handleClose = () => setOpen(false);
    const explanation = planet.explanation.slice(0,450);
    const formattedExplanation = explanation+"...";


    return (
        <>
             <Modal
                 className = "myModal"
                show={open}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{planet.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    <p>{planet.date}</p>
                    <img src={planet.url} alt="planet" width="300px" height="300px"/>
                    <p></p>
                    <p id="explanation">{formattedExplanation}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default MyVerticallyCenteredModal