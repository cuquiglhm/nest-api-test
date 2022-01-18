import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './app/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        envFilePath: '.env'
      })],
      inject: [ConfigService],
      useFactory: (configService: ConfigService)=> ({
        type: 'mariadb',
        host: configService.get('DB_HOST', 'localhost'),
        port: Number(configService.get('DB_PORT', 3306)),
        username: configService.get('DB_USER', 'root'),
        password: configService.get('DB_PASS', 'pass'),
        database: configService.get('DB_NAME', 'database'),
        entities: [ 'dist/**/*.entity{.ts,.js}'],
        synchronize: true,
      })
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
