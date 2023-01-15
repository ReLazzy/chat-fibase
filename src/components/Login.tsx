import { Layout, Row } from "antd";
import Button from "antd/es/button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { FC } from "react";
import { auth } from "../config/fbConfig";

const Login: FC = () => {
  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };
  return (
    <Layout>
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Button
          //loading={}
          onClick={login}
          type="primary"
          style={{ width: "300px", height: "50px" }}
        >
          Войти в чат
        </Button>
      </Row>
    </Layout>
  );
};
export default Login;
