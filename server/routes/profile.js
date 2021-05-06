const router = require('express').Router();
// const profileController = require('../controllers/profile');
const authorization = require('../middleware/authorization')
const { Users } = require('../models')

router.get('/profile', authorization, async (req, res) => {
    try {
        const user = await Users.findOne({
            where: {
                user_id: req.user
            }
        });

        res.json(user);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error");
    }
});

module.exports = router;