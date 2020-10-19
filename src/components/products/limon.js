import React, {Component} from 'react';
import axios from 'axios';
import Products from "../Products";
import limonImg from "../../assets/products/nocco-limon.jpg";

export default class Limon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            imageLocation: `../assets/products/`
        };
        let imageLocation = `../assets/products/${this.state.data.image}`;
            console.log('Data', this.props.data)
    }

    handleParentData = (e) => {
        this.setState({ data: e })
    }

    componentDidMount() {
        axios.get('http://localhost:8081/api/products/')
            .then((res) => {
                console.log('response', res.data)
                console.log('0INSIDE', res.data[0]);
                for (let i = 0; i < res.data.length; i++) {
                this.setState({
                    data: res.data[0],
                    imageLocation: `../assets/products/${res.data[i].image}`
                })
                    console.log('imageLocation', this.state.imageLocation)
            }
            });
        console.log('0ut', this.state.data);
    }


    render() {
        return (
<div>
    <img className="img=fluid flex-column justify-content-around" src={limonImg} alt=""/></div>
/*        this.state.data[0].value(data => {
            return (
                <React.Fragment>
                    <main className="d-flex">
                        <div className="d-flex container flex-column flex-sm-row">
                            <img className="img=fluid flex-column justify-content-around" src={limonImg} alt={data.title}/>
                            <div className="card-deck d-flex col-md-12 justify-content-around">
                                <p className="text-justify"></p>
                                <h5 className="card-title">{data.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">€{data.price}   |   {data.size}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">{data.brand}</h6>
                                <p className="card-text"><b>Description</b>: {data.description}</p>
                                <b>Ingredients</b>: {data.ingredients}

                            </div>
                        </div>
                    </main>

                </React.Fragment>
            );
        })*/
        );
    }
}