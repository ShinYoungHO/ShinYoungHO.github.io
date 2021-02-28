---
title : "note_App"
excerpt : "node.js"

categories:
  - Blog
tags:
  - [Blog, toy project, node.js]
last_modified_at: 2021-02-28T08:06:00-05:00
---

![img](/assets/images/Udemy/noteApp.png)


```js
//////////app.js//////////

const validator = require('validator');
const yargs = require('yargs')
const chalk = require('chalk');
const notes = require('./notes.js')

yargs.version('1.1.0');



//Add command
yargs.command({
    command : 'Add',
    describe :'Add new note',
    builder: {
        title:{//옵션 1
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body: {//옵션 2
            describe:'note body',
            demandOption:false,//body 내용이 없어도 출력해줌
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body);
    }
})

//remove command
yargs.command({
    command:'remove',
    describe:'remove selected note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:'Note body',
            demandOption:false,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

//list command
yargs.command({
    command:'list',
    describe:'list all notes',
    handler(){
        console.log('here is your lists of notes!')
        notes.listNote();
    }
})

//read command
yargs.command({
    command:'read',
    describe:'read selected note',
    builder:{
        title:{
            describe:'title of note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);

    }
})
yargs.parse()//parse all of configuration details

```

```js
/////////note.js//////////
const fs = require('fs')
const chalk = require('chalk');

const getNote =  () => {
    return 'success!'
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notejson.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return [];
    }
   
}

const saveNote =  (notes) => {
    const notesString = JSON.stringify(notes);
    fs.writeFileSync('notejson.json', notesString);
}



const addNote = (title,body) => {
    const notes = loadNotes();
    const duplicatedNotes = notes.find(notes=> notes.title === title )
    if(!duplicatedNotes){
        if(!body){
            notes.push({
                "title": title,
                "body": ""
            })
        }else{
            notes.push({
                "title": title,
                "body":body
            })
        }        
        saveNote(notes);
        console.log('note added!')
    }else{
        console.log('your title already exist!')
    }

}

const removeNote = (title) => {
    const notes = loadNotes();
    const duplicatedNotes = notes.filter(notes=>{
        return notes.title !== title;
    })
    if(duplicatedNotes.length !== notes.length){
        saveNote(duplicatedNotes);
        console.log(chalk.green.inverse('matching note removed!'))
    }else{
        console.log(chalk.red.inverse(`there's no notes that matches with your submited title.`))
    }
}

const listNote = () => {
    const notes = loadNotes();
    if(notes.length > 0){
        console.log(chalk.green.inverse('title of your notes'))
        notes.forEach((el,idx)=>{
            console.log(`${idx+1} : ${el.title}`);
        })
    }else{
        console.log(chalk.red.inverse('there is no notes'))
    }
}

const readNote = (title) =>{
    const notes = loadNotes();
    const dupli = notes.find(note => note.title === title );
    if(dupli){
        console.log(chalk.blue.inverse(dupli.title)+'\n'+dupli.body)
    }
    else{
        console.log(chalk.red.inverse('please check your notes title'))
    }
}

module.exports = {
    getNote,
    addNote,
    removeNote,
    listNote,
    readNote,

}


```