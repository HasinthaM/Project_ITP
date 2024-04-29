const express = require('express');
const Ticket = require('../model/Ticket/ticketModel');


const router = express.Router();

// Route for saving a new Ticket
router.post('/', async (request, response) => {
    try {
        
        if (!request.body.t_id || !request.body.name || !request.body.email || !request.body.issueType || !request.body.issue) {
            return response.status(400).send({
                message: 'Send all required fields: t_id ,name, email, issueType, issue',
            });
        }

        const newTicket = {

            t_id: request.body.t_id,
            name: request.body.name,
            email: request.body.email,
            issueType: request.body.issueType,
            issue: request.body.issue,
            
        };

        

        // Create a new Ticket entry in the database
        const ticket = await Ticket.create(newTicket);

        return response.status(201).send(ticket);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});



// Route for Get All Ticket from database
router.get('/', async (request, response) => {
    try {
        const ticket = await Ticket.find({}).sort({ createdAt: -1 });

        return response.status(200).json({
            count: ticket.length,
            data: ticket,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});
// router for get one ticket
router.get('/:_id', async (request, response) => {
    try {
        const { _id } = request.params;

        const ticket = await Ticket.findById({ _id });
        return response.status(200).json(t)
    }
    catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

//Route the update

router.put('/:_id', async (request, response) => {
    try { 
        if (!request.body.name || !request.body.email || !request.body.issueType || !request.body.issue) {
            return response.status(400).send({
                message: 'Send all required fields: name, email, issueType, issue',
            });
        }

        const { _id } = request.params;

        const newTicket = {
            name: request.body.name,
            email: request.body.email,
            issueType: request.body.issueType,
            issue: request.body.issue,
           
        };

        

        const result = await Ticket.findByIdAndUpdate(_id, newTicket, { new: true });

        if (!result) {
            return response.status(404).json({ message: 'Ticket not found' });
        }

        return response.status(200).send({ message: 'Ticket updated successfully', result });
    } catch (error) {
        console.error(error.message);
        response.status(500).send({ message: error.message });
    }
});


router.delete('/:_id', async (request, response) => {
    try {

        const { _id } = request.params;

        const result = await Ticket.findByIdAndDelete(_id);

        if (!result) {

            return response.status(404).json({ message: 'Ticket record not found' })

        }

        return response.status(200).send({ message: 'Ticket deleted successfully' })


    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

module.exports = router;