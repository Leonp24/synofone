import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavComponent from "../components/NavComponent";
import FooterComponent from "../components/FooterComponent";


const OrderPage = () => {
    function tampilkanMetodePembayaran() {
        const metodePembayaran = document.getElementById('bayar').value;

        if (metodePembayaran === 'bank') {
            document.getElementById('row-bank').style.display = 'flex';
            document.getElementById('row-gopay').style.display = 'none';
        } else if (metodePembayaran === 'gopay') {
            document.getElementById('row-bank').style.display = 'none';
            document.getElementById('row-gopay').style.display = 'flex';
        } else {
            document.getElementById('row-bank').style.display = 'none';
            document.getElementById('row-gopay').style.display = 'none';
        }
    }

    return (
        <>
            <NavComponent />
            <div id="order">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="produk mt-5">
                                <Row>
                                    <Col lg={4}>
                                        <Card className="mb-3">
                                            <img src="./src/assets/hp3.png" width="100%" alt="" />
                                        </Card>
                                    </Col>
                                    <Col lg={6}>
                                        <h5>Iphone 15 Pro Max</h5>
                                        <Row>
                                            <Col lg={4}>
                                                <Form>
                                                    <Form.Label>Jumlah :</Form.Label>
                                                    <Form.Control type="number" name="jumlah" />
                                                </Form>
                                            </Col>
                                            <Col lg={8}>
                                                <label htmlFor="harga">Harga</label>
                                                <h5>IDR 500.000</h5>
                                            </Col>
                                        </Row>
                                        <hr className="d-block d-lg-none" />
                                    </Col>
                                </Row>
                            </div>

                            <div className="info-buyer">
                                <Form>
                                    <Form.Label>Alamat</Form.Label>
                                    <Form.Control as="textarea" name="alamat" id="alamat" placeholder="Masukkan Alamat" rows={5}>AutoFill Alamat</Form.Control>
                                </Form>

                                <label htmlFor="pengiriman">Metode Pengiriman</label>
                                <Form.Select name="pengiriman" id="pengiriman">
                                    <option value="">-- Pilih Satu --</option>
                                    <hr />
                                    <option value="reguler">Reguler | IDR 20.000</option>
                                    <option value="ekspres">Ekspres | IDR 50.000</option>
                                </Form.Select>

                                <label htmlFor="bayar">Metode Pembayaran</label>
                                <Form.Select name="bayar" id="bayar" onChange={tampilkanMetodePembayaran}>
                                    <option value="">-- Pilih Satu --</option>
                                    <hr />
                                    <option value="bank">Transfer Bank</option>
                                    <option value="gopay">Gopay</option>
                                </Form.Select>

                                {/* tampilan bank dan gopay  */}

                                <Row id="row-bank" style={{display : 'none'}}>
                                    <Col md={3}>
                                        <img src="./src/assets/ic-bca.png" alt="" width="120px" />
                                    </Col>
                                    <Col md={9}>
                                        <p>Bank BCA</p>
                                        <h6>01234567890</h6>
                                        <p>a.n Synofone</p>
                                    </Col>
                                </Row>

                                <Row id="row-gopay" style={{display : 'none'}}>
                                    <Col md={3}>
                                        <img src="./src/assets/ic-gopay.png" alt="" width="120px" />
                                    </Col>
                                    <Col md={9}>
                                        <p>Gopay</p>
                                        <h6>01234567890</h6>
                                        <p>a.n Synofone</p>
                                    </Col>
                                </Row>
                            </div>

                            <div className="rincian mt-5 mb-5">
                                <h6>Rincian Pembayaran</h6>
                                <p>Harga : <b>IDR 500.000</b></p>
                                <p>Ongkos Kirim : <b>IDR 20.000</b></p>
                                <p>Total : <b>IDR 520.000</b></p>
                            </div>

                            <Link to="/status" className="btn btn-primary w-100">Konfirmasi</Link>
                        </Col>
                    </Row>
                </Container>
            </div>

            <FooterComponent/>
        </>
    );
}

export default OrderPage;