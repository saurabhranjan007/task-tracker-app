import { useState } from "react"
import { FaTheaterMasks } from "react-icons/fa";
import Header from './components/Header';
import Tasks from './components/Tasks'

const App = () => {

  const [tasks, setTasks] = useState([

    {
        id: 1,
        text: 'Dr. Appointment',
        day: 'Feb. 24 at 12:00 PM',
        reminder: false,
    },

    {
        id: 2,
        text: "Meeting",
        day: 'Feb. 23 at 2:00 PM',
        reminder: true,
    },

    {
        id: 3,
        text: 'Interview',
        day: 'Feb. 23 at 4:00 PM',
        reminder: true,
    },
])

// delete Task.
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
