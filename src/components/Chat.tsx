import { Avatar, Card, Grid, Row } from "antd";
import Button from "antd/es/button";
import TextArea from "antd/es/input/TextArea";
import Layout from "antd/es/layout";
import { Content } from "antd/es/layout/layout";
import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/fbConfig";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Chat = () => {
  const { fetchMessages, addMessage } = useActions();
  const [value, setValue] = useState("");
  const [user] = useAuthState(auth);
  const { message, loading } = useTypedSelector(
    (state) => state.messageReducer
  );

  useEffect(() => {
    fetchMessages();
  }, [message]);

  const logout = () => {
    auth.signOut();
  };

  const login = () => {
    if (value !== "") {
      addMessage(user, value, message);
      setValue("");
    }
  };

  return (
    <Layout>
      <Content className="site-layout" style={{ padding: "40px 50px" }}>
        <div
          style={{
            borderRadius: "10px",
            overflowY: "auto",
            padding: 24,
            height: "60vh",

            background: "#1677ff",
            marginBottom: "10px",
          }}
        >
          {user
            ? message.map((mess) => (
                <div
                  style={{
                    display: "block",

                    color: "white",
                    margin: 10,

                    marginLeft: user.uid === mess.uid ? "auto" : "10px",
                    width: "fit-content",
                    padding: 5,
                  }}
                >
                  <Card style={{ width: 300 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Avatar size={48} src={mess.photoURL} />
                      <div>{mess.displayName}</div>
                    </div>

                    <div
                      style={{
                        display: "bloc",

                        wordWrap: "break-word",
                      }}
                    >
                      {mess.text}
                    </div>
                  </Card>
                </div>
              ))
            : "[eq"}
        </div>
        <TextArea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={2}
          placeholder="Введите сообщение"
          maxLength={500}
        />

        <Row justify="space-between" style={{ marginTop: "10px" }}>
          <Button onClick={logout}>выйти из чата</Button>
          <Button onClick={login} type="primary">
            Отправить сообщение
          </Button>
        </Row>
      </Content>
    </Layout>
  );
};

export default Chat;
