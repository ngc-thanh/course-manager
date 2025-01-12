import { Module, Logger } from '@nestjs/common';
import { AuthService } from './service';
import { AccountModule } from '../account';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local';
import { JwtModule } from '@nestjs/jwt';
import { configService } from '../../config/config.service';
import { JwtStrategy } from './strategies/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/model';
import Role from '../role/model';
import { AuthController } from './controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role]),
    AccountModule,
    PassportModule,
    JwtModule.register(configService.getJwtConfig()),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, Logger],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
