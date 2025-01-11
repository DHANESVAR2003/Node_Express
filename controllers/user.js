import { v4 as uuidv4 } from 'uuid';

let users = [];


export const getUsers = (req, res) =>{

    res.send(users);
}


export const createUser = (req,res) =>{

    const user= req.body;


    users.push({  ...user, id:uuidv4()});

    res.send(`User with the name ${user.f_name} added to the database`);
}


export const getUser =(req,res) => {
    const {id}=req.params;
    const founduser = users.find((user) => user.id == id);
    res.send(founduser); 
}


export const deleteUser=(req,res) => {
    const {id} = req.params;
    users = users.filter((user) =>user.id !== id );
    res.send(`user with the id ${id} deleted from db`);
}


export const updateUser = (req,res) => {
    const {id} = req.params;
    const {f_name,l_name,age}= req.body;

    const user= users.find((user) => user.id == id);

    if(f_name){
        user.f_name=f_name;
    }
    if(l_name){
        user.l_name=l_name;
    }
    if(age){
        user.age=age;
    }

    res.send(`user with the ${id} has been updated`);


}

