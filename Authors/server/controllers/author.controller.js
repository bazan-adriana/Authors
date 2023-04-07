const Author = require('../models/author.model');

exports.getAllAuthors = (req, res) => {
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.status(400).json(err));
};

exports.addAuthor = (req, res) => {
    Author.create(req.body)
        .then(createAuthor => res.json(createAuthor))
        .catch(err => res.status(400).json(err));
};

module.exports.getAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
};

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
};

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json(err));
};
