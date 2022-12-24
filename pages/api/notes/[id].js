import dbConnect from '../../../utils/dbConnect';
import Note from '../../../models/Note';

export default async (req, res) => {

    console.log('Connecting to Mongo')
    await dbConnect()

    console.log('Connected to Mongo')
    console.log('Creating Docs')

    const { query: { id }, method } = req;

    switch (method) {
        case 'GET':
            try {
                const note = await Note.findById(id);

                if (!note) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: note });
            } catch (error) {
                console.log(error)
                res.json({error})
            }
            break;
        case 'PUT':
            try {
                const note = await Note.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!note) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: note });
            } catch (error) {
                console.log(error)
                res.json({error})
            }
            break;
        case 'DELETE':
            try {
                const deletedNote = await Note.deleteOne({ _id: id });

                if (!deletedNote) {
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
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



