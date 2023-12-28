import prisma from "@/prisma/db";
import PostForm from "./postForm";
export default async function Posts() {
  const posts = await prisma.posts.findMany();
  const beutifyDate = (createdAt: Date) => {
    const date = new Date(createdAt);
    const yyyy = date.getFullYear();
    let mm: number | string = date.getMonth() + 1; // month is zero-based
    let dd: number | string = date.getDate();
    if (dd < 10) dd = `${0} + ${dd}`;
    if (mm < 10) mm = `${0} + ${mm}`;
    const formatted = dd + "/" + mm + "/" + yyyy;
    return formatted;
  };

  return (
    <div className="bg-black/10 min-h-screen">
      <PostForm />
      <div className="w-[24rem] mx-auto  mt-8">
        {posts.length > 0 ? (
          posts.reverse().map((post) => (
            <div
              key={post.id}
              className="  border p-5  rounded-lg mb-4 bg-white"
            >
              <p className="text-gray-800">{post.status}</p>
              <span className="mt-2 block text-blue-500 font-medium text-[0.8rem] text-right">
                {beutifyDate(post.createdAt)}
              </span>
            </div>
          ))
        ) : (
          <div>
            <p className="font-bold text-red-500 text-center">
              There is no post!😥
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
