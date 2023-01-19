import User from '../models/user.js';

export const getAllUsers = async (req, res) => {
  const users = await User.findAll();

  res.status(200).json({ users });
};


export const getUserById = async (req, res) => {
    const user = await User.findByPk(req.params.userId);

    res.status(200).json({user})
}

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({user});
  }catch(err){
    res.status(500).json({err})
  }
}


export const deleteUser = async (req, res) => {
    try {
        const user = await User.destroy({
            where: {
                id: req.params.userId
            }
        })
        res.status(200).json({user})
    }catch(err){
        res.status(500).json({err})
    }
}

export const updateUser = async (req, res) => {
    try{
        const user = await User.update(req.body, {
            where:{
                id: req.params.userId
            }
        })
        res.status(200).json({user})
    }catch(err){
        res.status(500).json({err})
    }
}

// export const createUserTask = async (req, res) => {
//     try{
//         const task = await User.createUserTask(req.body, req.params.userId);
//         res.json({task})
//     }catch(err){
//         res.status(500).json({err})
//     }
// }