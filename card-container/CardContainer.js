import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CardContainer.css';
import { addToShop } from '../actions/shopActions';

class CardContainer extends Component  {
    handleClick = (id) => {
        this.props.addToShop(id);
    }
    render() {
        let itemList = this.props.items.map(item => {
            return (
                <div className="wrapper" onClick={() => console.log('click pe', )}>
                    <div className="star-frame" onClick={() => console.log('click pe',)}>
                        <i className="star outline icon"></i>
                    </div>
                    <div className="imgContainer">
                        <img alt="card" src={item.img} />
                    </div>
                    <div className="text">
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                    </div>
                    <div className="i-frame">
                        <button onClick={() => { this.handleClick(item.id) }}>
                            <i className="plus icon"></i>
                        </button>
                    </div>
                </div>

            )
        })

        return (
            <div className="container">
                <h3 className="center">Your items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
        const mapDispatchToProps = (dispatch) => {

            return {
                addToShop: (id) => { dispatch(addToShop(id)) }
            }
        }

export default connect( mapDispatchToProps )(CardContainer);