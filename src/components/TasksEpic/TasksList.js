import React from "react";
import { FlatList } from "react-native";

import TaskTile from "./TaskTile";

const TasksList = ({ tasks, onChangeStatus, onDeleteTask}) => {
   
   const _renderItem = ({item}) => {
       return (
           <TaskTile 
                id={item.id} 
                title={item.title} 
                completed={item.completed}
                onChangeStatus={onChangeStatus}
                onDeleteTask={onDeleteTask}
                
            >
            </TaskTile>
       )
    }

    return (
      
        <FlatList
            data={tasks}
            renderItem={_renderItem}
            keyExtractor={ item => item.id.toString()}        
        />
      
    );
}

export default TasksList;