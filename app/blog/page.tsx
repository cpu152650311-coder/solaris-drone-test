"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  publishedAt: string;
  featuredImage: string;
  tags: string[];
  readingTime: number;
}

interface Manifest {
  updatedAt: string;
  posts: Post[];
  categories: { slug: string; name: string }[];
}

const RAW_BASE = "https://raw.githubusercontent.com/cpu152650311-coder/solaris-drone-test/main";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

export default function BlogListPage() {
  const [manifest, setManifest] = useState<Manifest | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${RAW_BASE}/content/blog/manifest.json`, { cache: "no-store" })
      .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then((d) => { setManifest(d); setLoading(false); })
      .catch((e) => { setError(e.message); setLoading(false); });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin h-8 w-8 border-2 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-red-500">Failed to load blog: {error}</p>
      </div>
    );
  }

  const posts = manifest?.posts ?? [];
  const categories = manifest?.categories ?? [];

  return (
    <div className="min-h-screen bg-[#F8FAFB]">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Insights on drone technology, aerial robotics, and autonomous systems.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog?category=${cat.slug}`}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-blue-500/10 hover:text-blue-600 transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-400 mb-2">No Posts Yet</h2>
            <p className="text-gray-400">Check back soon for the latest insights.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-black/[0.06] hover:border-blue-500/20 hover:shadow-lg transition-all"
              >
                {post.featuredImage && (
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600">
                      {categories.find(c => c.slug === post.category)?.name ?? post.category}
                    </span>
                    <span className="text-xs text-gray-400">{formatDate(post.publishedAt)}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-3">{post.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.readingTime} min read</span>
                    <span>{post.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
