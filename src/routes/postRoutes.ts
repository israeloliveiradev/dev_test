import { Router } from 'express';
import { PostController } from '../controllers/PostController';

const router = Router();
const postController = new PostController();

router.get('/', postController.getAllPosts.bind(postController));
router.post('/', postController.createPost.bind(postController));
router.get('/:id', postController.getPostById.bind(postController));

export default router;