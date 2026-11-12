# Maverick EdLab — Data, AI & Student Success

Personal academic site of Linda "Ify" Onwubuya, branded as **Maverick EdLab**.

Personal academic site with a built-in, weekday-themed blog. Plain HTML/CSS/JS:
no build step, free to host on GitHub Pages.

## Pages
| File | Page |
|---|---|
| `index.html` | Home: positioning statement, bio, weekday theme strip, 3 featured posts |
| `about.html` | Path from teaching agriculture in Nigeria to higher ed data, CV download |
| `research.html` | Dissertation (in development), publications, talks, ASHE reviewing |
| `data.html` | Project cards (R / Python / Power BI, public or mock data only) |
| `blog.html` | All posts, filterable by the seven themes (`blog.html?theme=ai`) |
| `post.html` | Single post view (`post.html?p=<slug>`) |
| `contact.html` | Email, LinkedIn, speaking topics |

## Writing a post
Open `assets/js/posts.js`, copy a post object, and edit it:
`slug`, `title`, `theme` (`ai`, `success`, `career`, `assessment`, `equity`,
`methods`, `reflections`), `date` (YYYY-MM-DD), `minutes`, `excerpt`, `body` (HTML).
Mark up to three posts `featured: true` to show them on the Home page.

| Day | Theme | Key |
|---|---|---|
| Mon | AI in Higher Ed | `ai` |
| Tue | Student Success | `success` |
| Wed | Career Readiness | `career` |
| Thu | Assessment | `assessment` |
| Fri | STEM Equity | `equity` |
| Sat | Methods | `methods` |
| Sun | Reflections | `reflections` |

## Before going live, replace
- The sample blog posts in `assets/js/posts.js` (they're drafts that show the layout).
- Highlighted `[placeholder]` text on About and Research (schools, years, citations, talks).
- `you@example.com` and `linkedin.com/in/your-profile` (Contact page + footer).
- `assets/cv/Onwubuya-CV.pdf` with your real CV.
- The `#` links on Data Work cards with your dashboard/repo links.

## Publish on GitHub Pages
Repo **Settings → Pages → Build and deployment → Deploy from a branch**, choose
the branch and `/ (root)`. The site appears at `https://<username>.github.io/<repo>/`.

## Design
Fraunces (headings) + Inter (body) from Google Fonts. Deep green `#1F4D3A`,
amber `#C2850F`, off-white `#FAF7F0`; each blog theme has its own tag color.
All colors are CSS variables at the top of `assets/css/style.css`; dark mode included.
