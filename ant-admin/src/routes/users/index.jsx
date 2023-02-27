import {
    DashboardOutlined,
    UserAddOutlined,
    UserOutlined,
} from "@ant-design/icons";
import {
    Breadcrumb,
    Button,
    Col,
    DatePicker,
    Form,
    Input,
    Modal,
    Row,
    Space,
    Table,
} from "antd";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import userService from "../../features/services/user";

const Users = () => {
    const [showCreateUserModal, setShowCreateUserModal] = useState(false);
    const [form] = Form.useForm();

    const {
        data = [],
        isLoading,
        isError,
        error,
    } = userService.useGetUsersQuery();

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Username",
            dataIndex: "username",
            key: "username",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
            render: (_, record) =>
                `${record.address.street}, ${record.address.city}`,
        },
        {
            title: "Website",
            dataIndex: "website",
            key: "website",
            render: (_, record) => (
                <a href={`https://${record.website}/`}>{record.website}</a>
            ),
        },
        {
            title: "Company",
            dataIndex: "company",
            key: "company",
            render: (_, record) => `${record.company.name}`,
        },
    ];

    return (
        <React.Fragment>
            <Helmet>
                <title>Quản lý Users</title>
            </Helmet>

            <Breadcrumb style={{ marginBottom: 20 }}>
                <Breadcrumb.Item>
                    <DashboardOutlined /> Dashboard
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                    <UserOutlined /> Users
                </Breadcrumb.Item>
            </Breadcrumb>

            <Row
                style={{ background: "#ffffff", padding: 20 }}
                gutter={[0, 20]}
            >
                <Col span={24}>
                    <Space
                        style={{
                            width: "100%",
                            justifyContent: "space-between",
                        }}
                    >
                        <Form layout="inline">
                            <Form.Item name={["name"]}>
                                <Input placeholder="Search by name" />
                            </Form.Item>

                            <Form.Item name={["createdDate"]}>
                                <DatePicker.RangePicker />
                            </Form.Item>

                            <Form.Item>
                                <Space>
                                    <Button type="primary" htmlType="submit">
                                        Search
                                    </Button>
                                    <Button>Reset</Button>
                                </Space>
                            </Form.Item>
                        </Form>

                        <Button
                            icon={<UserAddOutlined />}
                            onClick={() => setShowCreateUserModal(true)}
                        >
                            Create
                        </Button>
                    </Space>
                </Col>

                <Col span={24}>
                    <Table
                        columns={columns}
                        dataSource={data.concat(data, data, data, data, data)}
                        loading={isLoading}
                        bordered
                        pagination={{
                            size: "default",
                            showPrevNextJumpers: true,
                            showQuickJumper: true,
                            showTotal: (total, [start, end]) => {
                                return `Hiển thị từ ${start} đến ${end} trên tổng số ${total}`;
                            },
                        }}
                    />
                </Col>
            </Row>

            <Modal
                open={showCreateUserModal}
                title={
                    <>
                        <UserAddOutlined /> Create new user
                    </>
                }
                onCancel={() => setShowCreateUserModal(false)}
                onOk={form.submit}
                width={450}
            >
                <Form form={form} onFinish={console.log} layout="vertical">
                    <Form.Item name={["name"]} label="Họ tên" rules={[]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={["email"]} label="Email">
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </React.Fragment>
    );
};

export default Users;
