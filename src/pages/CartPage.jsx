import React from 'react';
import CartComponent from '../component/cartComponent';
import PagesCoverComponent from "../component/pagesCoverComponent";


function CartPage(props) {
    return (
        <>
      <PagesCoverComponent firstWord="Courses " secondWord="Cart" />
      <CartComponent/>
        </>
    );
}

export default CartPage;