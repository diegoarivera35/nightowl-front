import React, { Component } from 'react';
import './App.css';





const BASE_URL = "http://localhost:3001/products";




class Products extends Component {


state = {
    posts: []
    }
    componentDidMount() {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(posts => { 
    //console.log(post);
    this.setState({ posts });
    })
    }
    render(){
    return (
    <div className="contenedor">
    {this.state.posts.map(post => (
    <div className="producto">
    <img className="lic-image" src={post.description} alt="img" />
    <div className="titulo">{post.name}</div>
    <div className="precios">${post.price} pesos</div>
    </div>
    ))}
    </div>
    )
    
    }
}
    export default Products;