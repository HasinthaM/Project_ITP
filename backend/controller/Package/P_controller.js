const { response } = require('../../app');
const Package = require('../../model/Package/P_model');

// Get packages
const getPackages = (req, res, next) => {
     Package.find()
          .then(response => {
               res.json({ response })
          })
          .catch(error => {
               res.json({ error })
          });
};

// Add package
const addPackage = (req, res, next) => {
     const package = new Package({
          pID: req.body.pID,
          province: req.body.province,
          packageName: req.body.packageName,
          places: req.body.places,
          meals: req.body.meals,
          activities: req.body.activities,
          accommodation: req.body.accommodation,
          price: req.body.price
     });

     package.save()
          .then(response => {
               res.json({ response })
          })
          .catch(error => {
               res.json({ error })
          });
}

// Edit package
const updatePackage = (req, res, next) => {
     const { pID, province, packageName, places, meals, activities, accommodation, price } = req.body;
     Package.updateOne({ pID: pID }, { $set: { province, packageName, places, meals, activities, accommodation, price } })
          .then(response => {
               res.json({ response })
          })
          .catch(error => {
               res.json({ error })
          });
}

// Delete package
const deletePackage = (req, res, next) => {
     const id = req.body.id;
     Package.deleteOne({ pID: id })
          .then(response => {
               res.json({ response })
          })
          .catch(error => {
               res.json({ error })
          });
}

exports.getPackages = getPackages;
exports.addPackage = addPackage;
exports.updatePackage = updatePackage;
exports.deletePackage = deletePackage;
