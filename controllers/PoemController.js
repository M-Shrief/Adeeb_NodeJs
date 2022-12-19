const Poem =  require('../models/Poem');

const index = (req, res) => {
  Poem.find({}, {intro: 1, poet: 1, verses: 1}).then(result => {
    res.send(result)
  })
  .catch(err => console.log(err));
}

const indexWithPoet = (req, res) => {
  Poem.find({}, {intro: 1, poet: 1, verses: 1, reviewed: 1})
  .populate('poet', 'name').then(result => {
    res.send(result);
  })
  .catch(err => console.log(err));
};

const indexIntrosWithPoetName = (req, res) => {
  Poem.find({}, {intro: 1,poet: 1, reviewed:1},)
  .populate('poet', 'name').then(result => {
    res.send(result);
  })
  .catch(err => console.log(err));
};

const indexOneWithPoet = (req, res) => {
  Poem.find({_id: req.params.id}, {intro: 1, poet: 1, verses: 1, reviewed: 1})
  .populate('poet', ['name', 'bio', 'time_period']).then(poem => {
    res.send(poem[0]);    
  })
  .catch(err => console.log(err));
}

const post = (req, res) => {
  const poem = new Poem({
    intro: req.body.intro,
    poet: req.body.poet,
    verses: req.body.verses,
    reviewed: req.body.reviewed,
  });
  return poem.save()
  .then(newPoem => {
    return res.status(201).json({
      success: true,
      Poem: newPoem,
    })
  }).catch(err => console.log(err));
};

const update = (req, res) => {
  const poem = Poem.find({_id: req.params.id});

  poem.updateOne({$set: req.body})
  .then((updatedPoem) => {
    return res.status(201).json({
      success:true,
      Poem: updatedPoem
    })
  }).catch(err => console.log(err));
};
const destroy = (req, res) => {
  const id = req.params.id;
  Poem.findByIdAndRemove(id)
  .then(result => {
    res.send("deleted Successfully")
  })
  .catch(err => console.log(err));
};

module.exports = {
  index,
  indexWithPoet,
  indexIntrosWithPoetName,
  indexOneWithPoet,
  post,
  update,
  destroy
}