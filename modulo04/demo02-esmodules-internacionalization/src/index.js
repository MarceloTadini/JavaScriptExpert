import DraftLog from 'draftlog'
import chalk from 'chalk'
import chalkTable from 'chalk-table'
import readline from 'readline'

import database from './../database.json'
import Person from './person.js'

DraftLog(console).addLineListener(process.stdin)

const options = {
    leftPad: 2,
    columns: [
        { field: "id", name: chalk.cyan("ID")},
        { field: "vehicles", name: chalk.magenta("Vehicles")},
        { field: "kmTraveled", name: chalk.cyan("Km Traveled")},
        { field: "from", name: chalk.cyan("From")},
        { field: "to", name: chalk.cyan("to")},
    ]
}

const table = chalkTable(options, database.map(item => new Person(item).formatted())) //database.map traz a conjução e ao invés da vírgula
const print = console.log(table)

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('Qual é o seu nome', msg =>{
    console.log('msg', msg.toString())
})

