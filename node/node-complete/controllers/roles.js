import Role from "../models/roles.js";

export const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll(req.body);
    res.status(200).json(roles);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getRolByName = async (req, res) => {
  try {
    const rol = await Role.findAll({
      where: {
        name: req.params.name,
      },
    });
    res.status(200).json(rol);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createRol = async (req, res) => {
  try {
    const rol = await Role.create(req.body);
    res.status(200).json(rol);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateRol = async (req, res) => {
  try {
    const rol = await Role.update(req.body, {
      where: {
        name: req.params.name,
      },
    });
    res.status(200).json(rol);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteRol = async (req, res) => {
  try {
    const rol = await Role.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(rol);
  } catch (err) {
    res.status(500).json(err);
  }
};
