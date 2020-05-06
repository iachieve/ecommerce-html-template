import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useSelector, useDispatch} from 'react-redux';
import {fetchWatchAction} from '../redux/actions/watches.actions'
import WatchDetailMainSection from "../components/WatchDetail/WatchDetailMainSection";
import WatchDetailSpecs from "../components/WatchDetail/WatchDetailSepcs";
import WatchDetailGuide from "../components/WatchDetail/WatchDetailGuide";
import WatchDetailTestimonials from "../components/WatchDetail/WatchDetailTestimonials";

function WatchInfo(props) {
    const dispatch = useDispatch();
    const {watchId} = useParams();
    useEffect(() => {
        console.log('in use effects');
        dispatch(fetchWatchAction(watchId));
    }, [watchId, dispatch, props]);
    const watch = useSelector((state) => state.entities.watch);
    return (
       <div className='container'>
           {watch.images &&
               <React.Fragment>
              <WatchDetailMainSection watch={watch}/>
              <WatchDetailSpecs watch={watch}/>
              <WatchDetailGuide watch={watch}/>
              <WatchDetailTestimonials watch={watch}/>
               </React.Fragment>
           }
       </div>
  );
};

export default WatchInfo;
