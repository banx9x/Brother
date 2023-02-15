import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { products } from "../lib/products";

const Home = () => {
    const ctx = useContext(CartContext);

    return (
        <main>
            <Container>
                <Row>
                    {products.map((item) => (
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
