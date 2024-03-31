const { response } = require('../../app');
const Employee = require('../../model/Employee/E_model');

//getuse controller functions 
const getEmployee = (req, res, next) => {
     Employee.find()  //promis
          .then(response => {
               res.json({ response})
          })
          .catch(error => {
               res.json({error})
          });

};

//add Employee
const addEmployee = (req, res, next) => {
     const Employee = new Employee({
          id: req.body.id,
          name: req.body.name,
     });
     Employee.save()
          .then(response => {
               res.json({ response})
          })
          .catch(error => {
               res.json({error})
          });
}

//edit Employee
const updateEmployee =(req, res, next) => {
     const {id, name} = req.body;
     Employee.updateOne({id: id}, {$set: {name:name}})
          .then(response => {
               res.json({ response})
          })
          .catch(error => {
               res.json({error})
          });
}

//delete Employee
const deleteEmployee = (req, res, next) => {
     const id = req.body.id;
     Employee.deleteOne({ id: id})
          .then(response => {
               res.json({ response})
          })
          .catch(error => {
               res.json({error})
          });
}



exports.getEmployee = getEmployee;
exports.addEmployee = addEmployee;
exports.updateEmployee = updateEmployee;
exports.deleteEmployee = deleteEmployee;