import React, {Component} from 'react';
import CategoryItem from '../../components/CategoryItem';

class CategoryItemContainer  extends Component {
    constructor(props){
        super(props);
        this.state = {
            expanded: false,
            isDialogOpen: false,
        };
    }

    handleExpander = () => this.setState({expanded: !this.state.expanded});

    handleDialogOpen = () => this.setState({isDialogOpen: !this.state.isDialogOpen});

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
