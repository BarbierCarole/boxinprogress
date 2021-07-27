import React, {useState} from "react";
import { View, StyleSheet } from "react-native";

import TaskForm from "./TaskForm";
import TasksList from "./TasksList";

const TasksContainer = (props) => {

    const [tasks, setTasks] = useState([{
        id: new Date().getTime(), 
        title: "Nouvelle tache", 
        completed: false
    }]);
    
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
        tasks.forEach (
            task => {
                if (task.id === id) {
                    function arrayRemove(task, id) { 
    
                        return task.filter(function(ele){ 
                            return ele != id; 
                        });
                    }
                    
                    setTasks(arrayRemove(task, id));
                }
            }
        )
    }

    return (
        <View>   
            <TaskForm onAddTask={onAddTask}/>         
            <TasksList tasks={tasks} onChangeStatus={onChangeStatus} onDeleteTask={onDeleteTask} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
})

export default TasksContainer;