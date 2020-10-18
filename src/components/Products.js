import React, {Component} from 'react';
import axios from 'axios';

export default class Products extends Component {
    constructor(props) {
        super(props);

        /*        axios.get("http://localhost:8081/api/products/").then(res => {
                    this.setState({
                        data: res.data
                    });
                });*/

        this.state = {
            data: [],
            buttonClicked: false
        };
        this.getDetails = this.getDetails.bind(this);

        /*        const product = axios.get('http://localhost:8081/api/products/')
                    .then(res => console.log('RESPONSE', res.data));

                product.title = product.title.bind(this);
                product.description = product.description.bind(this);
                product.brand = product.brand.bind(this);
                product.price = product.price.bind(this);*/

    }

    componentDidMount() {
        axios.get('http://localhost:8081/api/products/')
            .then((res) => {
                console.log('response', res.data)
                this.setState({
                    data: res.data
                })
            });
    }

    getDetails() {
        if (!this.state.buttonClicked) {
            this.setState({
                buttonClicked: true
            });
        }
    }

    render() {
        return (
            this.state.data.map(data => {
                return (
                    <React.Fragment>
                        <p>
                            {" "}
                            <b>Title</b> : {data.title}
                        </p>
                        <p>
                            <b>Brand</b> : {data.brand}
                        </p>
                        <hr/>
                    </React.Fragment>
                );
            })
        );
    }
}