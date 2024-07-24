import { PrismaClient } from "@prisma/client";
import TweetCount from "./component/TweetCount";


const prisma = new PrismaClient();

export default async function Home() {
  const postDB = await prisma.user.findMany({take:5, orderBy:{
    id: 'desc'
  }})
  
 return(
  <main className="min-w-full min-h-screen bg-slate-200 flex flex-col items-center content-center p-6">
    <TweetCount></TweetCount>
    <div className="mt-6 flex flex-col gap-6">
      <h1 className="uppercase tracking-wide font-extrabold">Trending Tweet!</h1>
        {
          postDB.map((post)=>{
            return (
              <div className="min-h-[5vh] w-[80vw] rounded-md flex gap-4 bg-slate-100 p-4" key={post.id}>
                <h1>{post.id}</h1>
                <h5>{post.tweet}</h5>
              </div>
            )
          })
        }
      </div>
  </main>
 );
}
