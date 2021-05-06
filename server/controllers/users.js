const { Users } = require('../models');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator')

module.exports = {

    createUser: async (req, res) => {
        const { user_name, user_email, user_password } = req.body;

        try {

            const user = await Users.findAll({
                where: {
                    user_email
                }
            });

            if (user.length !== 0) {
                return res.status(401).send('User already exists');
            }

            const newUser = await Users.create({ user_name, user_email, user_password });

            const token = jwtGenerator(newUser.user_id);

            res.json({ token });

        } catch (error) {

            console.error(error.message);
            return res.status(500).json(error);
        }
    },

    loginUser: async (req, res) => {
        const { user_email, user_password } = req.body;

        try {

            const user = await Users.findAll({
                where: {
                    user_email: user_email
                }
            });

            if (user.length === 0) {
                return res.status(401).json("Email or Password is incorrect");
            };

            const userPassword = await Users.findOne({
                where: {
                    user_email
                }
            });

            const validPassword = await bcrypt.compare(user_password, userPassword.user_password);

            if (!validPassword) {
                return res.status(401).json("Email or Password is incorrect");
            };

            const token = jwtGenerator(user.user_id);

            res.json({ token });

        } catch (error) {

            console.error(error.message);
            res.status(500).send("Server Error");
        };
    },

    verifyUser: async (req, res) => {
        try {
           
            res.json(true)

        } catch (error) {

            console.error(error.message
                )
            res.status(500).send("Server Error")
        };
    }
}

