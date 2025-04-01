export default class Employee {
    constructor(first_name, last_name, email, phone, photo, sectors = [], skills = []) {

        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.photo = photo;
        this.sectors = sectors;
        this.skills = skills;    
    }
}