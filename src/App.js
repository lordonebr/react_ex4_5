import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { ApplicationRoutes } from "./ApplicationRoutes";
import { connect } from 'react-redux';

import './App.css';

function App (props) {

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    let quantTotal = 0;
    props.product.map(product => quantTotal += product.quantity);
    setQuantity(quantTotal)
    
}, [props.product]);

    return (
      <div>
        <ul className="listMenu">
          <li className="itemMenu itemMenuLeft">
            <Link className="itemMenuLink" to="/">Amazing Redux Store</Link>
          </li>
          <li className="itemMenu itemMenuLeft"> 
            <Link className="itemMenuLink" to="/about">Sobre</Link>
          </li>
          <li className="itemMenu">
            <Link className="itemMenuLink itemRight" to="/cart">
              Carrinho ({quantity})
              <img className="image" src={require('./assets/images/cart.png')} alt="N/A" />
            </Link>
          </li>
        </ul>

        <ApplicationRoutes />

        <style jsx>{`
          .listMenu {
            background: orangered;
            padding: 10px 0px 10px;
          }
          .itemMenu {
            list-style-type: none;
            display: inline;
            font-size: 18px;
            padding: 10px;
          }
          .itemMenuLeft {
              background: green;
              padding-left: 5px;
          }
          .itemMenuLeft:hover {
            background: rgb(0, 102, 0);
        }
          .itemMenuLink {
            text-decoration: none;
            text-transform: uppercase;
            margin-left: 5px;
            color: white;
            font-weight:bold;
          } 
          .itemRight {
            float: right;
            margin-right: 10px;
            color: black;
          }
          .image {
            height: 30px;
            width: 30px;
            margin-bottom: -9px;
          }
      `}</style>
      </div>
    );
  }

  const mapStateToProps = store => ({
    product: store.cartState.product
  });

export default connect(mapStateToProps)(App);
