// Simple in-memory rate limiter
// For production with multiple instances, use Redis or similar

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 5 * 60 * 1000);

export function rateLimit(
  identifier: string,
  limit: number = 3,
  windowMs: number = 60 * 60 * 1000 // 1 hour default
): { success: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  if (!entry || now > entry.resetTime) {
    // Create new entry or reset expired one
    const resetTime = now + windowMs;
    rateLimitMap.set(identifier, { count: 1, resetTime });
    return { success: true, remaining: limit - 1, resetTime };
  }

  if (entry.count >= limit) {
    // Rate limit exceeded
    return { success: false, remaining: 0, resetTime: entry.resetTime };
  }

  // Increment count
  entry.count++;
  rateLimitMap.set(identifier, entry);
  return { success: true, remaining: limit - entry.count, resetTime: entry.resetTime };
}

export function getClientIdentifier(request: Request): string {
  // Try to get IP from various headers (for deployments behind proxies)
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const cfConnectingIp = request.headers.get("cf-connecting-ip"); // Cloudflare
  
  const ip = cfConnectingIp || realIp || forwarded?.split(",")[0] || "unknown";
  return ip.trim();
}
