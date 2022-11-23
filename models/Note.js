const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        maxlenght: [40, 'Title cannot be more that 40 character']
    },
    description: {
        type: String,
        required: true,
        maxlenght: [200, 'Discription cannot be more that 200 character']
    }

})

module.exports - mongoose.models.Note || mongoose.model('Note', NoteSchema);