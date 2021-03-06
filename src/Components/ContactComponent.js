import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col} from 'reactstrap'
import {Link} from 'react-router-dom'
class Contact extends Component{

    constructor(props){
        super(props)
        this.state={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            agree:false,
            contactType:'Tel.',
            message:''
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleAdd=this.handleAdd.bind(this)
    }
    handleInputChange(event){
        const target = event.target
        const value = target.type==='checkbox'?target.checked:target.value
        const name = target.name
        console.log(target)
        console.log(name)
        console.log(value)
        this.setState({
            [name]:value
        })
    }

    handleSubmit(event){
        console.log("current state is"+JSON.stringify(this.state))
        alert("current state is"+JSON.stringify(this.state))
        event.preventDefault();
    }
    handleAdd(){
        console.log("adding a field")
        alert("adding a field")
    }
    render(){
        return(
                <div className="container">
                            <div className="row">
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                                </Breadcrumb>
                                <div className="col-12">
                                <h3>Contact Us</h3>
                                    <hr/>
                                </div>
                            </div>
                    
                    <div className="row row-content">
                        <div className="col-12">
                        <h3>Location Information</h3>
                        </div>
                        <div className="col-12 col-sm-4 offset-sm-1">
                                <h5>Our Address</h5>
                                <address>
                                121, Clear Water Bay Road<br />
                                Clear Water Bay, Kowloon<br />
                                HONG KONG<br />
                                <i className="fa fa-phone"></i>: +852 1234 5678<br />
                                <i className="fa fa-fax"></i>: +852 8765 4321<br />
                                <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                                </address>
                        </div>
                        <div className="col-12 col-sm-6 offset-sm-1">
                            <h5>Map of our Location</h5>
                        </div>
                        <div className="col-12 col-sm-11 offset-sm-1">
                            <div className="btn-group" role="group">
                                <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                                <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                                <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                            </div>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>Send us Your Feedback</h3>
                        </div>
                        <div className="col-12 col-md-9">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstname" md={2} >First Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="firstname" name="firstname" 
                                        placeholder="First Name" value={this.state.firstname}
                                        onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="last name" md={2} >Last Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="lastname" name="lastname" 
                                        placeholder="Last Name" value={this.state.lastname}
                                        onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="telnum" md={2} >Telephone Number</Label>
                                    <Col md={10}>
                                        <Input type="tel" id="telum" name="telnum" 
                                        placeholder="Telephone Number" value={this.state.telnum}
                                        onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={2} >Email Id</Label>
                                    <Col md={10}>
                                        <Input type="email" id="email" name="email" 
                                        placeholder="Email Id" value={this.state.email}
                                        onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size:6, offset:2}}>
                                        <FormGroup check>
                                        <Label check>   
                                            <Input type="checkbox" name="agree"
                                            checked={this.state.agree}
                                            onChange={this.handleInputChange}/> {' '}
                                            <strong>Do you want us to contact you?</strong>
                                        </Label>
                                        </FormGroup>        
                                    </Col>
                                    <Col md={{size:3, offset:1}}>
                                        <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                                        <option>Tel no.</option>
                                        <option>Email</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="feedback" md={2} >Your Feedback</Label>
                                    <Col md={10}>
                                        <Input type="textarea" id="feedback" name="message" placeholder="Type Here...."
                                        rows="12" value={this.state.message} onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size:10, offset:2}}>
                                        <Button type="submit" color="primary" onChange={this.handleSubmit}>Send Feedback</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                            <Form onSubmit={this.handleAdd}>
                                <FormGroup row>
                                    <Col md={{size:10, offset:2}}>
                                        <Button type="submit" color="primary" onChange={this.handleAdd}>Add a Field</Button>
                                    </Col>
                                </FormGroup>
                                </Form>
                        </div>
                    </div>
                </div>
            );
    }
}
export default Contact;