import React from "react";
import { Container } from "react-bootstrap";
import { useOutletContext, useParams } from "react-router-dom";

const ProductDetail = () => {
    const { data } = useOutletContext();
    const { id } = useParams();

    // Lấy ra thông tin sản phẩm ứng với id
    const product = data.find((item) => item.id == id);

    if (!product) {
        return (
            <Container>
                <div>Sản phẩm không tồn tại</div>
            </Container>
        );
    } else {
        return (
            <Container>
                <div>
                    <h1>Product name: {product.title}</h1>
                    <p>Product price: {product.price}</p>
                    <p>
                        Product image: <img src={product.image} />
                    </p>
                </div>
            </Container>
        );
    }
};

export default ProductDetail;
