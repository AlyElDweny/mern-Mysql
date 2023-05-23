import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import createProject from "./Form/createFunc";

export default function ProjectFrom({ projects, setProjects }) {
  const [formBody, setFormBody] = useState({ name: "", description: "" });

  const onChange = (e) => {
    setFormBody({ ...formBody, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormBody({ name: "", description: "" });
    createProject(formBody, projects, setProjects);
  };
  return (
    <div>
      <Form className="border border-primary rounded p-2">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Project Name: </Form.Label>
          <Form.Control
            name="name"
            value={formBody.name}
            type="text"
            placeholder="Enter name of the project"
            onChange={onChange}
          />
          <Form.Text className="text-muted">
            this name can't be duplicated.
          </Form.Text>
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="description">
          <Form.Label>Project Description:</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Add a description"
            onChange={onChange}
          />
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formBody.description}
            placeholder="Add a description"
            onChange={onChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
