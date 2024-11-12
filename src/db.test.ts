import axios from 'axios';

const testUser = {
  firstName: "João Silva",
  lastName: "Oliveira",
  email: "joão.doe@example.com"
};


let userId: number | null = null;

async function testCreateUser() {
  try {
    const response = await axios.post('http://localhost:3000/users', testUser);
    userId = response.data.id;
    console.log('User created successfully:', response.data);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

const testPost = {
  title: "Some message 3",
  description: "Some description 3",
  userId: null as number | null
};

async function testCreatePost() {

  testPost.userId = userId;

  try {
    const response = await axios.post('http://localhost:3000/posts', testPost);
    console.log('Post created successfully:', response.data);
  } catch (error) {
    console.error('Error creating post:', error);
  }
}

async function init() {
  await testCreateUser();
  await testCreatePost();
}

init();