import React from 'react'
import '../components/AddNew.css'

export default function AddNew() {
  return (
    <>
    <dialog id="addTaskDialog">
    <h1>Add new Task</h1>
    <form id="taskForm">
        <div class="form-group">
            <label for="task1">Name of the Task</label>
            <input type="text" id="task1" name="task" required></input>
        </div>

        <div class="form-group-half">
            <div class="form-group">
                <label for="start_date">Start Date:</label>
                <input type="date" id="start_date" name="start_date" required></input>
            </div>

            <div class="form-group">
                <label for="deadline">Deadline:</label>
                <input type="date" id="deadline" name="deadline" required></input>
            </div>
        </div>

        <div class="form-group">
            <label for="category">Status</label>
            <select id="category" name="category" required>
                <option value="option1">Todo</option>
                <option value="option2">InProgress</option>
                <option value="option3">Completed</option>
            </select>
        </div>
        <div class="button-container">
            <button type="submit" class="add-button">Add</button>
            <button type="button" class="cancel-button" onclick="closeDialog()">Cancel</button>
        </div>
    </form>
</dialog>
    </>
  )
}
