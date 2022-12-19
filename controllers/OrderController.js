const Order =  require('../models/Order');

const index = (req, res) => {
  Order.find().then(result => {
    res.send(result);
  })
  .catch(err => console.log(err));
}

const indexOne = (req, res) => {
  Order.find({_id: req.params.id}).then(order => {
    res.send(order);
  })
}

const post = async (req, res) => {
  const order = new Order({
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    print: req.body.print,
    reviewed: req.body.reviewed,
    textColor: req.body.textColor,
    textType: req.body.textType,
    backgroundColor: req.body.clothesColor,
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

