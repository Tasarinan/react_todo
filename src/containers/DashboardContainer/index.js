import { connect } from 'react-redux';
import Dashboard from '../../components/Dashboard';

const mapStateToProps = (state) => {
    return {
        categoryList: state.categoryList
    }
};

const DashboardContainer = connect(
    mapStateToProps,
)(Dashboard);

export default DashboardContainer;
