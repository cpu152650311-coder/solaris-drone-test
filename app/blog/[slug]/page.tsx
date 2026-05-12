import type { Metadata } from 'next';
import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  publishedAt: string;
  tags: string[];
  readingTime: number;
}

interface Manifest {
  posts: Post[];
  categories: { slug: string; name: string }[];
}

const RAW_BASE = 'https://raw.githubusercontent.com/cpu152650311-coder/solaris-drone-test/main';

async function getPost(slug: string): Promise<Post | null> {
  try {
    const res = await fetch(`${RAW_BASE}/content/blog/manifest.json`, { next: { revalidate: 3600 } });
    const manifest: Manifest = await res.json();
    return manifest.posts.find((p) => p.slug === slug) ?? null;
  } catch {
    return null;
  }
}

async function getContent(slug: string): Promise<string> {
  try {
    const res = await fetch(`${RAW_BASE}/content/blog/${slug}/content.md`, { next: { revalidate: 3600 } });
    if (!res.ok) return '';
    return res.text();
  } catch {
    return '';
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: 'Post Not Found — Solaris Robotics' };
  return {
    title: `${post.title} — Solaris Robotics Blog`,
    description: post.description,
    openGraph: { title: post.title, description: post.description, type: 'article' },
  };
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Post Not Found</h1>
          <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>The article you are looking for does not exist or has been removed.</p>
          <Link href="/blog" style={{ color: '#0d9488', fontWeight: 600 }}>← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const content = await getContent(params.slug);
  const category = post.category;

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <div
        style={{
          background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
          color: 'white',
          padding: 'clamp(3rem, 8vw, 6rem) 1.5rem clamp(2rem, 5vw, 4rem)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.15)', padding: '0.3rem 0.75rem', borderRadius: '999px' }}>
              {category}
            </span>
            <span style={{ fontSize: '0.72rem', opacity: 0.8, padding: '0.3rem 0' }}>
              {post.readingTime} min read · {formatDate(post.publishedAt)}
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            {post.title}
          </h1>
          <p style={{ fontSize: '1.05rem', opacity: 0.85, maxWidth: '560px', margin: '0 auto' }}>
            {post.description}
          </p>
          <div style={{ marginTop: '1.5rem', fontSize: '0.85rem', opacity: 0.7 }}>
            By {post.author}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) 1.5rem' }}>
        {content ? (
          <article
            style={{
              background: 'white',
              borderRadius: '14px',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              border: '1px solid #e2e8f0',
              lineHeight: 1.85,
              fontSize: '1rem',
              color: '#334155',
            }}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <div
            style={{
              background: 'white',
              borderRadius: '14px',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              border: '1px solid #e2e8f0',
              textAlign: 'center',
              color: '#64748b',
            }}
          >
            <p>Content is being prepared. Check back soon.</p>
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '2rem', marginBottom: '2rem' }}>
          {post.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.72rem',
                fontWeight: 500,
                color: '#0d9488',
                background: '#ccfbf1',
                padding: '0.3rem 0.75rem',
                borderRadius: '999px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href="/blog"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#0d9488',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '0.9rem',
          }}
        >
          ← Back to all articles
        </Link>
      </div>
    </div>
  );
}
