import React, {Component} from 'react';
import CategoryItem from '../../components/CategoryItem';

class CategoryItemContainer  extends Component {
    state = {
        expanded: false,
    };

    handleExpander = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

    render() {
        const {expanded} = this.state;
        return (
            <CategoryItem
                expanded={expanded}
                handleExpander={this.handleExpander}
                {...this.props}
            />)
    }
}

export default CategoryItemContainer;
