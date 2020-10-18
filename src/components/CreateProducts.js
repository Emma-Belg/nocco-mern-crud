import React, { Component } from 'react';
import axios from 'axios';

export default class CreateProducts extends Component {
    constructor(props) {
        super(props);

        this.onChangeProductTitle = this.onChangeProductTitle.bind(this);
        this.onChangeProductDescription = this.onChangeProductDescription.bind(this);
        this.onChangeProductBrand = this.onChangeProductBrand.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductImage = this.onChangeProductImage.bind(this);
        this.onChangeProductSize = this.onChangeProductSize.bind(this);
        this.onChangeProductIngredients = this.onChangeProductIngredients.bind(this);
        this.onChangeProductFeatured = this.onChangeProductFeatured.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            description: '',
            brand: 'Nocco',
            price: '',
            image: '',
            size: '330ml',
            ingredients: '',
            featured: false
        }
    }

    onChangeProductTitle(e) {this.setState({title: e.target.value})};
    onChangeProductDescription(e) {this.setState({description: e.target.value})};
    onChangeProductBrand(e) {this.setState({brand: e.target.value})};
    onChangeProductPrice(e) {this.setState({price: e.target.value})};
    onChangeProductImage(e) {this.setState({image: e.target.value})};
    onChangeProductSize(e) {this.setState({size: e.target.value})};
    onChangeProductIngredients(e) {this.setState({ingredients: e.target.value})};
    onChangeProductFeatured(e) {this.setState({featured: e.target.value})};

    onSubmit(e) {
        e.preventDefault();

/*        console.log(`Form submitted:`);
        console.log(`Product Title: ${this.state.title}`);
        console.log(`Description: ${this.state.description}`);
        console.log(`Brand: ${this.state.brand}`);
        console.log(`Price: ${this.state.price}`);
        console.log(`Image: ${this.state.image}`);
        console.log(`Ingredients: ${this.state.ingredients}`);
        console.log(`Featured?: ${this.state.featured}`);*/

        const newProduct = {
            title: this.state.title,
            description: this.state.description,
            brand: this.state.brand,
            price: this.state.price,
            image: this.state.image,
            ingredients: this.state.ingredients,
            featured: this.state.featured
        };

/*        axios ({
            method: 'post',
            url: 'http://localhost:3000/api/products',
            data: newProduct
            }
        ).then(res => console.log('RESPONSE', res.data));*/


        axios.post('http://localhost:8081/api/products', newProduct)
            .then(res => console.log('RESPONSE', res.data));

        this.setState({
            title: '',
            description: '',
            brand: 'Nocco',
            price: '',
            image: '',
            size: '',
            ingredients: '330ml',
            featured: false
        })
    }

    render() {
        return (
            <div className='editContainer'>
                <h3>Create Products</h3>
                <p>Create Products and add them to the database</p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeProductTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeProductDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ingredients: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.ingredients}
                                onChange={this.onChangeProductIngredients}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="checkbox"
                                    name="isTheProductFeatured?"
                                    id="featured"
                                    value="true"
                                    onChange={this.onChangeProductFeatured}
                            />
                            <label className="form-check-label">This is a featured product</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Product" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}