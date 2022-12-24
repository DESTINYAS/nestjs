
import { IsEmail, IsNotEmpty ,isNumber} from 'class-validator'

export class CreateUserDto {
  @IsEmail()
  userna: string;

  @IsNotEmpty()
  phone: string;
  @IsNotEmpty()
  age:number;

}