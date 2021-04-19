import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { Role } from "./roles.model";

@Controller('roles')
export class RolesController {

  constructor(private rolesService: RolesService) {
  }

  @ApiOperation({summary:'Create role'})
  @ApiResponse({status:200,type:Role})
  @Post()
  create(@Body() roleDto: CreateRoleDto){
    this.rolesService.createRole(roleDto);
  }

  @ApiOperation({summary:'Get role by value'})
  @ApiResponse({status:200,type:[Role]})
  @Get('/:value')
  getByValue(@Param('value') value:string){
    return this.rolesService.getRoleByValue(value);
  }
}
