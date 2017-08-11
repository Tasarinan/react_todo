import React from 'react';
import { connect } from 'react-redux';
import ItemAdder from '../../components/ItemAdder';
import {addNewCategory} from '../../actions';

const CategoryAdder = (props) => {
    return (
        <ItemAdder placeholder={"Enter Category Title"} {...props}/>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewItem: (newCategoryTitle) => dispatch(addNewCategory(newCategoryTitle))
    }
};

const CategoryAdderContainer = connect(
    null,
    mapDispatchToProps
)(CategoryAdder);

export default CategoryAdderContainer;