import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

import '../../styles/task.scss';

const TaskComponent = ({task}) => {

  useEffect(() => {
    console.log('Created Task');
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    }
  },[task])
  

  return (
    <tr className='fw-normal'>
        <th><span className='ms-2'>{ task.name }</span></th>
        <td className='aling-middle'><span>{ task.description }</span></td>
        <td className='aling-middle'><span>{ task.level }</span></td>
        <td className='aling-middle'><span>{  task.completed ? 'COMPELTED' : 'PENDING' }</span></td>
    </tr>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent