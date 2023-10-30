let helper = require("./helper");
 let list = helper.getAllUser();

console.log(list);

helper.getFirstUser(list);
helper.getLast(list)
helper.getUserByID(5)
helper.getUserByCompanyName("Hoeger LLC")
 helper.getUsersByCity("Aliyaview")
 helper.getStreet(2)
 helper.addNewUser({
    id:11,
    name: "Mohammed Kamal",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"}});
      
      //helper.getAllUser();
      

helper.updateUser(10 , "change email done");
helper.deleteUserById(11);
