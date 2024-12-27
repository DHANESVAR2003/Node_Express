import express from 'express';

const router = express.Router();

const users = [
    {
        f_name:"java",
        l_name:"dravid",
        age:25
    },
    {
        f_name:"java",
        l_name:"dravid",
        age:25
    }
]

router.get('/',(req, res) =>{

    res.send(users);
});

router.post('/', (req,res) =>{

    const user= req.body;

    users.push(user);

    res.send(`User with the name ${user.f_name} added to the database`);
});

export default router;