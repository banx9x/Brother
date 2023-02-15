import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();
    const ctx = useContext(CartContext);

    // Lấy thông tin chi tiết về sản phẩm tương ứng
    return <div>ProductDetail: {id}</div>;
};

export default ProductDetail;
