const Order =  require('../models/Order');
const DOMPurify = require('isomorphic-dompurify');

const index = (req, res) => {
  Order.find().then(result => {
    res.send(result);
  })
  .catch(err => console.log(err));
}

const indexOne = (req, res) => {
  Order.find({name: req.params.name, phone: req.params.phone}).then(order => {
    res.send(order);
  })
}

const post = async (req, res) => {
  let name = DOMPurify.sanitize(req.body.name);
  let phone = DOMPurify.sanitize(req.body.phone);
  let address = DOMPurify.sanitize(req.body.address);
  let reviewed = req.body.reviewed;
  let completed = req.body.completed;
  let products = req.body.products;
  const order = new Order({
    name,
    phone,
    address,
    reviewed,
    completed,
    products
  })
  
  try {
    const newOrder = await order.save();
    return res.status(201).json({
      success: true,
      Order: newOrder
    });
  } catch (err) {
    return console.log(err);
  }
};

const  update = (req, res) => {
    const order = Order.find({_id:req.params.id})

    order.updateOne({$set: req.body})
    .then((updatedOrder) => {
      return res.status(201).json({
        success: true,
        Order: updatedOrder,
      })
    }).catch(err => console.log(err))
}

const destroy = (req,res) => {
  const id = req.params.id;
  Order.findByIdAndRemove(id)
    .then((result) => {
      res.send('Deleted Successfully')
    })
    .catch((err) => console.log(err));
};

module.exports = {
  index,
  indexOne,
  post,
  update,
  destroy
}

