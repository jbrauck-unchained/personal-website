// src/components/Projects.js
import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Bitcoin Miner</h3>
          <p>
            A basic bitcoin mining web app run on an express.js backend. No it
            doesn't actually mine bitcoin. The TLDR is that in its current
            iteration, you set the number of zeroes a SHA256 hash of a string
            (data block) needs in order to meet the "difficulty" threshold to be
            considered a valid "block."
          </p>
          <a
            href="https://github.com/jbrauck-unchained/bitcoin-miner"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <p>
            Also try it out{" "}
            <a
              href="https://jbrauck-unchained.github.io/bitcoin-miner/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </li>
        <li>
          <h3>Sportstr</h3>
          <p>
            A python script based solution to getting sports RSS feeds into my
            nostr feed. I am sports junkie and even though I am bitcoiner, I
            also am still the guy at the barbecue asking if you caught the game
            last night. In this repo you will find a variety of identical
            directories all essentially containing the same things and running
            similar functionality. It fetches an rss feed from one source, then
            right after fetches all posts from the account in question from the
            last two days. Using text pre-processing and a cosine similarity
            scoring mechanism, it decides how similar this is to recent
            headlines. If this score cracks an 80% similarity threshold, then it
            will choose not to post the article. This is in hopes to expanding
            to multiple sources for each category and stopping those sources
            from posting duplicates. If an article looks new and unique, it
            fires it off from the post_note.py script. Lastly, the way this is
            currently working is its running on a cron job every 30 min from my
            home server. I hope to modify this so it kicks off on a custom
            schedule whenever an rss feed is updated. All in all this a fun
            project for my own entertainment, and all zaps on posts will be
            donated to opensats (I expect this to be a pretty low amount lol)
          </p>
          <a
            href="https://github.com/jbrauck-unchained/sportstr"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
