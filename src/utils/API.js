// This code is meant to serve as a mock fetch from an API.
import axios from "axios";


export default {

  getFakeUser: function(){
    return axios.post("/api/fakeuser")
  }

  logOut: function(){
    return axios.post("/api/logout")
  },

getUserID:function(){
  return axios.get("/api/user")
},
  
getRandom : function(){
return axios.get("/api/random");

},

   getUser : function(userName){
     return axios.get("/api/userByName")

   },

  signup : function(body){
    return axios.post("/api/signup",body)
  },
  login : function(body){
    return axios.post("/api/login",body)
  },

   createUserInfo:function(body){
     return axios.post ("/api/userinformation",body)
   }
     
}

// getAllEmployees: function() {
//   return axios.get("/api/employees");
// },

// getAllEmployeesPositionSort:function(){
//   return axios.get("/api/employeesPosition")
// },
// getAllEmployeesDateSort:function(){
//   return axios.get("/api/employeesDate")
// },

// getEmployee:function(newbody){
//   console.log("lls")
//   console.log(newbody)
//   return axios.post("/api/login", newbody);

// },
// getAllManagers: function() {
//   return axios.get("/api/managers/");
// },

// componentDidMount() {
//   axios.get('/auth/user').then(response => {
//     console.log(response.data)
//     if (!!response.data.user) {
//       console.log('THERE IS A USER')
//       this.setState({
//         loggedIn: true,
//         user: response.data.user
//       })
//     } else {
//       this.setState({
//         loggedIn: false,
//         user: null
//       })
//     }
//   })
// }

// _logout(event) {
//   event.preventDefault()
//   console.log('logging out')
//   axios.post('/auth/logout').then(response => {
//     console.log(response.data)
//     if (response.status === 200) {
//       this.setState({
//         loggedIn: false,
//         user: null
//       })
//     }
//   })
// }

// _login(username, password) {
//   axios
//     .post('/auth/login', {
//       username,
//       password
//     })
//     .then(response => {
//       console.log(response)
//       if (response.status === 200) {
//         // update the state
//         this.setState({
//           loggedIn: true,
//           user: response.data.user
//         })
//       }
//     })
// }