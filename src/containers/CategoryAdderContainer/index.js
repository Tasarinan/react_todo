import React from 'react';
import { connect } from 'react-redux';
import ItemAdder from '../../components/ItemAdder';
import {addNewCategory} from '../../actions';

const CategoryAdder = (props) => {
    return (
        <ItemAdder placeholder={"Enter Category Title"} {...props}/>
    );
};

const CategoryAdderContainer = connect(
    null,
    {addNewItem: addNewCategory}
)(CategoryAdder);

export default CategoryAdderContainer;