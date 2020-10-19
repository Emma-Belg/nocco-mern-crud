import React, {Component} from 'react';
import axios from 'axios';
import limonImg from "../assets/products/nocco-limon.jpg";
import miamiImg from "../assets/products/nocco-miami.jpg";
import peachImg from "../assets/products/nocco-peach.jpg";
import pearImg from "../assets/products/nocco-pear.jpg";
import tropicalImg from "../assets/products/nocco-tropical.jpg";
import {Link} from "react-router-dom";

export default class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            // eslint-disable-next-line no-undef
            imageLocation: `../assets/products/`
        };
        let imageLocation = `../assets/products/${this.state.data.image}`;
        //console.log('imageLocation', imageLocation);
        if (this.state.data.image) {
            this.setState({
                image: imageLocation
            });
            console.log('IMG', imageLocation)
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/api/products/')
            .then((res) => {
                console.log('response', res.data)
                console.log('img', res.data[0].image)
                for (let i = 0; i < res.data.length; i++) {
                this.setState({
                    data: res.data,
                    imageLocation: `../assets/products/${res.data[i].image}`
                })
                    console.log('imageLocation', this.state.imageLocation)
            }
            });
        console.log('this.state.data.image', this.state.imageLocation);
    }


    render() {
        return (
            this.state.data.map(data => {
                return (
                    <React.Fragment>
                        <main className="d-flex">
                            <div className="d-flex container flex-column flex-sm-row">
                                <div className="card-deck d-flex col-md-12 ">
                                    <div className="card py-1 justify-content-around shadow-sm">
                                        <img className="card-img-top" src={limonImg} alt={data.image}/>
                                        <div className="card-body">
                                            <h5 className="card-title">{data.title}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">€{data.price}   |   {data.size}</h6>
                                            <h6 className="card-subtitle mb-2 text-muted">{data.brand}</h6>
                                            <p className="card-text"><b>Description</b>: {data.description}</p>
                                            <Link to="/limon" className="btn btn-primary">{data.title}</Link>
                                        </div>
                                        <br/>
                                    </div>
                                    <div className="card py-1 justify-content-around shadow-sm">
                                        <img className="card-img-top" src={miamiImg} alt={data.image}/>
                                        <div className="card-body">
                                            <h5 className="card-title">{data.title}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">€{data.price}   |   {data.size}</h6>
                                            <h6 className="card-subtitle mb-2 text-muted">{data.brand}</h6>
                                            <p className="card-text"><b>Description</b>: {data.description}</p>
                                            <Link to="/limon" className="btn btn-primary">{data.title}</Link>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </main>

                    </React.Fragment>
                );
            })
        );
    }
}