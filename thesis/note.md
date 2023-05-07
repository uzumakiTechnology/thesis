getStaticProps

là một async function 
trong function này bạn có thể gọi đến API bên thứ 3 để lấy data 


export default function Home(props) { ... }

export async function getStaticProps() {
  // Lấy data từ bên ngoài (API, file, ...)
  const data = ...

  // Giá trị của props kia sẽ được truyền vào component Home
  return {
    props: ...
  }
}

Ở đây mình tạo 1 file pages/post/index , trong đó mình sẽ gọi dến API https://jsonplaceholder.typicode.com/posts để lấy ra data ở trong function getStaticProps, return ra 1 object props là posts: data, ở component PostList mình nhận props posts, đoạn này giống React bình thường thôi và dùng posts để render ra list posts.
import Link from 'next/link'

function PostList({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map(post => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default PostList

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  return {
    props: {
      posts: data
    }
  }
}
