const fs = require('fs')
const chalk = require('chalk')


const getNotes = function () {
    return "Your notes..."
}

const addNotes = function (title, body) {
    const notes = loadNotes();
    const duplicatenotes = notes.filter(function (note) {
        return note.title === title
    })
    const duplicateNotes = notes.find((note) => notes.title === title)
    debugger
    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes);
        console.log("note added successfully")
    } else {
        console.log("Already taken")
    }

}


const loadNotes = function () {


    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const data = dataBuffer.toString();
        return JSON.parse(data)

    } catch (e) {
        return []

    }


}
/* remove notes */
const removeNotes = function (title) {
    const removeNote = loadNotes(title);
    const filterNotes = removeNote.filter(function (filterNote){
        return filterNote.title !== title

    });

    if (removeNote.length > filterNotes.length){
        console.log(chalk.green.inverse("note is removed successfully!!!"))
        saveNotes(filterNotes);

    }else{
        console.log(chalk.red.inverse("note is not removed.Sorry!!!"))
    }


};

const saveNotes = function (notes) {
    const notesJson = JSON.stringify(notes);
    fs.writeFileSync("notes.json", notesJson);


}

const listNotes = function (){
    console.log(chalk.blue.inverse("Your notes!!!"))
    const notes = loadNotes();
    notes.forEach((note,index) => console.log(`${index + 1}.`+ note.title))
};

const readNotes = function(title){
    const notes = loadNotes();
    const noteTitle = notes.find((note) => note.title === title)
    if (noteTitle){
        console.log(chalk.blueBright.inverse(noteTitle.title))
        console.log(noteTitle.body)
    }
    else{
        console.log(chalk.red.inverse("Error!!!unable to find your note"))
    }

};

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}