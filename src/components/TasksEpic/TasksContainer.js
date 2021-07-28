import React, {useState} from "react";
import { View, StyleSheet } from "react-native";

import TaskForm from "./TaskForm";
import TasksList from "./TasksList";
import CountersContainer from "./CountersContainer";


const TasksContainer = (props) => {

    const [tasks, setTasks] = useState([]);
    
    const onAddTask = (title) => {
        const newTask = {
            id: new Date().getTime(), 
            title: title, 
            completed: false
        };
        setTasks([newTask, ...tasks]);
    }

    const onChangeStatus = (id) => {        
        let newTasks = [];
        tasks.forEach( task => {
            if (task.id === id) {
                newTasks.push({
                    id: id, 
                    title: task.title, 
                    completed: !task.completed
                })
            } else {
                newTasks.push(task);
            }            
        });
        setTasks(newTasks);
    }

    const onDeleteTask = (id) => {
        let newTasks = [];
        tasks.forEach (
            task => {
                if (task.id !== id) {
                    newTasks.push(task)
                }
            });
        setTasks(newTasks);
    }

  
    const getCounter = () => {
        let counter = 0;

        tasks.forEach (task => {
            if (task.completed) {
                counter++ 
            }}
        )
        return counter ;
    };

    return (
        <View>   
            <TaskForm onAddTask={onAddTask}/> 
            <CountersContainer 
                nbTasks={tasks.length} 
                nbTasksCompleted={() => getCounter()} 
                
            /> 
            <TasksList tasks={tasks} onChangeStatus={onChangeStatus} onDeleteTask={onDeleteTask} />
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
    
    },
})

export default TasksContainer;