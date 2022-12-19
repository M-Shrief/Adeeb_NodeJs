const Prose = require('../models/Prose');

const indexWithPoet = (req, res) => {
  Prose.find({}, {poet: 1, tags: 1, qoute: 1, reviewed: 1}).populate('poet', 'name').then(result => {
    res.send(result)
  })
  .catch(err => console.log(err));
}

const indexOneWithPoet = (req, res) => {
  Prose.find({_id: req.params.id}, {poet: 1, tags: 1, qoute: 1, reviewed: 1}).populate('poet', 'name').then(result => {
    res.send(result)
  })
  .catch(err => console.log(err));
}

const post = async (req, res) => {
  const prose = new Prose({
    poet: req.body.poet,
    tags: req.body.tags,
    qoute: req.body.qoute,
    reviewed: req.body.reviewed
  })

  try {
    const newProse = await prose.save();
    return res.status(201).json({
      success: true,
      Prose: newProse
    });
  } catch (err) {
    return console.log(err);
  }
};

const  update = (req, res) => {
  const prose = Prose.find({_id:req.params.id})

  prose.updateOne({$set: req.body})
  .then((updatedProse) => {
    return res.status(201).json({
      success: true,
      Prose: updatedProse,
    })
  }).catch(err => console.log(err))
};

const destroy = (req,res) => {
  const id = req.params.id;
  Prose.findByIdAndRemove(id)
    .then((result) => {
      res.send('Deleted Successfully')
    })
    .catch((err) => console.log(err));
};


module.exports = {
  indexWithPoet,
  indexOneWithPoet,
  post,
  update,
  destroy
}
