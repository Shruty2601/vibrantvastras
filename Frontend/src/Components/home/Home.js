

import { useNavigate } from "react-router-dom";
import {card,CardHeader,CardBody, Container,Row,Col, Button} from "reactstrap";
import Base from '../Base'
// import './Components/home/home.css'
import '../home/home.css'

/*we Use Home(Props)  then we have fech dynamically data from  props.title ,props.description,
props.buttonName under return  <h1>{props.title}</h1>> 

but here is problem we can't pass Default value so we use 
object Distrutre 

so inside Home(props) we Use Home({title="Learn code",description="cording",buttonName="like"}) and return
<h1>{title}</h1>

here we set default value
*/




const Home=({title="default titile",description="default Description ",buttonName="Defalut Button",myFun})=>{
    let styleOb={
        padding:'20px',
        background:'#e2e2e2',
        border:'1px solid red',
        margin:'10px'
      }
      const navigate=useNavigate()
      
    return(
        // Dynamic Value By props from App.js

        
/*<h1>{title}</h1>
        <h2>{description}</h2>
        <button onClick={myFun}>{buttonName}</button> */
        //    <div >     
        // <card>
        //     <CardBody>
        //     <h3>{title}</h3>
        //     <p>{description}</p>
        //     </CardBody>
        //    <CardHeader>
        //    <button onClick={myFun}>{buttonName}</button>
        //    </CardHeader>
            
        // </card>
        // </div> 
      

//        <Base >
//        <div className="banner" style={{ backgroundColor: 'blue'}}>
//             <Container >
//                 <Row>
//                     <Col>
//                         <h1 className="text-center" style={{fontWeight:1000,textTransform:"uppercase"}} >Welcome To my Online Store</h1>
//                         <p className="text-center"> Best In Class Experience With Buses Having Extra Comfort & Safety. ₹500 Off* Coupon RED500. Book Bus Tickets Online for 70,000+ Routes Across India With India's No.1 Bus Booking Site.
//                          Reschedulable Tickets. Top Rated App 4.5/5. Live Bus Tracking.
                         
//                          It’s tough to imagine daily life without e-commerce. We order food, clothes, and furniture; we register for classes and other online services; we download books, music, and movies; and so much more. E-commerce has taken root and is here to stay.

// The term “e-commerce” simply means the sale of goods or services on the internet. In its most basic form, e-commerce involves electronically transferring funds and data between 2 or more parties. This form of business has evolved quite a bit since its beginnings in the electronic data interchange of the 1960s and the inception of online shopping in the 1990s.

// In recent years, e-commerce has enjoyed a massive boost from the rise of smartphones, which allow consumers to shop from nearly anywhere. In fact, business experts predicted that mobile e-commerce alone would surpass $284 billion in 2020.

// What is an e-commerce</p>

//                     <Container className="text-center" >
//                         <Button style={{marginBlock:10}} onClick={()=>navigate("/store/all")} className="rounded-0" size="lg" color="success"   >Go to Store</Button>
//                     </Container>
            
//                     </Col>
//                 </Row>
//             </Container>



//         </div>
//        </Base>
        
        <div className="col-sm-12 home-bg-all">
        <Base>
        <div className="banner" style={{ backgroundColor: "blue" }}></div>
        </Base>

        <div className="col-sm-12 p-0 row m-0 ">
        <div className="col-sm-7 m-auto p-0">
            <div className="col-sm-8 m-auto">
            <div className="home-content-1 mb-2">
            Discover the Best Products for Your Style
            </div>
            <div className="home-content-2 mb-2">
            Explore the Latest Collection Trends of 2024
            </div>
            <div className="home-content-3">
            Get the Best Deals, Fast & Free Shipping, and Shop with Confidence
            Join our online store today and enjoy exclusive offers!
            </div>
            </div>
        </div>

        <div className="col-sm-5 p-0">
            <div>
            <img
                src="https://img.freepik.com/free-photo/fast-fashion-concept-with-full-clothing-store_23-2150871188.jpg?t=st=1723805354~exp=1723808954~hmac=348372b026209d1eba40caa95af0b7b39eab730dbf82de5980245aaf9a41fc43&w=900"
                alt="Description of the image"
                className="home-img"
            />
            </div>
        </div>
        </div>

        <div className="col-sm-12 p-0">
        <p className="home-heading-names">Featured Products</p>
        </div>

        <div className="col-sm-10 mx-auto p-0">
        <div
            id="carouselExampleIndicators"
            className="carousel slide pb-5"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
            <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
            ></button>
            <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
            ></button>
            <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
            ></button>
            </div>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="col-sm-10 mx-auto row p-0">
                <div className="carousel-w-25">
                    <img
                    src="https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dw9890d253/images/hires/SS22/GD-F24M642P-BALCK-(1).jpg?sw=400&sh=600&sm=fit"
                    className="d-block w-100 carousel-products"
                    alt="..."
                    />
                    <p>Black Design Casual Dress</p>
                    <p>999</p>
                </div>
                <div className="carousel-w-25">
                    <img
                    src="https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dwb2101a7c/images/hires/S23/GD-SS24GA035TUCVO-LIME-(1).jpg?sw=400&sh=600&sm=fit"
                    className="d-block w-100 carousel-products"
                    alt="..."
                    />
                    <p>Ikat Inspired Lime Green Cotton Tunic</p>
                    <p>2,499</p>
                </div>
                <div className="carousel-w-25">
                    <img
                    src="https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw976d8056/images/hires/SS22/AND-F24V53DRLV-TEAL-(1).jpg?sw=400&sh=600&sm=fit"
                    className="d-block w-100 carousel-products"
                    alt="..."
                    />
                    <p>Teal Time Viscose-blend Dress</p>
                    <p>2099</p>
                </div>
                <div className="carousel-w-25">
                    <img
                    src="https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw2311d4ce/images/hires/SS22/AND-F23AK003TSM-BLK-GLD-(4).jpg?sw=400&sh=600&sm=fit"
                    className="d-block w-100 carousel-products"
                    alt="..."
                    />
                    <p>The Party Starter Top</p>
                    <p>1499</p>
                </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="col-sm-10 mx-auto row p-0">
                <div className="carousel-w-25">
                    <img
                    src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1722420640_8018244.jpg?format=webp&w=300&dpr=1.4"
                    className="d-block w-100 carousel-products"
                    alt="..."
                    />
                    <p>Blue Bonnet Ombre Shirt</p>
                    <p>2099</p>
                </div>
                <div className="carousel-w-25">
                    <img
                    src="https://uathayam.in/cdn/shop/files/88A7564.jpg?v=1712128039&width=540"
                    className="d-block w-100 carousel-products"
                    alt="..."
                    />
                    <p>Kansas Trouser for Men</p>
                    <p>1899</p>
                </div>
                <div className="carousel-w-25">
                    <img
                    src="https://image.uniqlo.com/UQ/ST3/in/imagesgoods/470047/item/ingoods_08_470047.jpg?width=320"
                    className="d-block w-100 carousel-products"
                    alt="..."
                    />
                    <p>Denim Tucker Jacket</p>
                    <p>1099</p>
                </div>
                <div className="carousel-w-25">
                    <img
                    src="https://sslimages.shoppersstop.com/sys-master/images/hd6/hfb/26535834779678/A21HGRANVEERCOA_BLACK.jpg_2000Wx3000H"
                    className="d-block w-100 carousel-products"
                    alt="..."
                    />
                    <p>HangUp</p>
                    <p>1499</p>
                </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="col-sm-10 mx-auto row p-0">
                <div className="carousel-w-25">
                    <img
                    src="https://images.bestsellerclothing.in/data/only-kids/04-feb-2023/118310301_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto"
                    className="d-block w-100 carousel-products"
                    alt="..."
                    />
                    <p>Yellow Floral Front Knot Top</p>
                    <p>499</p>
                </div>
                <div className="carousel-w-25">
                    <img
                    src="https://images.bestsellerclothing.in/data/only-kids/3-aug-2022/299443101_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto"
                    className="d-block w-100 carousel-products"
                    alt="..."
                    />
                    <p>Pink Cropped Singlet</p>
                    <p>999</p>
                </div>
                <div className="carousel-w-25">
                    <img
                    src="https://thetaffy.in/cdn/shop/files/H32A2698_960x_crop_center.jpg?v=1722691195"
                    className="d-block w-100 carousel-products"
                    alt="..."
                    />
                    <p>foil printed pleated Aline party dress</p>
                    <p>999</p>
                </div>
                <div className="carousel-w-25">
                    <img
                    src="https://image.uniqlo.com/UQ/ST3/in/imagesgoods/471236/item/ingoods_09_471236.jpg?width=320"
                    className="d-block w-100 carousel-products"
                    alt="..."
                    />
                    <p>KIDS UV Protection Pocketable Parka</p>
                    <p>1299</p>
                </div>
                </div>
            </div>
            </div>
            <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
            >
            <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            >
            <span
                className="carousel-control-next-icon"
                aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>

        <div className="col-sm-12 p-0">
        <p className="home-heading-names">Latest Products</p>
        </div>

        <div className="col-sm-12 p-0">
        <div className="col-sm-9 mx-auto p-0">
            <div className="col-sm-12 p-0 row m-0 justify-content-between">
            <div className="latest-product-card-w-33 p-0">
                <img src="https://image.uniqlo.com/UQ/ST3/in/imagesgoods/471616/item/ingoods_57_471616.jpg?width=320" className="d-block w-100 carousel-latest-products" alt="..." />
                <div className="row m-0 justify-content-between">
                <div className="w-auto p-0">
                    <p>Dry Sweat Relaxed Hoodie</p>
                </div>
                <div className="w-auto p-0">
                    <p>2990</p>
                </div>
                </div>
            </div>

            <div className="latest-product-card-w-33 p-0">
                <img src="https://image.uniqlo.com/UQ/ST3/in/imagesgoods/424873/item/ingoods_58_424873.jpg?width=320" className="d-block w-100 carousel-latest-products" alt="..." />
                <div className="row m-0 justify-content-between">
                <div className="w-auto p-0">
                    <p>Uniqlo U Crew Sleeve T-Shirt</p>
                </div>
                <div className="w-auto p-0">
                    <p>1290</p>
                </div>
                </div>
            </div>

            <div className="latest-product-card-w-33 p-0">
                <img src="https://image.uniqlo.com/UQ/ST3/in/imagesgoods/473144/item/ingoods_13_473144.jpg?width=320" className="d-block w-100 carousel-latest-products" alt="..." />
                <div className="row m-0 justify-content-between">
                <div className="w-auto p-0">
                    <p>Soft Flannel Gathered Blouse</p>
                </div>
                <div className="w-auto p-0">
                    <p>1290</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        
        <div className="col-sm-9 mx-auto p-0">
            <div className="col-sm-12 p-0 row m-0 justify-content-between">
            <div className="latest-product-card-w-33 p-0">
                <img src="https://image.uniqlo.com/UQ/ST3/in/imagesgoods/469442/item/ingoods_01_469442.jpg?width=320" className="d-block w-100 carousel-latest-products" alt="..." />
                <div className="row m-0 justify-content-between">
                <div className="w-auto p-0">
                    <p>Light Flannel Blouse</p>
                </div>
                <div className="w-auto p-0">
                    <p>1499</p>
                </div>
                </div>
            </div>

            <div className="latest-product-card-w-33 p-0">
                <img src="https://image.uniqlo.com/UQ/ST3/in/imagesgoods/475462/item/ingoods_09_475462.jpg?width=320" className="d-block w-100 carousel-latest-products" alt="..." />
                <div className="row m-0 justify-content-between">
                <div className="w-auto p-0">
                    <p>Knitted Short Striped Jacket</p>
                </div>
                <div className="w-auto p-0">
                    <p>2290</p>
                </div>
                </div>
            </div>

            <div className="latest-product-card-w-33 p-0">
                <img src="https://image.uniqlo.com/UQ/ST3/in/imagesgoods/469869/item/ingoods_59_469869.jpg?width=320" className="d-block w-100 carousel-latest-products" alt="..." />
                <div className="row m-0 justify-content-between">
                <div className="w-auto p-0">
                    <p>Ultra Light Down Jacket</p>
                </div>
                <div className="w-auto p-0">
                    <p>2999</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div className="col-12 p-0">
    <p className="home-heading-names">Trending Products</p>
</div>
<div className="col-12 p-0">
    <div className="col-12 mx-auto p-0">
        <div className="row m-0">
            <div className="col-12 col-sm-6 col-md-3 trending-product-card p-2">
                <img src="https://img.faballey.com/images/Product/ITP01085Z/3.jpg" className="d-block w-100 carousel-trending-products" alt="..." />
                <div className="row m-0 justify-content-between">
                    <div className="w-auto p-0">
                        <p>Swiss Dot Halter Crop Top</p>
                    </div>
                    <div className="w-auto p-0">
                        <p>1299</p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3 trending-product-card p-2">
                <img src="https://img.faballey.com/images/Product/AST00007Z/5.jpg" className="d-block w-100 carousel-trending-products" alt="..." />
                <div className="row m-0 justify-content-between">
                    <div className="w-auto p-0">
                        <p>Navy Sequin Embroidered Blouse</p>
                    </div>
                    <div className="w-auto p-0">
                        <p>1499</p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3 trending-product-card p-2">
                <img src="https://img.faballey.com/images/Product/IPL00679Z/3.jpg" className="d-block w-100 carousel-trending-products" alt="..." />
                <div className="row m-0 justify-content-between">
                    <div className="w-auto p-0">
                        <p>Mauve Tiered Sharara Pants</p>
                    </div>
                    <div className="w-auto p-0">
                        <p>1099</p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3 trending-product-card p-2">
                <img src="https://img.faballey.com/images/Product/ITN03664Z/3.jpg" className="d-block w-100 carousel-trending-products" alt="..." />
                <div className="row m-0 justify-content-between">
                    <div className="w-auto p-0">
                        <p>Grey Florals Jumpsuit</p>
                    </div>
                    <div className="w-auto p-0">
                        <p>1799</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<footer className="bg-dark text-white mt-5 p-4 text-center">
    <div className="container">
        <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
                <h5>About Us</h5>
                <p>At Vibrant Vastras, we offer the latest in fashion, tech, and lifestyle products. We aim to provide an exceptional online shopping experience. Enjoy top brands, fast shipping, and excellent customer service.</p>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
                <h5>Contact Us</h5>
                <p>Email: vibrantvastras@gmail.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
                <h5>Follow Us</h5>
                <a href="#" className="text-white me-3">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-white me-3">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white me-3">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    </div>
    <div className="mt-3">
        <p>&copy; 2024 Vibrant Vastras. All rights reserved.</p>
    </div>
</footer>


    </div>


        
        
    );
}

export default Home