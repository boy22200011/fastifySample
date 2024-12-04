import { FastifyInstance } from 'fastify';
import { getUsers, createUser } from '../services/userService';

export async function userRoutes(fastify: FastifyInstance) {
  fastify.get('/users', async (request, reply) => {
    return getUsers();
  });

  fastify.post('/users', async (request:any, reply:any) => {
    const user = await createUser(request.body);
    reply.code(201).send(user);
  });
}