import React, {Component} from 'react';
import style from './Music.module.css';
import axios from "axios";

const options = {
    method: 'get',
    url: 'http://e1847eed.ngrok.io/api/pizza/?format=json',
    transformResponse: [(data) => {
        return data;
    }]
};

class Music extends Component {
    state = {
        pizzas: [{
            id: 'asdasda'
        }]
    };

    info = [];
    componentDidMount() {
        this.setPizzas();
    }

    setPizzas = async () => {
        let response  = await this.getPizzas();
        debugger;
        this.setState({pizzas: response})
    };

    getPizzas = () => {

        return  axios.get('http://e1847eed.ngrok.io/api/pizza/?format=json')
            .then((response) => {
                debugger;
                console.log(response[0]);
                let rrr=JSON.parse(response);
                debugger;
                console.log(rrr)
            })
    };

    render() {
        return (
            <div className={style.item}>
                {this.state.pizzas[0].id}
            </div>
        );
    }
}


export default Music;
