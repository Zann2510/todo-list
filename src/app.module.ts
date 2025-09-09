import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { SiswaModule } from './siswa/siswa.module';

@Module({
  imports: [TodosModule, SiswaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
