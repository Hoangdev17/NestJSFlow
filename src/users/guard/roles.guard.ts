import { Injectable, CanActivate, ExecutionContext, HttpException } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const {email, password, role} = request.body;
    
    if(!role || role !== 'admin') {
      throw new HttpException('Role is wrong', 400);
    }

    console.log('Go to roles guard');
    const user = {email, password, role }; 
    return user.role === 'admin';
  }
}
