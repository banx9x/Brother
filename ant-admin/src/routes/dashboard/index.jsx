import { Breadcrumb, Card, Col, Row, Space, Statistic, Table } from "antd";
import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowUpOutlined, DashboardOutlined } from "@ant-design/icons";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        year: 2008,
        food: 230,
        clothes: 355,
        electronics: 337,
    },
    {
        year: 2009,
        food: 360,
        clothes: 326,
        electronics: 542,
    },
    {
        year: 2010,
        food: 214,
        clothes: 219,
        electronics: 371,
    },
    {
        year: 2011,
        food: 230,
        clothes: 355,
        electronics: 337,
    },
    {
        year: 2012,
        food: 360,
        clothes: 326,
        electronics: 542,
    },
    {
        year: 2013,
        food: 214,
        clothes: 219,
        electronics: 371,
    },
    {
        year: 2014,
        food: 230,
        clothes: 355,
        electronics: 337,
    },
    {
        year: 2015,
        food: 360,
        clothes: 326,
        electronics: 542,
    },
    {
        year: 2016,
        food: 214,
        clothes: 219,
        electronics: 371,
    },
    {
        year: 2017,
        food: 230,
        clothes: 355,
        electronics: 337,
    },
    {
        year: 2018,
        food: 360,
        clothes: 326,
        electronics: 542,
    },
    {
        year: 2019,
        food: 214,
        clothes: 219,
        electronics: 371,
    },
];

const dataSource = [
    {
        name: "John",
        status: "Reject",
        date: "2016-12-17",
        price: 83.25,
    },
    {
        name: "John",
        status: "Reject",
        date: "2016-12-17",
        price: 83.25,
    },
    {
        name: "John",
        status: "Reject",
        date: "2016-12-17",
        price: 83.25,
    },
    {
        name: "John",
        status: "Reject",
        date: "2016-12-17",
        price: 83.25,
    },
    {
        name: "John",
        status: "Reject",
        date: "2016-12-17",
        price: 83.25,
    },
    {
        name: "John",
        status: "Reject",
        date: "2016-12-17",
        price: 83.25,
    },
];

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
    },
    {
        title: "Date",
        dataIndex: "date",
        key: "date",
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
    },
];

const Dashboard = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Tổng quan</title>
            </Helmet>

            <Breadcrumb style={{ marginBottom: 20 }}>
                <Breadcrumb.Item>
                    <DashboardOutlined /> Dashboard
                </Breadcrumb.Item>
            </Breadcrumb>

            <Row gutter={20} style={{ marginBottom: 20 }}>
                <Col span={6}>
                    <Card style={{ borderRadius: 0 }}>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: "#3f8600" }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card style={{ borderRadius: 0 }}>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: "#3f8600" }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card style={{ borderRadius: 0 }}>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: "#3f8600" }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card style={{ borderRadius: 0 }}>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: "#3f8600" }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
            </Row>

            <Row gutter={20} style={{ marginBottom: 20 }}>
                <Col span={18}>
                    <div
                        style={{
                            background: "white",
                            padding: 20,
                            height: "100%",
                        }}
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid
                                    stroke="#f5f5f5"
                                    strokeDasharray="3 3"
                                />
                                <Line
                                    strokeWidth={4}
                                    type="monotone"
                                    dataKey="food"
                                    stroke="green"
                                />
                                <Line
                                    strokeWidth={4}
                                    type="monotone"
                                    dataKey="clothes"
                                    stroke="blue"
                                />
                                <Line
                                    strokeWidth={4}
                                    type="monotone"
                                    dataKey="electronics"
                                    stroke="pink"
                                />
                                <XAxis dataKey="year" strokeWidth={0} />
                                <YAxis strokeWidth={0} />
                                <Tooltip />
                                <Legend verticalAlign="top" height={30} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Col>
                <Col span={6}>
                    <Card style={{ borderRadius: 0, marginBottom: 20 }}>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: "#3f8600" }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                    <Card style={{ borderRadius: 0, marginBottom: 20 }}>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: "#3f8600" }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                    <Card style={{ borderRadius: 0 }}>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: "#3f8600" }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
            </Row>

            <Row gutter={20}>
                <Col span={12}>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        pagination={false}
                    />
                </Col>
                <Col span={12}>
                    <div style={{ background: "white", height: 100 }}></div>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Dashboard;
