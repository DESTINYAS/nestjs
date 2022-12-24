import { Body, Controller, Get, Param, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { ParseBoolPipe, ParseIntPipe } from '@nestjs/common/pipes';
import { Request } from 'express';
import { Response } from 'express';
import { parse } from 'path/win32';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/serices/users/users.service';
import { CreateUserDto } from './dtos/createUsers.dto';

@Controller('users')
export class UsersController {
    constructor (private usersService:UsersService){}

    @Get()
    getUsers(){
        
        return this.usersService.fetchUsers()
    }
    @Get("posts")
    getUsersPosts(){
        return [{username:"DESTINYAS",email:"des@gmail.com",
                posts:[{
                    id:"1",
                    title:"post1"
                }   ]  }
    ]
    }
    @Get("comments")
    getUsersPostsComment(){
        return [{
            id:"1",
            title:"post1",
            comment:"blaBla"
        }   ]
    }
    @Post("create")
    @UsePipes(new ValidationPipe())
    CreateUser(@Body(ValidateCreateUserPipe)userData:CreateUserDto){
        console.log(typeof userData.age);

        return this.usersService.createUser(userData)

    }
    @Get(":id")
    // validating route params
    getUser(@Param("id",ParseIntPipe) id:number){
        console.log(id)
        return this.usersService.fetchUserById(id)

    }
}
