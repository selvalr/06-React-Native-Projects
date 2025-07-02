import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = () => {
    if (task) {
      if (editIndex !== -1) {
        //Edit Existing Task
        const updatedTask = [...tasks];
        updatedTask[editIndex] = task;
        setTasks(updatedTask);
        setEditIndex(-1);
      } else {
        //add new task
        setTasks([...tasks, task]);
      }
      setTask("");
    }
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={style.task}>
        <Text style={style.taskText}>{item}</Text>
        <View style={style.taskActions}>
          <TouchableOpacity onPress={() => handleEditTask(index)}>
            <Text style={style.editButton}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDeleteTask(index)}>
            <Text style={style.deleteButton}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <Text style={style.heading}>Selva</Text>
      <Text style={style.title}>ToDo App</Text>
      <TextInput
        style={style.input}
        placeholder="Enter Task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity style={style.addButton} onPress={handleAddTask}>
        <Text style={style.addButtonText}>
          {editIndex !== -1 ? "Update Task" : "Add Task"}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 40,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 7,
    color: "dodgerblue",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 3,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  addButton: {
    backgroundColor: "dodgerblue",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  taskActions: {
    flexDirection: "row",
  },
  editButton: {
    color: "dodgerblue",
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 10,
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
  taskText: {
    fontSize: 19,
  },
});
