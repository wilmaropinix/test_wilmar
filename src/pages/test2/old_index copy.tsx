import React from 'react';

const TodoApp = () => {

    let tasks : Array<any> = []; // Creamos un arreglo de tareas de tipo any, osea que puede ser cualquier tipo de dato
    let newTask : string = ''; // Creamos una variable para almacenar la tarea nueva

    const handleInputChange = (event : any) => {
        newTask = event.target.value; // Obtenemos el valor del campo de texto de la tarea nueva
    }

    const addTask = () => {
        if (newTask.trim()) { // Verificamos que la tarea no esté vacía, Trim elimina los espacios en blanco al inicio y al final de la cadena
            tasks.push(newTask); // Agregamos la tarea al arreglo de tareas
            newTask = ''; // Limpiamos el campo de texto de la tarea nueva
            cleanInput(); // Limpiamos el campo de texto
            printTasks(); // Volvemos a imprimir las tareas
        }
    }

    const deleteTask = (index: number) => {
        tasks.splice(index, 1); // Eliminamos la tarea en la posición index, es decir, eliminamos la tarea seleccionada
        printTasks(); // Volvemos a imprimir las tareas
    }

    const printTasks = () => {
        let list : HTMLElement = document.getElementById('list') as HTMLElement; // Obtenemos el elemento con el id list, que es la lista de tareas
        list.innerHTML = ''; // Limpiamos la lista de tareas
        tasks.forEach((task, index) => { // Recorremos el arreglo de tareas, mostrando cada tarea en la lista, además de un botón para eliminarla, usando un forEach
            // el forEach recibe una función que recibe dos parámetros, el primer parámetro es el elemento del arreglo, en este caso la tarea, y el segundo parámetro es el índice del elemento en el arreglo
            let li = document.createElement('li'); // Creamos un elemento li
            li.innerHTML = `<strong>Tarea:</strong> ${task} `; // Agregamos la tarea
            let button = document.createElement('button'); // Creamos un elemento button
            button.innerHTML = 'Delete'; // Agregamos el texto Delete al botón
            button.onclick = () => deleteTask(index); // Agregamos un evento al botón, para que al hacer clic se elimine la tarea
            li.appendChild(button); // Agregamos el botón al elemento li
            list.appendChild(li); // Agregamos el elemento li a la lista
        });
    }

    const cleanInput = () => {
        let input : HTMLInputElement = document.getElementById('newTask') as HTMLInputElement; // Obtenemos el elemento con el id newTask, que es el campo de texto de la tarea nueva
        input.value = ''; // Limpiamos el campo de texto
    }

    return (
        <div>
            <h1>ToDo List</h1>
            <input
                type="text"
                id="newTask"
                onChange={handleInputChange}
            />
            <button onClick={addTask}>Add Task</button>
            <ul id="list">
            </ul>
        </div>
    );
}

export default TodoApp;
