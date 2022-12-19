import React, { useState } from "react";
import { Button, Toast } from "react-bootstrap";
import { getFBToken, onMessageListener } from "./firebase";

const NofificationFB = () => {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  const [isTokenFound, setTokenFound] = useState(false);
  getFBToken(setTokenFound);

  onMessageListener()
    .then((payload: any) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(notification);
    })
    .catch((err: any) => console.log("failed: ", err));

  return (
    <div className="mt-5">
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        animation
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          minWidth: 200,
        }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto " style={{ color: "black" }}>
            {notification.title}
          </strong>
        </Toast.Header>
        <Toast.Body style={{ color: "black" }}>{notification.body}</Toast.Body>
      </Toast>
      {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
      {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
      <Button onClick={() => setShow(true)}>Show Toast</Button>
    </div>
  );
};

export default NofificationFB;
