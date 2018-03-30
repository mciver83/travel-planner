module.exports = {
  get: (req, res) => {
    const db = req.app.get("db");
    const { location_id } = req.params;
    db.get_categories({ location_id }).then(categories => {
      res.send(categories);
    });
  },

  create: (req, res) => {
    const db = req.app.get("db");
    const { location_id } = req.params;

    let categoryObj = { ...req.body, location_id };
    db.create_category(categoryObj).then(results => {
      res.send(results);
    });
  },

  delete: (req, res) => {
    const db = req.app.get('db')
    const { location_id, category_id } = req.params;

    db.delete_category({ category_id, location_id }).then(categories => {
      res.send(categories)
    })
  }
};
