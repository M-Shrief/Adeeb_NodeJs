const ChosenVerse = require('../models/ChosenVerse');

const index = (req, res) => {
  ChosenVerse.find({}, {reviewed: 1, tags: 1, verse: 1, poet: 1, poem: 1}).then(result => {
    res.send(result);
  })
  .catch(err => console.log(err));
};

const indexWithPoet = (req, res) => {
  ChosenVerse.find({}, {reviewed: 1, tags: 1, verse: 1,  poet: 1, poem: 1}).populate('poet', 'name').then(result => {
    res.send(result);
  })
  .catch(err => console.log(err));
};

const indexOneWithPoet = (req, res) => {
  ChosenVerse.find({_id: req.params.id}, {reviewed: 1, tags: 1, verse: 1}).populate('poet', 'name').then(result => {
    res.send(result);
  })
  .catch(err => console.log(err));
};


const post = async (req, res) => {
  const chosenVerse = new ChosenVerse({
    poet: req.body.poet,
    poem: req.body.poem,
    tags: req.body.tags,
    verse: req.body.verse,
    reviewed: req.body.reviewed,
  })
  
  try {
    const newChoseVerse = await chosenVerse.save();
    return res.status(201).json({
      success: true,
      ChosenVerse: newChoseVerse
    });
  } catch (err) {
    return console.log(err);
  }
};

const update = (req, res) => {
  const chosenVerse = ChosenVerse.find({_id: req.params.id});

  chosenVerse.updateOne({$set: req.body})
  .then((updatedChosenVerse) => {
    return res.status(201).json({
      success:true,
      ChosenVerse: updatedChosenVerse
    })
  }).catch(err => console.log(err));
}

const destroy =  (req, res) => {
  const id =  req.params.id;
  ChosenVerse.findByIdAndRemove(id)
  .then(result => {
    res.send("deleted Successfully")
  })
  .catch(err => console.log(err));
}
module.exports = {
  index,
  indexWithPoet,
  indexOneWithPoet,
  post,
  update,
  destroy
}