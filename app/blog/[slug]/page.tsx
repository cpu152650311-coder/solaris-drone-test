"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
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

function markdownToHtml(md: string): string {
  let html = md
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/^#### (.+)$/gm, '<h4 class="text-lg font-semibold mt-5 mb-2">$1</h4>')
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/^---$/gm, '<hr class="my-6 border-gray-200" />')
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-blue-300 pl-4 italic text-gray-500 my-3">$1</blockquote>')
    .replace(/\n\n/g, "</p><p class=\"mb-4 leading-relaxed text-gray-700\">")
    .replace(/\n/g, "<br />");
  return '<p class="mb-4 leading-relaxed text-gray-700">' + html + "</p>";
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "";

  const [manifest, setManifest] = useState<Manifest | null>(null);
  const [post, setPost] = useState<Post | null>(null);
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadPost = useCallback(async (s: string) => {
    setLoading(true);
    setError("");
    try {
      const r = await fetch(`${RAW_BASE}/content/blog/manifest.json`, { cache: "no-store" });
      if (!r.ok) throw new Error(`Manifest HTTP ${r.status}`);
      const manifestData: Manifest = await r.json();

      const found = manifestData.posts.find((p: Post) => p.slug === s);
      if (!found) throw new Error("Post not found");

      setManifest(manifestData);
      setPost(found);

      const cr = await fetch(`${RAW_BASE}/content/blog/${s}/content.md`, { cache: "no-store" });
      if (!cr.ok) throw new Error("Content not available");
      const md = await cr.text();
      setHtml(markdownToHtml(md));
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (slug) loadPost(slug);
  }, [slug, loadPost]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin h-8 w-8 border-2 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-red-500">{error}</p>
        <Link href="/blog" className="text-blue-600 hover:underline">Back to Blog</Link>
      </div>
    );
  }

  if (!post) return null;

  const category = manifest?.categories.find(c => c.slug === post.category);

  return (
    <div className="min-h-screen bg-[#F8FAFB]">
      <article className="container mx-auto px-6 py-16 max-w-3xl">
        <Link href="/blog" className="text-blue-600 hover:underline text-sm mb-8 inline-block">
          &larr; Back to Blog
        </Link>

        {post.featuredImage && (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
          />
        )}

        <div className="mb-8 pb-6 border-b border-gray-200">
          <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
            {category?.name ?? post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-3">{post.title}</h1>
          <p className="text-gray-500 mb-4">{post.description}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.readingTime} min read</span>
            <span>·</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          className="prose-custom max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </div>
  );
}
