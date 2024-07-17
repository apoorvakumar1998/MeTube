import React from 'react'
import { USER_AVATAR_URL } from '../utils/constants'


const comments = [
  {
    name: 'virat',
    comment: 'loren ipsumdjfn djfn jdnf jdnf j',
    replies: [
      {
        name: 'virat',
        comment: 'loren ipsumdjfn djfn jdnf jdnf j',
        replies: [
          {
            name: 'virat',
            comment: 'loren ipsumdjfn djfn jdnf jdnf j',
            replies: [
              {
                name: 'virat 1',
                comment: 'loren ipsumdjfn djfn jdnf jdnf j',
                replies: [
                ]
              },
              {
                name: 'virat 2',
                comment: 'loren ipsumdjfn djfn jdnf jdnf j',
                replies: [
                ]
              }
            ]
          },
          {
            name: 'virat',
            comment: 'loren ipsumdjfn djfn jdnf jdnf j',
            replies: [
              {
                name: 'virat',
                comment: 'loren ipsumdjfn djfn jdnf jdnf j',
                replies: [
                ]
              }
            ]
          },
          {
            name: 'virat',
            comment: 'loren ipsumdjfn djfn jdnf jdnf j',
            replies: [
              {
                name: 'virat',
                comment: 'loren ipsumdjfn djfn jdnf jdnf j',
                replies: [
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'virat',
    comment: 'loren ipsumdjfn djfn jdnf jdnf j',
    replies: [
      {
        name: 'virat',
        comment: 'loren ipsumdjfn djfn jdnf jdnf j',
        replies: [
          {
            name: 'virat',
            comment: 'loren ipsumdjfn djfn jdnf jdnf j',
            replies: [
              {
                name: 'virat',
                comment: 'loren ipsumdjfn djfn jdnf jdnf j',
                replies: [
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'virat',
    comment: 'loren ipsumdjfn djfn jdnf jdnf j',
    replies: [
      {
        name: 'virat',
        comment: 'loren ipsumdjfn djfn jdnf jdnf j',
        replies: [
          {
            name: 'virat',
            comment: 'loren ipsumdjfn djfn jdnf jdnf j',
            replies: [
              {
                name: 'virat',
                comment: 'loren ipsumdjfn djfn jdnf jdnf j',
                replies: [
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'virat',
    comment: 'loren ipsumdjfn djfn jdnf jdnf j',
    replies: [
      {
        name: 'virat',
        comment: 'loren ipsumdjfn djfn jdnf jdnf j',
        replies: [
        ]
      }
    ]
  },
  {
    name: 'virat',
    comment: 'loren ipsumdjfn djfn jdnf jdnf j',
    replies: [
      {
        name: 'virat',
        comment: 'loren ipsumdjfn djfn jdnf jdnf j',
        replies: [
          {
            name: 'virat',
            comment: 'loren ipsumdjfn djfn jdnf jdnf j',
            replies: [
              {
                name: 'virat',
                comment: 'loren ipsumdjfn djfn jdnf jdnf j',
                replies: [
                ]
              }
            ]
          },
          {
            name: 'virat',
            comment: 'loren ipsumdjfn djfn jdnf jdnf j',
            replies: [
              {
                name: 'virat',
                comment: 'loren ipsumdjfn djfn jdnf jdnf j',
                replies: [
                ]
              }
            ]
          },
          {
            name: 'virat',
            comment: 'loren ipsumdjfn djfn jdnf jdnf j',
            replies: [
              {
                name: 'virat',
                comment: 'loren ipsumdjfn djfn jdnf jdnf j',
                replies: [
                ]
              }
            ]
          },
          {
            name: 'virat',
            comment: 'loren ipsumdjfn djfn jdnf jdnf j',
            replies: [
              {
                name: 'virat',
                comment: 'loren ipsumdjfn djfn jdnf jdnf j',
                replies: [
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'virat',
    comment: 'loren ipsumdjfn djfn jdnf jdnf j',
    replies: [
      {
        name: 'virat',
        comment: 'loren ipsumdjfn djfn jdnf jdnf j',
        replies: [
        ]
      }
    ]
  },
  {
    name: 'virat',
    comment: 'loren ipsumdjfn djfn jdnf jdnf j',
    replies: [
      {
        name: 'virat',
        comment: 'loren ipsumdjfn djfn jdnf jdnf j',
        replies: [
        ]
      }
    ]
  },
  {
    name: 'virat',
    comment: 'loren ipsumdjfn djfn jdnf jdnf j',
    replies: [
      {
        name: 'virat',
        comment: 'loren ipsumdjfn djfn jdnf jdnf j',
        replies: [
        ]
      }
    ]
  },
  {
    name: 'virat',
    comment: 'loren ipsumdjfn djfn jdnf jdnf j',
    replies: [
      {
        name: 'virat',
        comment: 'loren ipsumdjfn djfn jdnf jdnf j',
        replies: [
        ]
      }
    ]
  }
]

const Comment = ({ comment }) => {
  return <div className='flex mb-2 bg-gray-200 p-4 rounded-xl shadow-sm'>
    <img className='h-8 w-8' alt='user-avatar' src={USER_AVATAR_URL} />
    <div className='ml-2'>
      <div> {comment.name}</div>
      <div> {comment.comment}</div>
    </div>
  </div>
}

const CommentsList = ({ comments }) => {
  return <div className='border border-t-4  rounded-lg'>
    {
      comments.map((comment, index) => {
        return (
          <>
            <Comment comment={comment} key={index} />
            <div className='ml-5'>
              <CommentsList comments={comment.replies} />
            </div>
          </>
        )
      })
    }
  </div>
}

const Comments = () => {
  return (
    <div>
      <div className='text-2xl font-bold my-2'>Comments:</div>
      <CommentsList comments={comments} />
    </div>
  )
}

export default Comments