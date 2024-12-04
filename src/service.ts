import Fastify from 'fastify';
import { userRoutes } from './api/users/routes/userRoutes';

export const createServer = () => {
  const app = Fastify();

  // 註冊路由
  app.register(userRoutes);

  return app;
};
