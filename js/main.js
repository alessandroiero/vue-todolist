Descrizione:
// Rifare l’esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus
// oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa).

`use strict`
const { createApp } = Vue

createApp({
    data() {
        return {
            newTodo: '',
            searchKey: '',
            todoList: [
                {
                    "text": "Riscaldarsi",
                    "done": true
                },
                {
                    "text": "Allenare Pettorali",
                    "done": false
                },
                {
                    "text": "Allenare le gambe",
                    "done": false
                },
                {
                    "text": "Allenare deltoidi",
                    "done": false
                },
            ]
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
            const newItem = {
                text: this.newTodo,
                done: false
            }
            this.todoList.push(newItem);
        }
            this.newTodo = '';
        },
        delTodo(elcancellato) {
            // console.log('cancellato');
            this.todoList.splice(elcancellato, 1);
        },
        selected(elementToToggle) {
            this.todoList[elementToToggle].done = !this.todoList[elementToToggle].done;
        },
    }
}).mount('#app')