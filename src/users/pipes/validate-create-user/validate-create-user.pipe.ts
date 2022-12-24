import { ArgumentMetadata,HttpStatus, HttpException, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/users/controllers/users/dtos/createUsers.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log(value)
    console.log(metadata)
    const parseAgeToInt=parseInt(value.age.toString())
    if(isNaN(parseAgeToInt)){
      console.log("notanuber")
      throw new HttpException("InalidData",HttpStatus.BAD_REQUEST)
    }
     return{...value,parseAgeToInt}
}
}
