import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";

@ApiTags('Users')
@Controller("users")
export class UsersController {

  constructor(private usersService: UsersService) {
  }

  @ApiOperation({summary:'Create users'})
  @ApiResponse({status:200,type:User})
  @Post()
  create(@Body() userDto: CreateUserDto){
    this.usersService.createUser(userDto);
  }

  @ApiOperation({summary:'Get all users'})
  @ApiResponse({status:200,type:[User]})
  @Get()
  getAll(){
    return this.usersService.getAllUsers();
  }
}
