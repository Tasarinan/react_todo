import { connect } from 'react-redux';
import Dashboard from '../../components/Dashboard';

const mapStateToProps = (state) => {
    return {
        categoryList: state.category.categoryList
    }
};

const DashboardContainer = connect(
    mapStateToProps,
)(Dashboard);

export default DashboardContainer;
