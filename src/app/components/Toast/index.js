import { Toast, ToastContainer } from "react-bootstrap";
import { useState } from "react";

export default function Flash({ initial, delay=2500 }) {
  const [show, setShow] = useState(!!initial);
  return (
    <ToastContainer position="top-center" className="p-3">
      <Toast onClose={() => setShow(false)} show={show} delay={delay} autohide>
        <Toast.Header>
          <strong className="me-auto">Aviso</strong>
        </Toast.Header>
        <Toast.Body>{initial || ""}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
