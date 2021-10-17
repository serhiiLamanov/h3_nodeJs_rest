class mock {
   static #notes= [{id:1, name:"Shopping list", created:"2021-04-05", category:0, content:"Tomatoes, bread", archived:false},
            {id:2, name:"The theory of evolution", created:"2021-04-27", category:1, content:"The evolution ", archived:false},
            {id:3, name:"New Feature", created:"2021-05-05", category:2, content:"Implement new feattures till 3/5/2021. Control review 5/5/2021", archived:false},
            {id:4, name:"William Gaddis", created:"2021-05-07", category:3, content:"Power doesn't corrupt people; people corrupt power", archived:false},
            {id:5, name:"Books", created:"2021-05-15", category:0, content:"The Lean Startup",archived:false},
            {id:6, name:"Dentist appointment", created:"2021-05-01", category:0, content:"I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",archived:true},
            {id:7, name:"Minority Report", created:"2021-06-06", category:1, content:"Bla bla bla",archived:true}
           ]
    
    static get notes(){
        return this.#notes
    }
    static addNote(note){
        console.log("addNote", note)
        note.id = Math.max(...this.#notes.map(note => note.id)) + 1
        this.#notes.push(note)
        return note
    }
    static getNote(id){
        return this.#notes[this.#findIndex(id)]
    }
    static removeNote(id){
        this.#notes.splice(this.#findIndex(id), 1)
    }
    static editNote(id,note){
        return Object.assign(this.#notes[this.#findIndex(id)], note)
    }

    static #findIndex(id){
        const i = this.#notes.findIndex(note => note.id == id)
        if(i === -1){
            const error = new Error("wrong id")
            error.status = 404
            throw error
        }
        return i
    }
}

module.exports = mock