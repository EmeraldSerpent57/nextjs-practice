import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup will trigger only 
// using MongoDB

async function handler(req, res) {
        //this is used to find out what kind of request was sent
    if (req.method === 'POST') {
        const data = req.body;        //contains the data of the incoming request

        const { title, image, address, description } = data;            //data expected to get on the incoming request body

        const client = await MongoClient.connect('mongodb+srv://A57c1992:A57c1992@cluster0.esg3msz.mongodb.net/meetups?retryWrites=true&w=majority');       //never run this on the client side!!!
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);          //this will insert one new document in to this collection

        //can add error handling with try/catch

        client.close();         //will close database when we are done

        res.status(201).json({ message: 'Meetup inserted!' });                //something was inserted successfully
    }
};

export default handler;