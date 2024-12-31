import React from "react";
import RenderTip from "../RenderTip";

const TodFilter = (props) => {
  const { onFilterChange, filterType } = props;
  return(
    <section data-name="TodFilter" className="style-2">
      <RenderTip/>
      <button 
      className="my-tab-btn" 
      data-active={filterType === 'all'}
      onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button 
      className="my-tab-btn" 
      data-active={filterType === 'active'}
      onClick={() => onFilterChange('active')}
      >
        Active
      </button>
      <button 
      className="my-tab-btn" 
      data-active={filterType === 'completed'}
      onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
    </section>
  );
};
export default React.memo(TodFilter);