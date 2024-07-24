"use client"
import { Button } from '@/components/ui/button';
import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const prisma = new PrismaClient();


const postTweet = async (tweet : string)=>{
    if(tweet.length<=0){
      return
    }
    const res = await fetch("http://localhost:3000/api/users",{
      method:"POST",
      body:JSON.stringify({tweet})
  })
  if(res.status!=200){
      return
  }
  }


const TweetCount = () => {
  const router = useRouter();
const [activeTweet,setActiveTweet] = useState("Enter your tweet!");
  return(
    <main className="min-w-full bg-slate-200 flex flex-col items-center content-center p-6">
      <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-wide">TweetCountz</h1>
      <textarea className="rounded-md p-2 mt-8 text-slate-900" value={activeTweet} onChange={(e)=>{
        if (e.target.value.length <= 240) {
          setActiveTweet(e.target.value);
        }
  
        }}>
  
      </textarea>
      <h3 className="mt-4 text-slate-800">Character count : {activeTweet.length}</h3>
      <h3 className="mt-4 text-slate-800">Character remaining : {240 - activeTweet.length}</h3>
      <Button size={"lg"} className="mt-4" onClick={()=>{
        postTweet(activeTweet);
        setActiveTweet("");
        router.refresh();
        }
        }>Tweet!</Button>
    </main>
   );
}

export default TweetCount