import { connect } from 'react-redux';
import {fetchWatchesListAction} from "../../redux/actions/watches.actions";
import WatchesList from "./WatchesList";

const mapStateToProps = (state, ownProps) =>{
    let watches = Object.values(state.entities.watches);
    return {
        watches
    }
};
const mapDispatchToProps = dispatch =>({
    fetchAllWatches: () => dispatch(fetchWatchesListAction())
});

export  default connect(mapStateToProps, mapDispatchToProps)(WatchesList);