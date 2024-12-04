import { FastifyReply, FastifyRequest } from 'fastify';
import { getUserList } from '../services/userService';

export async function getUsers(request: FastifyRequest, reply: FastifyReply) {
  try {
    const users = await getUserList();
    return reply.send(users);
  } catch (error) {
    return reply.status(500).send({ error: 'Internal Server Error' });
  }
}
