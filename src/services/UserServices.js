import User from '../entities/user.js';

const url = 'https://jsonplaceholder.typicode.com/users';

class UserServices {
    
   static getAllUsers = () => {
        return (
            fetch(url)
            .then(response => response.json())
            .then(users => users.map(user => new User(user)))
        )}

    static getSingleUser = (id) => {
        return(
            fetch(`${url}/${id}`)
            .then(response => response.json())
            .then(user => new User(user))
        )}

        static createUser = (user) => {
            return (
                fetch(url, {
                    method: "POST",
                    body: JSON.stringify(user)
                }).then((response) => {
                    if(response.status === 201){
                        return true
                    } else {
                        return false
                    }
                })
            )
        }

        static deleteUser = (id) => {
            return (
                fetch(`${url}/${id}`, {
                    method: 'DELETE'
                }).then((response) => {
                    if(response.status === 200){
                        return true
                    }else{
                        return false
                    }
                })
            )
        }

        static editUser = (data, id) => {
            return (
               fetch(`${url}/${id}`, {
                    method: "PATCH",
                    body: JSON.stringify(data)
                }).then((response) => {
                    if (response.status === 200){
                        return true
                    }else{
                        return false
                    }
                })
            )
        }
}

export default UserServices
