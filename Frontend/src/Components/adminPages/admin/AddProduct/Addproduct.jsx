
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import {Row,Col,Card, FormGroup, Label,Input,Form, Container, Button, CardBody} from 'reactstrap'
import {loadCategories}  from "../../../../Service/category-service";
import {addproduct, uploadProductImage} from "../../../../Service/product-service"
import JoditEditor from 'jodit-react';
import React, {useRef, useMemo } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

function Addproduct(){
    const[category,setCategory]=useState([])
    const[product,setProduct]=useState([])
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const[images,setImages]=useState(null)
    const navigate=useNavigate()

    // on change images
    const imageUpload=(event)=>{
        console.log(event.target.files[0]);
        setImages(event.target.files[0])
     }
    useEffect(()=>{
            loadCategories().then(cats=>{
                setCategory([...cats])
               
            }).catch(error=>{
                console.log(error)
            })
    },[])
  
    const addProductFormSubmit=(event)=>{
        event.preventDefault();

        addproduct(product,content).then(data=>{
            console.log(data)
            console.log(images)
            toast.success("Product Added Successfully")
            navigate("/admin-dashboard/viewproduct")
        }
        ).catch(error=>{
            console.log(error)
        })
        
      
    }
    //field change product Description
    const contentFieldChanged=(data)=>{
        setProduct({...product,'productDesc':data})
    }

    

    function addProductHtml(){
        return(
            <Row> 
                <Col md="11"  >
                    <h3 className="text-center" style={{color:"Blue"}}> Add New Product </h3> 
                    <Form onSubmit={addProductFormSubmit}>
                        {JSON.stringify(product)}
                        <FormGroup>
                            <Label for={'productName'}><h5><b>Product Name</b></h5></Label>
                            <Input id={'productName'} placeholder="Enter Product Name Here" type={'text'} onChange={event => setProduct({...product,productName:event.target.value})} value={product.productName} ></Input>
                        </FormGroup>

                        <FormGroup>
                           
                            <Label for={'productDesc'}><h5><b>Product Description</b></h5></Label>
                           {/* <Input id={'productDesc'} placeholder="Enter ProductDesription Here" type={'textarea'} onChange={event =>setProduct({...product,productDesc:event.target.value})} value={product.productDesc} ></Input>*/}
                           <JoditEditor
                           ref={editor}
                           value={content}
                           onChange={contentFieldChanged}
                           />                       
                            </FormGroup>

                        <FormGroup>
                            <Label for={'productPrice'}><h5><b>Product Product Price</b></h5></Label>
                            <Input id={'productPrice'} placeholder="Enter ProductPrice Here" type={'number'}  onChange={event=>setProduct({...product,productPrice:event.target.value})}  value={product.productPrice} ></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for='productQuantity'><h5><b>Product Quantity</b></h5></Label>
                            <Input id={'productQuantity'} placeholder="Enter ProductDesription Here" type={'number'}  onChange={event=>setProduct({...product,productQuantity:event.target.value})} value={product.productQuantity} ></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for={'live'}><h5><b>Product Live</b></h5></Label>
                            <Input id={'live'} className={"ms-5"} placeholder="Enter ProductDesription Here" type={'checkbox'} onChange={event=>setProduct({...product,live:!product.live}) }
                            checked={product.live} ></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for={'stock'}><h5><b>Product Stock</b></h5></Label>
                            <Input id={'stock'} className={"ms-4"}   type={'checkbox'} onChange={event=>setProduct({...product,stock:!product.stock})} checked={product.stock}  ></Input>
                        </FormGroup>

                       

                        < FormGroup>
                            <Label for={'cat'}><h5><b>Product Category</b></h5></Label>
                            <Input id={'cat'} className={"ms-4"}  type={'select'} onChange={event=>setProduct({...product,productCategory:event.target.value})} value={product.productCategory}>
                                {  
                                   (category?category.map((cat,i)=>{
                                    return(
                                        
                                       <option value={cat.categoryId} key={i}>{cat.title}</option>
            
                                    )
                                }):<option >Select</option>)
                                    
                                }
                            </Input>
                        </FormGroup>
                       

                        <FormGroup>
                            <div className="col-sm-12 p-0 row m-0">
                                <Button type="submit" color="success" block className="w-auto" > Add Product</Button>
                                <Link to="/admin-dashboard/home" className="w-auto">
                                    <Button type="submit" color="danger" className="w-auto">Cancel</Button>
                                </Link>
                            </div>
                            {/* <Container className="text-center row m-0">
                            <Button type="submit" color="success" block className="w-auto" > Add Product</Button>
                            <Link to="/admin-dashboard/home" >
                                    <Button type="submit" color="danger" block className="w-auto">Cancel</Button>
                            </Link>
                            </Container> */}
                        </FormGroup>


                    </Form>
                </Col>
                
            </Row>
        )
    }

    return(
        <Container >
            <Card >
            <CardBody>
                {
                    (addProductHtml())
                }
            
            </CardBody>
            </Card>
            </Container>
    )
}
export default Addproduct;