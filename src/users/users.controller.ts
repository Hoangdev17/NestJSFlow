import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UsePipes, UseFilters } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesGuard } from './guard/roles.guard';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { HttpErrorFilter } from './filter/http-exception.filter';
import { ValidationPipe } from './pipe/validation.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(RolesGuard)
  @UseInterceptors(LoggingInterceptor)
  @UsePipes(ValidationPipe)
  @UseFilters(HttpErrorFilter)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(RolesGuard)
  @UseInterceptors(LoggingInterceptor)
  @UsePipes(ValidationPipe)
  @UseFilters(HttpErrorFilter)
  @Post('/login')
  login(@Body() createUserDto: CreateUserDto) {
    return this.usersService.login(createUserDto);
  }
}
