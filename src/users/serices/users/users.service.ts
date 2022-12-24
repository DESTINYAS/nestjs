import { Injectable } from '@nestjs/common';
import { createUserType } from 'src/utils/type';

@Injectable()
export class UsersService {
    private fakeUsers = [
        {userna:"Anson",phone:"0005"},
        {userna:"Fati",phone:"0008"},
        {userna:"Rooney",phone:"0009"},
        {userna:"Asu",phone:"0007"}
    ]
    fetchUsers(){ 
        return this.fakeUsers
    }
    createUser(userDetails:createUserType){
        this.fakeUsers.push(userDetails)
        return;
    }
    fetchUserById(id:number){
        return {id,userna:"Ason"}
    }
}
