import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
    const { data } = useOutletContext();

    return (
        <main>
            <Container>
                <Row>
                    {data.map((item) => (
                        <Col xl={3}>
                            <ProductCard product={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </main>
    );
};

export default Home;
