import { Action } from 'redux';

const SET_POSTS = 'SET_POSTS';

type SetPost = Action<typeof SET_POSTS> & { posts: Post[] };

export const setPosts = (posts: Post[]): SetPost => ({
  type: SET_POSTS,
  posts,
});

const reducer = (posts = [], action: SetPost) => {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;

    default:
      return posts;
  }
};

export default reducer;
