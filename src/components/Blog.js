import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";


// Inside your JSX
<div className="text-blue-500 text-xl font-bold">
  <ArrowRightIcon className="w-6 h-6" />
</div>


const blogData = [
  {
    date: "APR 28, 2024",
    readTime: "8 MIN READ",
    title: "The FSE 150 experience: Best class of my life?",
    description:
      "This is my reflection on a class I took in my second semester at ASU. It is probably the best class of my life.",
    icon: "🏆",
    category: "Stories",
  },
  {
    date: "MAR 27, 2024",
    readTime: "7 MIN READ",
    title: "Redis became closed source, so I made my own in Golang",
    description:
      "I shipped a drop-in replacement of the in memory key-value store Redis, made in Golang.",
    icon: "🥫",
    category: "Coding",
  },
  {
    date: "FEB 12, 2024",
    readTime: "6 MIN READ",
    title: "Solving my embarrassment and low attention span using AI",
    description:
      "I shipped an open source app that transcribes a lecture live with an instant chatbot whom I can ask all my doubts to.",
    icon: "💬",
    category: "Shipped",
  },
  {
    date: "JAN 28, 2024",
    readTime: "6 MIN READ",
    title: "Creating an AI powered note taking app",
    description:
      "I shipped an open source local-first AI powered note taking app with semantic search, cloud sync, offline support and other features.",
    icon: "📝",
    category: "Shipped",
  },
  {
    date: "JAN 20, 2024",
    readTime: "8 MIN READ",
    title: "Create react app is slowing you down.",
    description:
      "We have still not moved on from create-react-app. Here's a comprehensive essay on why you should not use it.",
    icon: "🚫",
    category: "Coding",
  },
  {
    date: "JAN 16, 2024",
    readTime: "6 MIN READ",
    title: "Using FFmpeg.wasm to build a local-first video processing app",
    description:
      "I shipped a video processing app that runs locally on your browser using FFmpeg.wasm by shipping as a PWA. Isn't that cool?",
    icon: "📹",
    category: "Tutorials",
  },
];

const tabs = [
  "Latest",
  "Coding",
  "Shipped",
  "Stories",
  "Tutorials",
  "Gcsp",
  "Essays",
  "Beginners",
];

function Blog() {
  const [activeTab, setActiveTab] = useState("Latest");

  // Filter logic
  const filteredPosts =
    activeTab === "Latest"
      ? blogData // Show all posts for "Latest"
      : blogData.filter((post) => post.category === activeTab);

  return (
    <div className="p-8 md:p-16  text-gray-800">
      {/* Blog Heading */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">My Blog</h1>

      {/* Tabs */}
      <div className="flex gap-6 text-gray-600 text-sm border-b mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab)} // Set active tab
            className={`pb-2 transition-colors ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-gray-900 font-semibold"
                : "hover:text-gray-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Blog List */}
      <div className="space-y-8">
        {filteredPosts.map((post, index) => (
          <div
            key={index}
            className="flex gap-4 md:gap-6 items-start border-b pb-6"
          >
            {/* Icon */}
            <div className="text-4xl">{post.icon}</div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-sm text-gray-500">
                {post.date} · {post.readTime}
              </p>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">
                {post.title}
              </h3>
              <p className="text-gray-700 mt-2">{post.description}</p>
            </div>

            {/* Arrow */}
            <div className="text-blue-500 text-xl font-bold">
              <ArrowRightIcon className="w-6 h-6" />
            </div>
          </div>
        ))}

        {/* No Posts Message */}
        {filteredPosts.length === 0 && (
          <p className="text-gray-500 text-center">No posts in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Blog;
