const { response } = require('../../app');
const Destination = require('../../model/Destination/model');

//get destination
const getDestination = (req, res, next) => {
    Destination.find()
        .then(response => {
            res.json({response})
        })
        .catch(error => {
            res.json({error})
        });
};

//add destination
const addDestination = (req, res, next) => {
    const destination = new Destination({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description
    });
    destination.save()
        .then(response => {
            res.json({response})
        })
        .catch(error => {
            res.json({error})
        });
}

//update destination
const updateDestination = (req, res, next) => {
    const {id, title, description} = req.body;
    Destination.updateOne({id: id}, {$set: {title: title}}, {$set: {description: description}})
        .then(response => {
            res.json({response})
        })
        .catch(error => {
            res.json({error})
        });
}

//delete destination
const deleteDestination = (req, res, next) => {
    const id = req.body.id;
    Destination.deleteOne({id :id})
        .then(response => {
            res.json({response})
        })
        .catch(error => {
            res.json({error})
        });
}


exports.getDestination = getDestination;
exports.addDestination = addDestination;
exports. updateDestination = updateDestination;
exports.deleteDestination = deleteDestination;