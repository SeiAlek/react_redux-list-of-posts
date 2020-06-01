import { Action } from 'redux';

const SET_COMMENTS = 'SET_COMMENTS';
const DELETE_COMMENT = 'DELETE_COMMENT';

type SetComments = Action<typeof SET_COMMENTS> & { comments: Comment[] };
type DeleteComment = Action<typeof DELETE_COMMENT> & { commentId: number };
type PossibleAction = SetComments | DeleteComment;


export const setComments = (comments: Comment[]): SetComments => ({
  type: SET_COMMENTS,
  comments,
});

export const deleteComment = (commentId: number): DeleteComment => ({
  type: DELETE_COMMENT,
  commentId,
});

const reducer = (comments = [], action: PossibleAction) => {
  switch (action.type) {
    case SET_COMMENTS:
      return action.comments;

    case DELETE_COMMENT:
      return comments.filter((comment: Comment) => comment.id !== action.commentId);

    default:
      return comments;
  }
};

export default reducer;
