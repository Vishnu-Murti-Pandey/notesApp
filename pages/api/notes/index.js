import dbConnect from "../../../Utils/dbConnect";
import Note from '../../../models/Note'

export default async (req, res) => {

        console.log('Connecting to Mongo')
        await dbConnect()

        console.log('Connected to Mongo')
        console.log('Creating Docs')

        const {method} = req;

    switch(method) {
        case 'GET':
            try {
                const notes = await Note.find({});
                res.status(200).json({success: true, data: notes})
            } catch(error) {
                console.log(error)
                res.json({error})
            }
            break;
        case 'POST':
            try {
                const note = await Note.create(req.body)
                console.log('Created Docs')
                res.json({note})
            } catch(error) {
                console.log(error)
                res.json({error})
            }
            break;
        default:
            console.log(error)
            res.json({error})
            break;
    }
}

