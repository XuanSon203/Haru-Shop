import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Setting() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <div className='mt-4'>
         <Button variant="primary" onClick={handleShow} className="m-3">
        Mở menu bên trái
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop={false}
        scroll={true}
        placement="start"
        className="custom-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu bên trái</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          - Video đã xem<br />
          - Danh sách phát<br />
          - Kênh đăng ký<br />
        </Offcanvas.Body>
      </Offcanvas>
     </div>
    </>
  );
}

export default Setting;
