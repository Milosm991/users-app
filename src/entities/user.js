class User {
    constructor(user) {
        this.name = user.name;
        this.id = user.id;
        this.email = user.email;
        this.city = user.address.city;
        this.street = user.address.street;
        this.username = user.username;
        this.phone = user.phone;
        this.website = user.website;
        this.company = user.company.name;
    }
}

export default User