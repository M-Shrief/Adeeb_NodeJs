const Poet = require('../models/Poet');
const Poem = require('../models/Poem');
const Prose = require('../models/Prose');
const ChosenVerse = require('../models/ChosenVerse');

const index = (req, res) => {
  Poet.find({}, {name: 1, time_period: 1}).then((result) => {
    res.send(result);
  })
  .catch(err => console.log(err));
}

const indexOneWithPoemsAndChosenVersesAndProses = (req, res) => {
  Poet.find({_id: req.params.id}, {name: 1, bio: 1, time_period: 1}).
  then(poet => {
    Poem.find({poet: req.params.id}, {intro: 1, reviewed: 1})
    .then(authoredPoems => {
      Prose.find({poet: req.params.id}, {tags: 1, qoute: 1})
      .then(authoredProses => {
        ChosenVerse.find({poet: req.params.id}, {reviewed: 1, tags: 1, verse: 1, poem: 1})
        .then(authoredChosenVerses => {
          res.send({details: poet[0], authoredPoems, authoredChosenVerses, authoredProses});
        })
      })
    })
  })
  .catch(err => console.log(err))
}


const post = async (req, res) => {
  const poet = new Poet({
    name: req.body.name,
    time_period: req.body.time_period,
    bio: req.body.bio,
    reviewed: req.body.reviewed
  });

  try {
    const newPoet = await poet
      .save();
    return res.status(201).json({
      success: true,
      Poet: newPoet,
    });
  } catch (err) {
    return console.log(err);
  }
}

const  update = (req, res) => {
    const poet = Poet.find({_id:req.params.id})

    poet.updateOne({$set: req.body})
    .then((updatedPoet) => {
      return res.status(201).json({
        success: true,
        Poet: updatedPoet,
      })
    }).catch(err => console.log(err))
}



const destroy = (req,res) => {
  const id = req.params.id;
  Poet.findByIdAndRemove(id)
    .then((result) => {
      res.send('Deleted Successfully')
    })
    .catch((err) => console.log(err))
}

module.exports = {
  index,
  indexOneWithPoemsAndChosenVersesAndProses,
  post,
  update,
  destroy
};