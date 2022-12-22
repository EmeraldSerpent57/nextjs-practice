// /api/new-meetup
// POST /api/new-meetup will trigger only 

function handler(req, res) {
        //this is used to find out what kind of request was sent
    if (req.method === 'POST') {
        const data = req.body;        //contains the data of the incoming request

        const { title, image, address, description } = data;            //data expected to get on the incoming request body

        
    }
};

export default handler;