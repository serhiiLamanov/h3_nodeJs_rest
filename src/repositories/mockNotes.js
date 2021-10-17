class mock {
   static #notes= [{name:"Shopping list", created:"2021-04-05", category:0, content:"Tomatoes, bread", archived:false},
            {name:"The theory of evolution", created:"2021-04-27", category:1, content:"The evolution ", archived:false},
            {name:"New Feature", created:"2021-05-05", category:2, content:"Implement new feattures till 3/5/2021. Control review 5/5/2021", archived:false},
            {name:"William Gaddis", created:"2021-05-07", category:3, content:"Power doesn't corrupt people; people corrupt power", archived:false},
            {name:"Books", created:"2021-05-15", category:0, content:"The Lean Startup",archived:false},
            {name:"Dentist appointment", created:"2021-05-01", category:0, content:"I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",archived:true},
            {name:"Minority Report", created:"2021-06-06", category:1, content:"Bla bla bla",archived:true}
           ]
    
    static get notes(){
        return this.#notes
    }
    static addNote(note){
        console.log("addNote", note)
        this.#notes.push(note)
    }
    static getNote(i){
        this.#checkIndex(i)
        console.log("getNote",i," =",this.#notes[i])
        return this.#notes[i]
    }
    static removeNote(i){
        this.#checkIndex(i)
        console.log("removeNote",i)
        this.#notes.splice(i, 1)
    }
    static editNote(i,note){
        this.#checkIndex(i)
        console.log("editNote  i=",i,"  old note=",this.#notes[i],"  new note=",note)
        return Object.assign(this.#notes[i], note)
    }

    static #checkIndex(i){
        if(i<0 ||i >= this.#notes.length){
            const error = new Error("bad index")
            error.status = 404
            throw error
        }
    }
}

module.exports = mock