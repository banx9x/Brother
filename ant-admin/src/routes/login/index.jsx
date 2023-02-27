import { Button, Col, Form, Input, message, notification, Row } from "antd";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Login = () => {
    // const [signin] = useSigninMutation();
    // 1 Gọi thông qua RTK Query
    const navigate = useNavigate();

    const handleSubmit = ({ user }) => {
        console.log(user);

        if (user.email == "banx" && user.password == "123456") {
            message.success("Đăng nhập thành công");
            navigate("/");
        } else {
            message.error("Thông tin đăng nhập không đúng");

            // notification.error({
            //     message: "Lỗi đăng nhập",
            //     description: "Thông tin đăng nhập không đúng",
            // });
        }
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Đăng nhập</title>
            </Helmet>

            <Row
                justify="center"
                align="middle"
                style={{
                    minHeight: "100vh",
                    backgroundImage: "linear-gradient(to right, red, orange)",
                }}
            >
                <Col>
                    <Form
                        style={{
                            width: 300,
                            background: "#ffffff",
                            padding: 20,
                        }}
                        onFinish={handleSubmit}
                    >
                        <h1 style={{ textAlign: "center" }}>Login</h1>

                        <Form.Item
                            name={["user", "email"]}
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập Username",
                                },
                            ]}
                        >
                            <Input placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            name={["user", "password"]}
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập mật khẩu",
                                },
                            ]}
                        >
                            <Input.Password placeholder="Password" />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                htmlType="submit"
                                style={{ width: "100%" }}
                                type="primary"
                            >
                                Signin
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Login;
