const Annotations = require("../models/AnnotattionData");

module.exports = {

  async read(req, res) {
    const annotationList = await Annotations.find();
    return res.json(annotationList);
  },

  async create(req, res) {
    const { title, notes, priority } = req.body;

    if (!notes || !title) {
      return res.status(400).json({ error: "A title or annotation is required"});
    }

    const annotationCreated = await Annotations.create({
      title,
      notes,
      priority
    });

    return res.json(annotationCreated)
  },

  async delete(req, res) {
    const { id } = req.params;

    const annotattionDeleted = await Annotations.findOneAndDelete({ _id: id});

    if (annotattionDeleted) {
      return res.json(annotattionDeleted);
    }

    return res.status(401).json({error: "No record found to delete!"})
  }
}
