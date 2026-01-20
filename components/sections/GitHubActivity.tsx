"use client";

import { useRef, useEffect, useState } from "react";

type GitHubEvent = {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  created_at: string;
  payload: any;
};

export default function GitHubActivity() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "-100px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        const response = await fetch('https://api.github.com/users/jbrauck-unchained/events/public?per_page=5');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setEvents(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub activity:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchGitHubActivity();
  }, []);

  const getEventDescription = (event: GitHubEvent) => {
    const repoName = event.repo.name.split('/')[1];

    switch (event.type) {
      case 'PushEvent':
        const commits = event.payload.commits?.length || 0;
        return `Pushed ${commits} commit${commits !== 1 ? 's' : ''} to ${repoName}`;
      case 'PullRequestEvent':
        return `${event.payload.action} a pull request in ${repoName}`;
      case 'IssuesEvent':
        return `${event.payload.action} an issue in ${repoName}`;
      case 'CreateEvent':
        return `Created ${event.payload.ref_type} in ${repoName}`;
      case 'WatchEvent':
        return `Starred ${repoName}`;
      case 'ForkEvent':
        return `Forked ${repoName}`;
      default:
        return `Activity in ${repoName}`;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <section id="github-activity" className="py-20 px-6 bg-[var(--bg-tertiary)]" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <div className={`reveal ${isVisible ? "is-visible" : ""}`}>
          <div className="border-l-[6px] border-[var(--accent-primary)] pl-6 mb-4">
            <h2 className="mb-2">Recent GitHub Activity</h2>
          </div>

          {loading && (
            <div className="flex justify-center py-12">
              <div className="w-4 h-4 bg-[var(--accent-primary)] animate-pulse"></div>
            </div>
          )}

          {error && (
            <div className="text-center py-12 border-brutalist p-8 bg-[var(--bg-primary)]">
              <p className="text-[var(--text-muted)] mb-4 font-mono uppercase text-sm tracking-wider">
                Unable to load recent activity
              </p>
              <a
                href="https://github.com/jbrauck-unchained"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-primary)] hover:underline font-bold uppercase text-xs tracking-wider"
              >
                View profile on GitHub ▸
              </a>
            </div>
          )}

          {!loading && !error && events.length > 0 && (
            <div className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className="flex items-start gap-4 p-6 bg-[var(--bg-primary)] border-brutalist-2 hover:hard-shadow-sm hover:-translate-y-1 transition-all"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                    transition: `all 0.5s ease-out ${index * 0.1}s`
                  }}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-[var(--text-primary)] font-bold">
                      {getEventDescription(event)}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-2 font-mono uppercase tracking-wider">
                      {formatDate(event.created_at)}
                    </p>
                  </div>
                  <a
                    href={`https://github.com/${event.repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent-primary)] hover:text-[var(--accent-hover)] text-xs flex-shrink-0 font-bold uppercase tracking-wider"
                  >
                    View ▸
                  </a>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <a
              href="https://github.com/jbrauck-unchained"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-brutalist font-bold uppercase tracking-wider hover:translate-x-1 hover:translate-y-1 transition-transform"
            >
              Full GitHub Profile ▸
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
