import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const ProgressBar = ({categoryList}) => {

	const progressCompleted = () => {
        let totalCategories = 0;
        let completedCategories = 0;

        categoryList.map(category => {
            if(category.todos.length !==0){
                let filtered  = category.todos.filter(todo => !todo.isCompleted);
                if(filtered.length ===0){
                    completedCategories +=1;
				}
                totalCategories +=1;
                return category;
            }
            completedCategories +=1;
            totalCategories +=1;
            return category;
        });

        return completedCategories / totalCategories * 100;
    };

	return (
		<LinearProgress color={"orange"} mode="determinate" value={progressCompleted()} />
	);
};

export default ProgressBar;