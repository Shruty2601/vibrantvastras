import React from "react"
import { Container,Row,Col } from "reactstrap"
import Base from "../Base"
import TextTransition, { presets } from "react-text-transition";


function About(){

    const TEXTS = [
        "Forest",
        "Building",
        "Tree",
        "Color"
      ];

    

    return(
        <Base>
            <Container className="mt-10"> 
                <Row>
                    <Col>
                    <h1 className="text-center" style={{fontWeight:1000}}>Welcome to Vibrant Vastras </h1>
                    <p>Welcome to Vibrant Vastras, your ultimate destination for fashion and style. At Vibrant Vastras, we believe that clothing is not just about covering yourself but expressing your individuality, making you feel confident, and embracing the latest trends with grace and elegance. Our mission is to deliver high-quality, trendy apparel and accessories to suit every occasion and personal style.

Our Story

Founded with a passion for fashion and a commitment to excellence, Vibrant Vastras started as a small boutique with a vision to revolutionize online shopping. From our humble beginnings, we have grown into one of the leading e-commerce platforms for fashion in India. Our journey is fueled by our dedication to offering a diverse range of products that cater to every style and preference.

What We Offer

At Vibrant Vastras, we curate an extensive collection of clothing, accessories, and footwear for men, women, and children. Whether you’re looking for the latest trends, classic staples, or unique pieces, we have something for everyone. Our categories include:

- Men’s Fashion: From casual wear to formal attire, discover a wide range of shirts, trousers, suits, and more.
- Women’s Fashion: Explore our collection of dresses, tops, skirts, and ethnic wear that blend style and comfort.
- Kids’ Fashion: Find adorable and durable clothing for your little ones that are both practical and stylish.
- Accessories: Complement your outfits with our selection of bags, jewelry, shoes, and other accessories.

Why Choose Us?

1. Quality and Style: We prioritize quality and style, ensuring that each item in our collection meets high standards of craftsmanship and design.
2. Customer Satisfaction: Your satisfaction is our top priority. We offer easy returns, prompt customer support, and a hassle-free shopping experience.
3. Trendy Collections: Stay ahead of the fashion curve with our regularly updated collections featuring the latest trends and timeless classics.
4. Secure Shopping: Our platform is designed with robust security measures to protect your personal information and provide a safe shopping experience.

Our Vision

We envision a world where fashion is accessible, enjoyable, and a true reflection of individuality. At Vibrant Vastras, we strive to make online shopping a seamless experience, bringing you closer to the fashion you love and deserve.

Thank you for choosing Vibrant Vastras. We look forward to being a part of your fashion journey!


                         
                         
                         
                         </p>
                    </Col>
                </Row>
            </Container>
 </Base>
    )
   
   
}

export default About
