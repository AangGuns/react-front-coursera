import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends React.Component {

    constructor(props) {
        // required when define a class component
        super(props);

        // stores properties related to this component
        this.state = {
            selectedDish: null
        }
    }

    // function to change the state of selectedDish equal to the received parameter dish
    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return <div></div>
        }
    }

    // render corresponding view of this component
    render() {
                    //  using dishes through parent props (App.js)  // map dishes JSON into list
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div> 
            </div>
        );
    }

}

export default Menu;