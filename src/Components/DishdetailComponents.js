import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb} from 'reactstrap'
import {Link} from 'react-router-dom'
    function RenderComments({comments}){
        const commentss = comments.map((com)=>{
            return(
                <div>
                    <div> {com.comment} </div>
                    <br></br>
                    <div>{"--"+com.author+", "+com.date}</div>
                    <br></br>
                </div>
            );
        });
        return commentss
    }
    function RenderDish({dish}){
        return(
                <div>
                    <Card>
                        <CardImg width="100%" src={dish.image} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>
                                {dish.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>    
    );
}
    function DishDetail(props){
        if(props.dish!=null)
        {
            return(
            <div className="container">
                <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/Menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                        <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                </div>
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h3>Comments</h3>
                    <RenderComments comments = {props.comments}/>
                </div>
                </div>
            </div>
            );
        }
        else return <div></div>
    }
export default DishDetail;