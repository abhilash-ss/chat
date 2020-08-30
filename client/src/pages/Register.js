import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { gql, useMutation } from "@apollo/client";

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      username
      email
      createdAt
    }
  }
`;

export default function Register() {
  const [variables, setVariables] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const [registerUser, response] = useMutation(REGISTER_USER, {
    update: (_, res) => console.log("response", res),
    onError: (err) => setErrors(err.graphQLErrors[0].extensions.errors)
  });

  const submitRegisterForm = (e) => {
    e.preventDefault();
    console.log(variables);

    registerUser({ variables });
    // console.log("response", response);
  };

  return (
    <Row className="bg-white py-5 justify-content-center">
      <Col sm={8} md={6} lg={4}>
        <h1 className="text-center">Register</h1>
        <Form onSubmit={submitRegisterForm}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className={errors.email && "text-danger"}>
              {errors.email ?? "Email address"}
            </Form.Label>
            <Form.Control
              className={errors.email && "is-invalid"}
              type="email"
              placeholder="Enter email"
              value={variables.email}
              onChange={(e) =>
                setVariables({ ...variables, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicUsername">
            <Form.Label className={errors.username && "text-danger"}>
              {errors.username ?? "Username"}
            </Form.Label>
            <Form.Control
              className={errors.username && "is-invalid"}
              type="text"
              placeholder="Enter username"
              value={variables.username}
              onChange={(e) =>
                setVariables({ ...variables, username: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className={errors.password && "text-danger"}>
              {errors.password ?? "Password"}
            </Form.Label>
            <Form.Control
              className={errors.password && "is-invalid"}
              type="password"
              placeholder="Enter password"
              value={variables.password}
              onChange={(e) =>
                setVariables({ ...variables, password: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label className={errors.confirmPassword && "text-danger"}>
              {errors.confirmPassword ?? "Confirm password"}
            </Form.Label>
            <Form.Control
              className={errors.confirmPassword && "is-invalid"}
              type="password"
              placeholder="Enter password"
              value={variables.confirmPassword}
              onChange={(e) =>
                setVariables({ ...variables, confirmPassword: e.target.value })
              }
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="success" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
}
