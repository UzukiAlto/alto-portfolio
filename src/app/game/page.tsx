"use client";
import { useEffect, useState } from "react";

function Card() {
  return (
    <div className="p-4 bg-black rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800">タイトル</h2>
      <p className="mt-2 text-gray-600">Tailwindを使ったスタイリング例です。</p>
    </div>
  );
}

export default function Game(){
    
    useEffect(() => {
        console.log("gameページが表示されました");

        const timerId = setInterval(() => {
            console.log("1秒経過");
        }, 1000);

        return () => {
            clearInterval(timerId)
        }
    }, []);
    return(
        <div>
            これはgameページです。
            <Card />
        </div>
    )
}