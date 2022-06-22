import { useState } from "react"
import { Button, Modal, Form } from "react-bootstrap"
import { Typography } from "@material-ui/core"
import useStyles from "../../styles"

const NewsletterModal = () => {
  const [show, setShow] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const URL = process.env.SERVER_URL

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const classes = useStyles()

  const handleSubmit = async () => {
    if (name != "" && email != "") {
      // add to firebase
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      }
      await fetch(`${URL}/signupNewsletter`, requestOptions)

      handleClose()
    }
  }

  return (
    <>
      <Typography
        variant="h6"
        className={classes.navText}
        onClick={handleShow}
        style={{ marginLeft: 50 }}
      >
        Newsletter
      </Typography>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signup for our Newsletter!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Name: </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder=""
            />
            <Form.Label style={{ marginTop: 12 }}>Email: </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder=""
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
    </>
  )
}

export default NewsletterModal
