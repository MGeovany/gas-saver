/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Container, Form, Icon } from "react-bulma-components";

export default function Login(props: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    loginUser().then((data) => {
      props.setToken(data.access_token);
      localStorage.setItem("token", JSON.stringify(data.access_token));
      const router = useRouter();
      router.push("/login");
    });
  }

  async function loginUser() {
    const searchParams = new URLSearchParams();
    searchParams.append("username", username);
    searchParams.append("password", password);

    const response = await fetch("/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: searchParams.toString(),
    });
    const data = await response.json();

    return data;
  }

  return (
    <Container className="mt-5">
      <h1 className="has-text-centered is-size-2">Login to your account</h1>
      <Form.Field>
        <Form.Label>Username</Form.Label>
        <Form.Control>
          <Form.Input
            placeholder="Username"
            name="username"
            type="text"
            onChange={(e: any) => setUsername(e.target.value)}
          />
          <Icon align="left">{/*  <FaUserAlt /> */}</Icon>
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Label>Password</Form.Label>
        <Form.Control>
          <Form.Input
            placeholder="Password"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Icon align="left">{/*   <FaKey /> */}</Icon>
        </Form.Control>
      </Form.Field>
      <Button.Group>
        <Button
          className="button is-primary is-fullwidth"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Button.Group>
      <div className="has-text-centered">
        <p className="is-size-7">
          <span>Dont have an account?</span>
          <Link href="/register"> Register Here!</Link>
        </p>
      </div>
    </Container>
  );
}
