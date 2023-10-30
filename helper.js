let fs =require("fs");
let resp =fs.readFileSync("./users.json" , "utf8");
let list =JSON.parse(resp)


const getAllUser = () => {
  console.log(list);
};

const getFirstUser = () => {
  //console.log(list.find(el=> el.id>=1));
  console.log(list[0]);
};


const getLast = () => {
  console.log(list[list.length-1]);
};


const getUserByID = (userID) => {
  console.log(list.find(el=>el.id===userID));
};


const getUserByCompanyName = (companyName) => {
  console.log(list.find(el=>el.company.name===companyName));
};


const getUsersByCity = (city) => {
  console.log(list.find(el=>el.address.city===city));
};


const getStreet = (userID) => {
  console.log("street of id ->" ,userID , "is" ,list.filter(el=>el.id===userID)[0].address.street );
};


const addNewUser = (userObject) => {
  let new_user=list;
  new_user.push(userObject);
  return new_user;
};


const updateUser = (userID , new_email) => {
  let user_edit =list.find(el=>el.id===userID)
  user_edit.email = new_email
  console.log(list);
};


const deleteUserById = (userID) => {
  console.log(list.filter(el=>el.id!==userID));
};

module.exports = {
  getAllUser,
  getFirstUser,
  getLast,
  getUserByID,
  getUserByCompanyName,
  getUsersByCity,
  getStreet,
  addNewUser,
  updateUser,
  deleteUserById,
};
