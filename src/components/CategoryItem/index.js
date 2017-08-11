import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import ArrowUpIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import ArrowDownIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import MoveToIcon from 'material-ui/svg-icons/content/reply';
import { NavLink } from 'react-router-dom';

import './CategoryItem.css';

import CategoryList from '../CategoryList';
import CategoryDelete from '../CategoryDelete';
import CategoryEdit from '../CategoryEdit';
import AddSubCategory from '../AddSubCategory';

class CategoryItem  extends Component {
    state = {
        expanded: false,
    };

    handleExpander = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

    render() {
    	const {categoryId, categoryTitle, editCategory, deleteCategory, addNewSubcategory, categoryList, subcategories,
			modalConfig, getModalConfig, handleModalOpen, shouldRenderCRUD, todoId, moveTaskToNewCategory} = this.props;

        const {expanded} = this.state;

        const hasSubcategory = subcategories.length !== 0;

        const expanderRender = hasSubcategory &&
            (<div className="CategoryItemDropdown">
                { shouldRenderCRUD
                    ? (<IconButton onClick={this.handleExpander}>
                    { expanded ? <ArrowDownIcon/> : <ArrowUpIcon/> }
				</IconButton>)
                    : (<IconButton className="not-selectable">
					<ArrowDownIcon/>
				</IconButton>)
                }
			</div>);

        const editCategoryRender = (<CategoryEdit
			itemTitle={categoryTitle}
			id={categoryId}
			getModalConfig={getModalConfig}
			handleModalOpen={handleModalOpen}
		/>);

        const deleteAndAddSubCategoryRender =
            (<div className="CategoryItemPanel">
				<CategoryDelete
					id={categoryId}
					getModalConfig={getModalConfig}
					handleModalOpen={handleModalOpen}
				/>
				<AddSubCategory
					id={categoryId}
					getModalConfig={getModalConfig}
					handleModalOpen={handleModalOpen}
				/>
			</div>);

        const moveToCategoryRender = (
			<div className="CategoryItemPanel">
				<NavLink
					to={`/${categoryId}/${todoId}/edit`}
					onClick={() => moveTaskToNewCategory(categoryId, todoId)}
				>
					<IconButton tooltip="Move to this category">
						<MoveToIcon/>
					</IconButton>
				</NavLink>
			</div>);

        const subcategoriesListRender = hasSubcategory &&
            (<CategoryList
				className="CategoryList"
				categoryList={categoryList}
				itemsToRender={subcategories}
				editCategory={editCategory}
				deleteCategory={deleteCategory}
				addNewSubcategory={addNewSubcategory}
				modalConfig={modalConfig}
				getModalConfig={getModalConfig}
				handleModalOpen={handleModalOpen}
				shouldRenderCRUD={shouldRenderCRUD}
				todoId={todoId}
				moveTaskToNewCategory={moveTaskToNewCategory}
			/>);

        return (
			<li>
                { shouldRenderCRUD

                    ? (<div className="CategoryItem">
					<div className="CategoryItemLine">
						<div className="CategoryItemPanel">
                            { expanderRender }
							<div className={"CategoryItemTitle" + (hasSubcategory ? " CategoryItemTitle--hasSub" : "")}>
								<NavLink to={`/${categoryId}`} activeClassName="selected">{categoryTitle}</NavLink>
							</div>
                            { editCategoryRender }
						</div>
                        { deleteAndAddSubCategoryRender }
					</div>
                    { expanded && subcategoriesListRender }
				</div>)

                    : (<div className="CategoryItem">
					<div className="CategoryItemLine">
						<div className="CategoryItemPanel">
                            { expanderRender }
							<div className={"CategoryItemTitle" + (hasSubcategory ? " CategoryItemTitle--hasSub" : "")}>
								<NavLink to={`/${categoryId}`} className="not-selectable" activeClassName="currentCategory selected">{categoryTitle}</NavLink>
								<div className="CategoryItemMoveTo">
                                    { moveToCategoryRender }
								</div>
							</div>
						</div>
					</div>
                    { subcategoriesListRender }
				</div>)

                }
			</li>
        )
    }
}


export default CategoryItem;
