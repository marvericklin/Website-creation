/* ==========================================================================
   Blog content lives here.
   To add a post: copy one object below, give it a unique `slug`, set `theme`
   to one of the THEME keys, and write the body in plain HTML.
   Set `featured: true` on up to 3 posts to show them on the Home page
   (if none are featured, the 3 newest posts are shown).
   NOTE: the posts below are SAMPLE drafts to show the layout — replace them.
   ========================================================================== */

window.THEMES = {
  ai:          { label: "AI in Higher Ed",    day: "Mon" },
  success:     { label: "Student Success",    day: "Tue" },
  career:      { label: "Career Readiness",   day: "Wed" },
  assessment:  { label: "Assessment",         day: "Thu" },
  equity:      { label: "STEM Equity",        day: "Fri" },
  methods:     { label: "Methods",            day: "Sat" },
  reflections: { label: "Reflections",        day: "Sun" }
};

window.POSTS = [
  {
    slug: "assessing-process-not-just-product",
    title: "Assessing the process, not just the product",
    theme: "assessment",
    date: "2026-11-12",
    minutes: 5,
    featured: true,
    excerpt: "When a polished essay can be generated in seconds, the artifact tells us less than it used to. What would it look like to grade the thinking that produced it?",
    body: `
      <p>For most of the history of higher education, the finished product — the lab report, the essay, the problem set — was a reasonable proxy for learning. Generative AI has loosened that link. A polished artifact now tells us less about what a student can do on their own.</p>
      <p>Rather than treating this only as an integrity problem, I want to treat it as a measurement problem. If the product has become a noisier signal, where else can we look for evidence of learning?</p>
      <h2>Three places to look</h2>
      <ul>
        <li><strong>Drafting history.</strong> Short process memos, version notes, or annotated revisions show how a student moved from a first idea to a final claim.</li>
        <li><strong>Explanation on demand.</strong> Brief oral check-ins — five minutes, low stakes — ask students to walk through a choice they made.</li>
        <li><strong>Critique of AI output.</strong> Asking students to evaluate, correct, and improve a generated response makes judgment the thing being assessed.</li>
      </ul>
      <blockquote>The question isn't "did a student use AI?" but "what evidence do we have that they learned?"</blockquote>
      <p>None of these is free; each asks something of instructors' time. Next Thursday I'll look at how rubrics can be redesigned so that process evidence is weighted without doubling grading load.</p>`
  },
  {
    slug: "what-ai-ready-means-to-employers",
    title: "What employers mean when they say “AI-ready”",
    theme: "career",
    date: "2026-11-11",
    minutes: 4,
    featured: true,
    excerpt: "“AI-ready” shows up in job postings and career-center brochures alike. Unpacking the phrase reveals older competencies wearing new clothes.",
    body: `
      <p>“AI-ready graduates” has become a phrase that career centers, employers, and accreditors all use — but rarely define. When I read it closely, it tends to break into three familiar competencies.</p>
      <ul>
        <li><strong>Judgment:</strong> knowing when a tool's output is good enough, and when it isn't.</li>
        <li><strong>Communication:</strong> explaining what a tool did, and what a human decided, to people who weren't there.</li>
        <li><strong>Data literacy:</strong> understanding that every model reflects the data it was built on.</li>
      </ul>
      <p>That's encouraging news for colleges: much of what makes a graduate “AI-ready” is what good general education has always tried to teach. The work is in making those competencies visible — to students and to the employers reading their résumés.</p>`
  },
  {
    slug: "early-alerts-students-open",
    title: "Early alerts students actually open",
    theme: "success",
    date: "2026-11-10",
    minutes: 6,
    featured: true,
    excerpt: "An early-alert system is only as good as the message a student receives. Notes on tone, timing, and who the message comes from.",
    body: `
      <p>Institutions invest heavily in predicting which students might struggle. Far less attention goes to the moment that matters most: the message a student actually receives.</p>
      <h2>What the research and practice suggest</h2>
      <p>Messages framed around belonging and next steps tend to land better than messages framed around risk. Timing matters — a nudge before a first exam is more useful than one after midterm grades. And the messenger matters: a note from a known instructor or advisor reads differently than one from an unfamiliar office.</p>
      <blockquote>A risk score is an institutional fact. A message is a relationship.</blockquote>
      <p>In a future Data Work post I'll share a mock dashboard that tracks not just who was flagged, but who opened, replied, and followed up.</p>`
  },
  {
    slug: "generative-ai-is-not-one-thing",
    title: "Generative AI isn't one thing: a working taxonomy of student use",
    theme: "ai",
    date: "2026-11-09",
    minutes: 7,
    excerpt: "Surveys that ask “Do you use AI?” flatten very different behaviors. Here's the taxonomy I'm using to think about STEM undergraduates.",
    body: `
      <p>Asking students whether they “use AI” is a bit like asking whether they “use the library.” The answer is almost always yes, and almost never informative.</p>
      <p>As my dissertation ideas develop, I'm working with a rough taxonomy of student use:</p>
      <ul>
        <li><strong>Tutoring:</strong> asking for explanations, worked examples, or practice problems.</li>
        <li><strong>Drafting:</strong> generating first versions of text or code.</li>
        <li><strong>Checking:</strong> debugging code, verifying steps, or proofreading.</li>
        <li><strong>Navigating:</strong> making sense of syllabi, policies, and institutional processes.</li>
      </ul>
      <p>Each category likely relates to student success differently — and may be distributed differently across student groups. That's the question I find most interesting.</p>`
  },
  {
    slug: "from-farm-plots-to-data-plots",
    title: "From farm plots to data plots",
    theme: "reflections",
    date: "2026-11-08",
    minutes: 4,
    excerpt: "I learned to teach in agricultural classrooms in Nigeria. Many of the habits I use as a data researcher started there.",
    body: `
      <p>Before I worked with student data, I taught agriculture. Some of the lessons from that classroom have followed me into every analysis I run.</p>
      <p>On a demonstration plot, you learn quickly that the conditions matter as much as the seed. Soil, water, timing, and care all shape the harvest — and you can't fairly judge a crop without knowing them.</p>
      <blockquote>Students are not outcomes. They are growing in conditions we help create.</blockquote>
      <p>That is still how I read a retention rate or a pass rate: not as a verdict on students, but as a question about conditions.</p>`
  },
  {
    slug: "preregistering-small-studies",
    title: "Why I pre-register even small institutional studies",
    theme: "methods",
    date: "2026-11-07",
    minutes: 5,
    excerpt: "Institutional research moves fast and rarely publishes. That's exactly why writing down the plan first is worth the hour it takes.",
    body: `
      <p>Pre-registration is usually discussed for large experiments headed to journals. I've found it just as valuable for small institutional analyses that will only ever reach a committee.</p>
      <ul>
        <li>It separates the questions I planned to ask from the ones I found along the way.</li>
        <li>It forces decisions about exclusions and comparison groups before I see results.</li>
        <li>It makes the analysis easier to hand off, repeat next year, or audit.</li>
      </ul>
      <p>My template is a one-page document: question, data, outcome definitions, planned comparisons, and what would change my mind. I'll share it in a future post.</p>`
  },
  {
    slug: "who-gets-to-experiment",
    title: "Who gets to experiment? AI access in STEM gateway courses",
    theme: "equity",
    date: "2026-11-06",
    minutes: 6,
    excerpt: "Paid tiers, device access, and unclear course policies can turn a new learning tool into a new equity gap.",
    body: `
      <p>Gateway STEM courses already sort students in ways that matter for who persists in a major. Generative AI arrives in that context — not in a neutral one.</p>
      <p>Three questions I think every department should ask:</p>
      <ul>
        <li>Do all students have access to the same tools, or do paid tiers create a two-speed classroom?</li>
        <li>Are course AI policies clear enough that first-generation students aren't guessing at hidden rules?</li>
        <li>Is anyone teaching students <em>how</em> to use these tools well, or only whether they may?</li>
      </ul>
      <p>Equity here isn't only about access. It's about who gets permission, guidance, and room to experiment.</p>`
  },
  {
    slug: "what-syllabus-ai-statements-signal",
    title: "What syllabus AI statements signal to students",
    theme: "ai",
    date: "2026-11-02",
    minutes: 5,
    excerpt: "A syllabus statement on AI is a policy — and also a message about trust, belonging, and what the course values.",
    body: `
      <p>Syllabus AI statements have multiplied, and they vary widely: outright bans, open permission, and everything in between. Students read them not only for rules but for tone.</p>
      <p>A statement that explains <em>why</em> a boundary exists invites students into the reasoning. A statement that only lists penalties communicates something else entirely.</p>
      <p>I'm collecting public examples to analyze how statements frame students — as collaborators, as risks, or as learners. More soon.</p>`
  }
];
