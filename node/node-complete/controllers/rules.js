import Rule from "../models/rules.js";

export const getAllRules = async (req, res) => {
  try {
    const rules = await Rule.findAll(req.body);
    res.status(200).json(rules);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getRulesByName = async (req, res) => {
  try {
    const rule = await Rule.findAll({
      where: {
        name: req.params.name,
      },
    });
    res.status(200).json(rule);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createRule = async (req, res) => {
  try {
    const rule = await Rule.create(req.body);
    res.status(200).json(rule);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateRule = async (req, res) => {
  try {
    const rule = await Rule.update(req.body, {
      where: {
        name: req.params.name,
      },
    });
    res.status(200).json(rule);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteRule = async (req, res) => {
  try {
    const rule = await Rule.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(rule);
  } catch (err) {
    res.status(500).json(err);
  }
};
