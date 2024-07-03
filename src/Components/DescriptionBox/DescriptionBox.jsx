import React from 'react';
import './DescriptionBox.css';
import assets from '../../assets/assets';

const DescriptionBox = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="descriptionbox">
            <ul className="nav nav-tabs descriptionbox-navigator" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active descriptionbox-nav-box" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">
                  Description
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link descriptionbox-nav-box one" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">
                  Reviews (122)
                </button>
              </li>
            </ul>
            <div className="tab-content descriptionbox-description p-5 pb-5 d-flex flex-column mt-5" id="myTabContent">
              <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                <p>
                  Our eCommerce website is your one-stop destination for all your shopping needs, offering a seamless and enjoyable experience. With a vast array of products ranging from fashion and electronics to home goods and more, we provide high-quality items from trusted brands. Our user-friendly interface, secure payment options, and reliable customer service ensure a hassle-free shopping journey. Explore our extensive collections, enjoy exclusive deals, and have your purchases delivered right to your doorstep with ease. Join millions of satisfied customers and experience the future of online shopping with us.
                </p>
                <p>
                  Our eCommerce website is your one-stop destination for all your shopping needs, offering a seamless and enjoyable experience. With a vast array of products ranging from fashion and electronics to home goods and more, we provide high-quality items from trusted brands. Our user-friendly interface, secure payment options, and reliable customer service ensure a hassle-free shopping journey. Explore our extensive collections, enjoy exclusive deals, and have your purchases delivered right to your doorstep with ease. Join millions of satisfied customers and experience the future of online shopping with us.
                </p>
              </div>
              <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                <div className="row">
                  <div className="col-md-6">
                    <h1>Customer Ratings & Reviews</h1>
                    <div className="reviews-box d-flex flex-column">
                      <div className="reviews d-flex align-items-center mb-3">
                        <div className="col-md-6">
                          <div className="reviews-star">
                            <div className="reviews-star-head d-flex align-items-start mt-4">
                              <h1 className="fs-1">4.5</h1>
                              <img src={assets.star_icon} width={20} alt="star" />
                            </div>
                            <div className="reviews-star-reviews d-flex flex-column mt-2">
                              <span>284 ratings</span>
                              <span>130 reviews</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="reviews-progress mt-2 d-flex justify-content-center align-items-center p-1">
                            <span className="pe-2">Excellent</span>
                            <div className="progress custom-progress-bar">
                              <div className="progress-bar bg-success" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span className="ps-2">230</span>
                          </div>
                          <div className="reviews-progress mt-2 d-flex justify-content-center align-items-center p-1">
                            <span className="pe-2">Good</span>
                            <div className="progress custom-progress-bar">
                              <div className="progress-bar color-bar" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span className="ps-2">50</span>
                          </div>
                          <div className="reviews-progress mt-2 d-flex justify-content-center align-items-center p-1">
                            <span className="pe-2">Average</span>
                            <div className="progress custom-progress-bar">
                              <div className="progress-bar bg-danger" role="progressbar" style={{ width: "5%" }} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span className="ps-2">4</span>
                          </div>
                        </div>
                      </div>

                      <div className="reviews">
                        <p>Sam</p>
                        <div className="rating">
                          <span className="badge bg-color text-white text">5 <img src={assets.star_icon} alt="" /></span>
                          <span className="ps-3">Excellent</span>
                        </div>
                        <p className="mt-3 content">"The quality of the clothes exceeded my expectations! The fit was perfect, and the fabric feels great. Shipping was fast and customer service was responsive."</p>
                      </div>
                      <hr />
                      <div className="reviews">
                        <p>Isabella</p>
                        <div className="rating">
                          <span className="badge bg-color text-white text">4.8 <img src={assets.star_icon} alt="" /></span>
                          <span className="ps-3">Outstanding</span>
                        </div>
                        <p className="mt-3 content">"Absolutely love the variety of styles available. Everything I ordered was exactly as described. The size guide is accurate, making shopping easy and hassle-free."</p>
                      </div>
                      <hr />

                      <div className="reviews ">
                        <p>Oliver</p>
                        <div className="rating">
                          <span className="badge bg-color text-white text">5 <img src={assets.star_icon} alt="" /></span>
                          <span className="ps-3">Superb!!</span>
                        </div>
                        <p className="mt-3 content">"Great experience from start to finish. The website is user-friendly, and the checkout process was smooth. My order arrived on time, and the clothes are fantastic."</p>
                      </div>
                      <hr />

                      <div className="reviews ">
                        <p>Sophia</p>
                        <div className="rating">
                          <span className="badge bg-color text-white text">4.7 <img src={assets.star_icon} alt="" /></span>
                          <span className="ps-3">Fantastic</span>
                        </div>
                        <p className="mt-3 content">"Amazing deals on trendy clothes! The material is soft and comfortable. I received compliments the first time I wore my new outfit."</p>
                      </div>
                      <hr />

                      <div className="reviews">
                        <p>Lucas</p>
                        <div className="rating">
                          <span className="badge bg-color text-white text">4.5 <img src={assets.star_icon} alt="" /></span>
                          <span className="ps-3">Good</span>
                        </div>
                        <p className="mt-3 content">"Highly impressed with the prompt delivery and excellent packaging. The clothes fit like a dream and look exactly like the photos. Will definitely shop again!"</p>
                      </div>
                      <hr />

                      <div className="reviews">
                        <p>Sam</p>
                        <div className="rating">
                          <span className="badge bg-color text-white text">5 <img src={assets.star_icon} alt="" /></span>
                          <span className="ps-3">Excellent</span>
                        </div>
                        <p className="mt-3 content">"The quality of the clothes exceeded my expectations! The fit was perfect, and the fabric feels great. Shipping was fast and customer service was responsive."</p>
                      </div>
                      <hr />
                      <div className="reviews">
                        <p>Isabella</p>
                        <div className="rating">
                          <span className="badge bg-color text-white text">4.8 <img src={assets.star_icon} alt="" /></span>
                          <span className="ps-3">Outstanding</span>
                        </div>
                        <p className="mt-3 content">"Absolutely love the variety of styles available. Everything I ordered was exactly as described. The size guide is accurate, making shopping easy and hassle-free."</p>
                      </div>
                      <hr />

                      <div className="reviews ">
                        <p>Oliver</p>
                        <div className="rating">
                          <span className="badge bg-color text-white text">5 <img src={assets.star_icon} alt="" /></span>
                          <span className="ps-3">Superb!!</span>
                        </div>
                        <p className="mt-3 content">"Great experience from start to finish. The website is user-friendly, and the checkout process was smooth. My order arrived on time, and the clothes are fantastic."</p>
                      </div>
                      <hr />

                      <div className="reviews ">
                        <p>Sophia</p>
                        <div className="rating">
                          <span className="badge bg-color text-white text">4.7 <img src={assets.star_icon} alt="" /></span>
                          <span className="ps-3">Fantastic</span>
                        </div>
                        <p className="mt-3 content">"Amazing deals on trendy clothes! The material is soft and comfortable. I received compliments the first time I wore my new outfit."</p>
                      </div>
                      <hr />

                      <div className="reviews">
                        <p>Lucas</p>
                        <div className="rating">
                          <span className="badge bg-color text-white text">4.5 <img src={assets.star_icon} alt="" /></span>
                          <span className="ps-3">Good</span>
                        </div>
                        <p className="mt-3 content">"Highly impressed with the prompt delivery and excellent packaging. The clothes fit like a dream and look exactly like the photos. Will definitely shop again!"</p>
                      </div>
                      <hr />
                      

                      <button data-bs-toggle="collapse" data-bs-target="#demo" className='btn-box px-4 py-2 text-white'>More..</button>

                        <div id="demo" className="collapse">
                                           <div className="reviews">
                        <p>Sam</p>
                        <div className="rating">
                          <span className="badge bg-color text-white text">5 <img src={assets.star_icon} alt="" /></span>
                          <span className="ps-3">Excellent</span>
                        </div>
                        <p className="mt-3 content">"The quality of the clothes exceeded my expectations! The fit was perfect, and the fabric feels great. Shipping was fast and customer service was responsive."</p>
                      </div>
                      <hr />
                      <div className="reviews">
                        <p>Isabella</p>
                        <div className="rating">
                          <span className="badge bg-color text-white text">4.8 <img src={assets.star_icon} alt="" /></span>
                          <span className="ps-3">Outstanding</span>
                        </div>
                        <p className="mt-3 content">"Absolutely love the variety of styles available. Everything I ordered was exactly as described. The size guide is accurate, making shopping easy and hassle-free."</p>
                      </div>
                      <hr />

                      <div className="reviews ">
                        <p>Oliver</p>
                        <div className="rating">
                          <span className="badge bg-color text-white text">5 <img src={assets.star_icon} alt="" /></span>
                          <span className="ps-3">Superb!!</span>
                        </div>
                        <p className="mt-3 content">"Great experience from start to finish. The website is user-friendly, and the checkout process was smooth. My order arrived on time, and the clothes are fantastic."</p>
                      </div>
                      <hr />

                      <div className="reviews ">
                        <p>Sophia</p>
                        <div className="rating">
                          <span className="badge bg-color text-white text">4.7 <img src={assets.star_icon} alt="" /></span>
                          <span className="ps-3">Fantastic</span>
                        </div>
                        <p className="mt-3 content">"Amazing deals on trendy clothes! The material is soft and comfortable. I received compliments the first time I wore my new outfit."</p>
                      </div>
                      <hr />

                      <div className="reviews">
                        <p>Lucas</p>
                        <div className="rating">
                          <span className="badge bg-color text-white text">4.5 <img src={assets.star_icon} alt="" /></span>
                          <span className="ps-3">Good</span>
                        </div>
                        <p className="mt-3 content">"Highly impressed with the prompt delivery and excellent packaging. The clothes fit like a dream and look exactly like the photos. Will definitely shop again!"</p>
                      </div>
                      <hr />
                      
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default DescriptionBox;
