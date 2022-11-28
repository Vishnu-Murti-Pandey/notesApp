import { Schema, model, models } from "mongoose";

const NoteSchema = new Schema({
    
    name: String,
    email: {
        type: String,
        required: true,
    }

})

const Note = models.Note || model('Note', NoteSchema)

export default Note;