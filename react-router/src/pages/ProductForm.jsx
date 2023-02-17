import React from "react";
import { Container, Form as BsForm, Button } from "react-bootstrap";
import { Form, useActionData } from "react-router-dom";

const ProductForm = () => {
    const result = useActionData();

    return (
        <Container>
            <h1>Add New Product</h1>

            <Form
                method="POST"
                encType="multipart/form-data"
                action="/new-product"
            >
                <BsForm.Group className="mb-3">
                    <BsForm.Label>Title</BsForm.Label>
                    <BsForm.Control
                        name="title"
                        type="text"
                        placeholder="Product name"
                    />
                </BsForm.Group>

                <BsForm.Group className="mb-3">
                    <BsForm.Label>Price</BsForm.Label>
                    <BsForm.Control
                        name="price"
                        type="number"
                        placeholder="Product price"
                    />
                </BsForm.Group>

                <BsForm.Group className="mb-3">
                    <BsForm.Label>Description</BsForm.Label>
                    <BsForm.Control
                        name="description"
                        type="text"
                        placeholder="Product description"
                    />
                </BsForm.Group>

                <BsForm.Group className="mb-3">
                    <BsForm.Label>Image</BsForm.Label>
                    <BsForm.Control
                        name="image"
                        type="file"
                        placeholder="Product image"
                    />
                </BsForm.Group>

                <BsForm.Group className="mb-3">
                    <BsForm.Label>Category</BsForm.Label>
                    <BsForm.Control
                        name="category"
                        type="text"
                        placeholder="Product category"
                    />
                </BsForm.Group>

                <Button variant="primary" type="submit">
                    Save
                </Button>
            </Form>
        </Container>
    );
};

export default ProductForm;

export const productFormActions = async ({ params, request }) => {
    const formData = await request.formData();

    /* Uploading the image to a free image hosting service. */
    // let bodyContent = new FormData();
    // bodyContent.append("source", formData.get("image"));

    // const uploadResponse = await fetch(
    //     "https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5",
    //     {
    //         method: "POST",
    //         body: bodyContent,
    //     }
    // );
    // const uploadResult = await uploadResponse.json();

    // formData.set("image", uploadResult.url);

    try {
        const res = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            body: formData,
        });

        const result = await res.json();
        return result;
    } catch (err) {
        return { error: "Lỗi khi tạo sản phẩm" };
    }
};
