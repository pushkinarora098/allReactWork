import React, {Component} from 'react'
import {Form,Label,Col,Input,Button, FormGroup, CardBody,Card, CardTitle, CardHeader} from 'reactstrap'
import { render } from 'react-dom'

class Cv extends Component{

    state = {
        fields:[["",""]]
        }

    addField(){
        const c = this.state.fields
        const c1 = ["",""]
        const c2 = [...c,c1]
        this.setState({
        fields: c2
        })
    }
    handleChange(e,index){
        const target = e.target
        const name = target.name
        const value = target.value
        if(name=="1") this.state.fields[index][0] =  value
        else this.state.fields[index][1] = value
        this.setState({fields: this.state.fields})
    }
    render(){
        const k1 = 
        <>
            {
            this.state.fields.map((field,index)=>{
                return(<>
                    
                            <Form>
                               <FormGroup row>
                                    <Label htmlfor = "firstname" md={2} >Field Name</Label>
                                    <Col md={10}>
                                            <Input type="text" id = {index} name= "1" value={field[0]} onChange={(e)=>this.handleChange(e,index)}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlfor = "firstname" md={2} >Value</Label>
                                        <Col md={10}>
                                        <Input type="text" id = {index} name= "2" value={field[1]} onChange={(e)=>this.handleChange(e,index)}/>
                                    </Col>
                                </FormGroup>
                            </Form>
                    </>);})
            }
        </>
        const k2 = <>
        {    
            this.state.fields.map((field,index)=>{
            return(<>
                
                    <Card bg={'primary'} style={{ width: '18rem' }}text={'Primary' === 'light' ? 'dark' : 'white'}>
                        <CardHeader>{field[0]}</CardHeader>
                        <CardBody>{field[1]}</CardBody>
                    </Card>
                    </>
                );})
        }
</>
        return(
            <>
            <h1>The form</h1>
            <label>Fields</label>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">{k1}</div>
                    <div className="col-md-5">{k2}</div>
                </div>
                <Button onClick={(e)=>this.addField(e)}>Add Field</Button>
             </div>
        </>);
    }
}
export default Cv;