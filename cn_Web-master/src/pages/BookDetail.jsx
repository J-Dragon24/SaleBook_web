import Footer from "../components/Footer";
import Header from "../components/header/Header";
import { useParams } from 'react-router-dom'
import React, { useState } from 'react';
import { books } from '../../data.json'
import BD_name from "../components/BD_name";
import BD_infor from "../components/BD_infor";
import BD_describ from "../components/BD_describ";
import BD_pay from "../components/BD_pay";
import "../App.css"

function BookDetail() {
    // React hook
    const { id } = useParams();
    const book = books.find(item => item.id == id);

    // cart
    const [CartCount, SetCartCount] = useState(0);
    const AddToCart = () => {
        SetCartCount(CartCount + 1);
    };

    return <>
        <Header CartCount={CartCount} />
        {/* body */}
        <div className="container mb-5 mt-5 BookDetail">
            <div className="row text-start d-flex justify-content-center">

                <div className="col-md-3">
                    <div className="card shadow" style={{ width: "100%" }}>
                        <div id="img">
                            <img src={book.images[0].medium_url} className="card-img-top" alt="..." />
                            {/* <div className="d-flex">
                            <a className="active">
                                <img src={book.images[0].thumbnail_url} alt="" />
                            </a>
                        </div> */}
                        </div>
                        <div className="card-body" id="features">
                            <h5 className="card-title">Đặc điểm nổi bật</h5>
                            <p className="card-text">
                                <ul className='fs-6'>
                                    <li>Câu chuyện cảm động về tình yêu và sự sống.</li>
                                    <li>Ngôn ngữ sâu sắc, gần gũi và tinh tế.</li>
                                    <li>Được chuyển thể thành phim điện ảnh thành công.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="border rounded-3 p-3 bg-white" id="name">
                        <BD_name book={book} />
                    </div>
                    <div className="border rounded-3 p-3 bg-white" id="infor">
                        <BD_infor book={book} />
                    </div>
                    <div className="border mt-4 rounded-3 p-3 bg-white" id="describ">
                        <BD_describ book={book} />
                    </div>
                </div>

                <div className="col-md-3">
                    <div className=" rounded-3 p-3 bg-white border" id="pay">
                        <BD_pay book={book} AddToCart={AddToCart} />
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </>
}

export default BookDetail;