import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavComponent from '../components/NavComponent';

const CartPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Iphone 15 Pro Max', price: 500000, quantity: 1, image: 'hp3.png' },
        { id: 2, name: 'Vivo V30 5G', price: 500000, quantity: 1, image: 'hp6.png' }
    ]);

    const handleRemoveItem = (itemId) => {
        const updatedItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedItems);
        setShowModal(false); // Sembunyikan modal setelah menghapus item
    };

    return (
        <>
            <NavComponent />
            <div id="cart">
                <Container className="mt-5">
                    {cartItems.length === 0 ? (
                        <Row>
                            <Col>
                                <h1>Keranjang masih kosong :(</h1>
                            </Col>
                        </Row>
                    ) : (
                        <Row>
                            <Col lg={7}>
                                {cartItems.map(item => (
                                    <Card key={item.id} className="mb-3">
                                        <Row>
                                            <Col md={4}>
                                                <img
                                                    src={`./src/assets/${item.image}`}
                                                    width="100%"
                                                    alt={item.name}
                                                />
                                            </Col>
                                            <Col md={8}>
                                                <Card.Body>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <Link to="/detail" className="card-title">{item.name}</Link>
                                                            <Form>
                                                                <Form.Label>Jumlah :</Form.Label>
                                                                <Form.Control type="number" name="jumlah" defaultValue={item.quantity} />
                                                            </Form>
                                                            <p className="mt-2">Harga :</p>
                                                            <h5>IDR {item.price}</h5>
                                                        </Col>
                                                        <Col className="text-end">
                                                            <Button
                                                                variant="danger"
                                                                onClick={() => setShowModal(true)}
                                                            >
                                                                Hapus
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Card>
                                ))}
                            </Col>
                            <Col lg={5}>
                                <div className="ringkasan">
                                    <Card>
                                        <h5>Ringkasan Belanja</h5>
                                        <p><b>Total Item</b> : {cartItems.length}</p>
                                        <p><b>Total Belanja</b> : IDR {cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</p>
                                        <Link to="/order" className="btn btn-primary w-100">Check Out</Link>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    )}

                    {/* Modal Hapus Item */}
                    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                        <Modal.Body className="text-center">
                            <h4 className="mb-3">Yakin Ingin Hapus Item?</h4>
                            <Button variant="secondary me-2" onClick={() => setShowModal(false)}>
                                Batal
                            </Button>
                            <Button variant="danger" onClick={() => handleRemoveItem(cartItems[0].id)}>
                                Yakin
                            </Button>
                        </Modal.Body>
                    </Modal>
                </Container>
            </div>
        </>
    );
};

export default CartPage;
