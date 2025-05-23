import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

  private users: any[] = [{
    id: 1,
    name: 'hoang',
    email: 'hoang@gmail.com',
    password: '123456',
    role: 'admin',
  }];

  create(user: any) {
    const newUser = {
      id: this.users.length + 1,
      ...user,
    };
    this.users.push(newUser);
    return {
      message: 'User created successfully',
      user: newUser,
    };
  }

  login(user: CreateUserDto) {
    const foundUser = this.users.find((u) => u.email === user.email);
    
    if (!foundUser) {
      throw new HttpException('User not found', 404);
    }
    if (foundUser.password !== user.password) {
      return {
        message: 'Invalid password',
      };
    }

    return {
      message: 'Login successful',
      user: foundUser,
    };
  }
 
}
