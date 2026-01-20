"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'PushEvent':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
          </svg>
        );
      case 'PullRequestEvent':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
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
    <section id="github-activity" className="py-20 px-6 bg-white dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-8">
            <svg className="w-8 h-8 mr-3 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <h2 className="text-4xl md:text-5xl font-bold">
              Recent GitHub Activity
            </h2>
          </div>

          {loading && (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bitcoin-500"></div>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Unable to load recent activity
              </p>
              <a
                href="https://github.com/jbrauck-unchained"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bitcoin-500 dark:text-bitcoin-400 hover:underline"
              >
                View profile on GitHub →
              </a>
            </div>
          )}

          {!loading && !error && events.length > 0 && (
            <div className="space-y-4">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="p-2 bg-bitcoin-100 dark:bg-bitcoin-900 rounded-lg text-bitcoin-500 dark:text-bitcoin-400">
                    {getEventIcon(event.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 dark:text-white font-medium">
                      {getEventDescription(event)}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {formatDate(event.created_at)}
                    </p>
                  </div>
                  <a
                    href={`https://github.com/${event.repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bitcoin-500 dark:text-bitcoin-400 hover:underline text-sm flex-shrink-0"
                  >
                    View →
                  </a>
                </motion.div>
              ))}
            </div>
          )}

          <div className="mt-8 text-center">
            <a
              href="https://github.com/jbrauck-unchained"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
            >
              View Full GitHub Profile
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
