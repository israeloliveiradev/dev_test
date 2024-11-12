import { Request, Response } from 'express';
import { PostService } from '../services/PostService';

export class PostController {
  private postService = new PostService();

  async getAllPosts(req: Request, res: Response) {
    try {
      const posts = await this.postService.getAllPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar posts" });
    }
  }

  async createPost(req: Request, res: Response) {
    try {
      const post = await this.postService.createPost(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar post" });
    }
  }

  async getPostById(req: Request, res: Response) {
    try {
      const post = await this.postService.getPostById(Number(req.params.id));
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ message: "Post não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar post" });
    }
  }
}