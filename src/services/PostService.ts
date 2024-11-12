import { AppDataSource } from "../config/database";
import { Post } from "../entities/Post";

export class PostService {
  private postRepository = AppDataSource.getRepository(Post);

  async getAllPosts() {
    return this.postRepository.find({ relations: ["user"] });
  }

  async createPost(postData: Partial<Post>) {
    const post = this.postRepository.create(postData);
    return this.postRepository.save(post);
  }

  async getPostById(id: number) {
    return this.postRepository.findOne({ where: { id }, relations: ["user"] });
  }
}