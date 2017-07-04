import React, {Component} from 'react';
import CategoryItem from '../../components/CategoryItem';

class CategoryItemContainer  extends Component {
    state = {
        expanded: false,
        isDialogOpen: false,
    };

    handleExpander = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

    handleDialogOpen = () => this.setState(prevState => ({ isDialogOpen: !prevState.isDialogOpen }));

    render() {
        const {expanded, isDialogOpen} = this.state;
        return (
            <CategoryItem
                expanded={expanded}
                handleExpander={this.handleExpander}
                isDialogOpen={isDialogOpen}
                handleDialogOpen={this.handleDialogOpen}
                {...this.props}
            />)
    }
}

export default CategoryItemContainer;
