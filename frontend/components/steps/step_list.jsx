import React from 'react';
import StepListItemContainer from './step_list_item_container';

class StepList extends React.Component {
 constructor (props) {
   super(props);

 }

 render () {
   const { steps, todo_id } = this.props;
   const stepListItems = steps.map(step => <StepListItemContainer key={step.id} step={step} />)
   return (
     <div>
       <ul>
         {stepListItems}
       </ul>

     </div>
   );
 }
}

export default StepList;
