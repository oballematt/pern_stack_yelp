// const { Users } = require('../models');
// const authorization = require('../middleware/authorization')

// module.exports = {

//         getVerifiedUser: async (req, res) => {

//             try {
                
//                 const user = await Users.findOne({
//                     where: {
//                         user_id: authorization.req.user
//                     }
//                 });
    
//                 return res.json(user)

//             } catch (error) {
                
//                 console.error(error.message);
//                 res.status(500).json("Server Error");
                
//             }
            
//         }
// };