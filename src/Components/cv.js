import React, {Component} from 'react'
import {Form,Label,Col,Input,Button, FormGroup, CardBody,Card, CardTitle, CardHeader} from 'reactstrap'
import { render } from 'react-dom'

class Cv extends Component{

    state = {
        fields:[["",""]],
        agree:[true]
        }

    addField(){
        const c = this.state.fields
        const c1 = ["",""]
        const c2 = [...c,c1]
        const c3 = this.state.agree
        const c4 = [...c3,true]
        this.setState({
        fields: c2,
        agree:c4
        })
    }
    handleChange(e,index){
        const target = e.target
        const value = target.type==='checkbox'?target.checked:target.value
        const name = target.name
        if(name=='agree'){this.state.agree[index] = !this.state.agree[index]}
        else if(name=="1") this.state.fields[index][0] =  value
        else this.state.fields[index][1] = value
        this.setState({fields: this.state.fields, agree:this.state.agree})
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
                                <FormGroup row>
                                    <Col md={{size:6, offset:2}}>
                                        <FormGroup check>
                                        <Label check>   
                                            <Input type="checkbox" name="agree"
                                            checked={this.state.agree[index]}
                                            onChange={(e)=>this.handleChange(e,index)}/> {' '}
                                            <strong>Display?</strong>
                                        </Label>
                                        </FormGroup>        
                                    </Col>
                                    </FormGroup>
                            </Form>
                    </>);})
            }
        </>
        const k2 = <>
        {    
            this.state.fields.map((field,index)=>{
            if(this.state.agree[index]==true)
            {
            return(<>
            
                    <Card>
                        <CardHeader style={{backgroundColor: 'purple',color:'white',borderRadius:'0'}}>{field[0]}</CardHeader>
                        <CardBody style={{backgroundColor: 'white'}}>{field[1]}</CardBody>
                    </Card>
                    </>
                );}
            else return <div></div>})
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