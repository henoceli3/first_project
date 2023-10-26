import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port = process.env.PORT || 3000;
  await app
    .listen(port)
    .then(() => {
      console.log(`Application is running on: http://localhost:${port}`);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
bootstrap();
