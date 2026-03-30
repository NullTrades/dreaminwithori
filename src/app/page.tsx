'use client'

import { useState, FormEvent } from 'react'

// ─── Colour tokens ───────────────────────────────────────────────────────────
const C = {
  cream: '#F0F2EF',
  navy:  '#000022',
  teal:  '#19647E',
  brown: '#7F675B',
  amber: '#A27035',
} as const

// ─── Typography helpers ──────────────────────────────────────────────────────
const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }
const sans  = { fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }
const label = { ...sans, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' as const }

// ─── Projects data ───────────────────────────────────────────────────────────
const projects = [
  { title: 'HPAD Basketball — Road Trip', category: 'Lifestyle Videography', year: '2024',  size: 'large-tall' },
  { title: 'Untitled Portrait Series',    category: 'Portrait',               year: '2024–25', size: 'medium' },
  { title: 'Northern Touch Vintage',      category: 'Brand',                  year: '2024',  size: 'wide' },
  { title: 'On the road with the team',   category: 'Travel · Lifestyle',     year: '2025',  size: 'medium' },
]

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.25rem 2.5rem',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(0,0,34,0.7)',
        borderBottom: `1px solid rgba(240,242,239,0.06)`,
      }}
    >
      {/* Logo */}
      <span style={{ fontFamily: "'Starborn', sans-serif", fontSize: '1.35rem', color: C.cream, letterSpacing: '-0.01em' }}>
        oRi<span style={{ color: C.amber }}>✦</span>
      </span>

      {/* Links */}
      <div style={{ display: 'flex', gap: '2.5rem' }}>
        {['Work', 'About', 'Services'].map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              ...label,
              color: C.cream,
              opacity: 0.65,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.65')}
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        style={{
          ...label,
          color: C.navy,
          backgroundColor: C.teal,
          padding: '0.6rem 1.4rem',
          borderRadius: '2rem',
          textDecoration: 'none',
          transition: 'background-color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = C.amber)}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = C.teal)}
      >
        Let&apos;s work
      </a>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 2.5rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 80% 60% at 20% 80%, rgba(25,100,126,0.18) 0%, transparent 65%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          right: '2.5rem',
          bottom: '4rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span style={{ ...label, color: C.cream, opacity: 0.35, writingMode: 'vertical-rl' }}>scroll</span>
        <div
          style={{
            width: '1px',
            height: '48px',
            background: `linear-gradient(to bottom, rgba(240,242,239,0.4), transparent)`,
          }}
        />
      </div>

      {/* Text stack */}
      <div style={{ maxWidth: '820px', position: 'relative', zIndex: 1 }}>
        <p
          className="animate-fade-up delay-100"
          style={{ ...label, color: C.teal, marginBottom: '1.25rem' }}
        >
          Videographer · Photographer · Edmonton, AB
        </p>

        <h1
          className="animate-fade-up delay-200"
          style={{
            ...serif,
            fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
            lineHeight: 1.05,
            color: C.cream,
            marginBottom: '1.75rem',
            letterSpacing: '-0.02em',
          }}
        >
          visual{' '}
          <em style={{ color: C.amber, fontStyle: 'italic' }}>stories,</em>
          <br />
          told honestly.
        </h1>

        <p
          className="animate-fade-up delay-300"
          style={{
            ...sans,
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
            color: C.cream,
            opacity: 0.6,
            maxWidth: '480px',
            lineHeight: 1.7,
            marginBottom: '2.25rem',
          }}
        >
          Capturing the moments that matter — from courts and roads to brands and
          people. Real moments, genuine light, no fluff.
        </p>

        <div className="animate-fade-up delay-400" style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
          <a
            href="#work"
            style={{
              ...label,
              color: C.cream,
              backgroundColor: C.teal,
              padding: '0.85rem 2rem',
              borderRadius: '2rem',
              textDecoration: 'none',
              transition: 'background-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1a7a97'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = C.teal; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            View the work
          </a>
          <a
            href="#contact"
            style={{
              ...label,
              color: C.cream,
              opacity: 0.75,
              padding: '0.85rem 0',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.75')}
          >
            Book a project →
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Showreel ─────────────────────────────────────────────────────────────────
function Showreel() {
  return (
    <section
      style={{
        padding: '2rem 2.5rem 5rem',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          backgroundColor: 'rgba(255,255,255,0.04)',
          border: `1px solid rgba(240,242,239,0.08)`,
          borderRadius: '12px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        {/* Subtle gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(135deg, rgba(25,100,126,0.12) 0%, rgba(0,0,34,0.6) 100%)`,
          }}
        />
        {/* Play button */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: `2px solid rgba(240,242,239,0.5)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.25s, border-color 0.25s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLDivElement
            el.style.transform = 'scale(1.1)'
            el.style.borderColor = C.teal
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLDivElement
            el.style.transform = 'scale(1)'
            el.style.borderColor = 'rgba(240,242,239,0.5)'
          }}
        >
          {/* Triangle */}
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: '14px solid transparent',
              borderBottom: '14px solid transparent',
              borderLeft: `22px solid ${C.cream}`,
              marginLeft: '4px',
            }}
          />
        </div>
        <p
          style={{
            ...label,
            position: 'absolute',
            bottom: '1.5rem',
            left: '2rem',
            color: C.cream,
            opacity: 0.35,
          }}
        >
          Showreel 2024–25
        </p>
      </div>
    </section>
  )
}

// ─── Work Grid ────────────────────────────────────────────────────────────────
function WorkGrid() {
  return (
    <section
      id="work"
      style={{ padding: '5rem 2.5rem' }}
    >
      <p style={{ ...label, color: C.teal, marginBottom: '1rem' }}>Selected Work</p>
      <h2
        style={{
          ...serif,
          fontSize: 'clamp(2rem, 4vw, 3.25rem)',
          color: C.cream,
          marginBottom: '3rem',
          letterSpacing: '-0.02em',
        }}
      >
        Projects
      </h2>

      {/* Asymmetric grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '1rem',
        }}
      >
        {/* Row 1: Large-tall left, Medium right */}
        <ProjectCard project={projects[0]} style={{ gridColumn: '1', gridRow: '1', minHeight: '480px' }} />
        <ProjectCard project={projects[1]} style={{ gridColumn: '2', gridRow: '1', minHeight: '480px' }} />
        {/* Row 2: Wide left, Medium right */}
        <ProjectCard project={projects[2]} style={{ gridColumn: '1', gridRow: '2', minHeight: '300px' }} />
        <ProjectCard project={projects[3]} style={{ gridColumn: '2', gridRow: '2', minHeight: '300px' }} />
      </div>
    </section>
  )
}

type ProjectCardProps = {
  project: typeof projects[number]
  style?: React.CSSProperties
}

function ProjectCard({ project, style }: ProjectCardProps) {
  return (
    <div
      className="card-hover"
      style={{
        position: 'relative',
        borderRadius: '10px',
        overflow: 'hidden',
        background: `linear-gradient(160deg, rgba(25,100,126,0.22) 0%, rgba(0,0,34,0.9) 70%)`,
        border: `1px solid rgba(240,242,239,0.07)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '1.75rem',
        cursor: 'pointer',
        ...style,
      }}
    >
      {/* Noise / texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)`,
          pointerEvents: 'none',
        }}
      />
      <p style={{ ...label, color: C.teal, marginBottom: '0.4rem' }}>{project.category}</p>
      <h3
        style={{
          ...serif,
          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
          color: C.cream,
          letterSpacing: '-0.01em',
          marginBottom: '0.5rem',
        }}
      >
        {project.title}
      </h3>
      <p style={{ ...label, color: C.cream, opacity: 0.35 }}>{project.year}</p>
    </div>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section
      id="about"
      style={{
        padding: '6rem 2.5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5rem',
        alignItems: 'center',
      }}
    >
      {/* Left */}
      <div>
        <p style={{ ...label, color: C.teal, marginBottom: '1rem' }}>About me</p>
        <h2
          style={{
            ...serif,
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            color: C.cream,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '1.75rem',
          }}
        >
          Ori — the eye{' '}
          <em style={{ color: C.amber, fontStyle: 'italic' }}>behind</em>
          <br />
          the frame
        </h2>
        <p
          style={{
            ...sans,
            fontSize: '1rem',
            color: C.cream,
            opacity: 0.65,
            lineHeight: 1.75,
            marginBottom: '2rem',
            maxWidth: '420px',
          }}
        >
          CS student at the University of Alberta and videographer based in
          Edmonton. I find the honest frame — the real energy of a basketball
          road trip, the quiet confidence of a brand shoot, the light that
          makes a portrait look like a painting.
        </p>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {[
            'Sony A6700 · DaVinci Resolve',
            'Available for brand / lifestyle / event work',
            'Edmonton AB — open to travel',
          ].map(item => (
            <li key={item} style={{ ...sans, fontSize: '0.875rem', color: C.cream, opacity: 0.5, display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <span style={{ color: C.teal }}>—</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: portrait placeholder */}
      <div style={{ position: 'relative' }}>
        {/* Amber accent square */}
        <div
          style={{
            position: 'absolute',
            top: '-16px',
            right: '-16px',
            width: '72px',
            height: '72px',
            backgroundColor: C.amber,
            opacity: 0.85,
            zIndex: 0,
          }}
        />
        {/* Portrait frame */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            aspectRatio: '3 / 4',
            backgroundColor: 'rgba(255,255,255,0.04)',
            border: `1px solid rgba(240,242,239,0.08)`,
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '1.5rem',
            background: `linear-gradient(160deg, rgba(127,103,91,0.2) 0%, rgba(0,0,34,0.85) 100%)`,
          }}
        >
          {/* Stat card */}
          <div
            style={{
              padding: '0.85rem 1.25rem',
              backgroundColor: 'rgba(0,0,34,0.75)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: `1px solid rgba(240,242,239,0.08)`,
              borderRadius: '8px',
            }}
          >
            <p style={{ ...serif, fontSize: '1.75rem', color: C.amber, letterSpacing: '-0.02em' }}>3+</p>
            <p style={{ ...label, color: C.cream, opacity: 0.55 }}>Years shooting</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
type FormState = {
  name: string
  email: string
  projectType: string
  message: string
}

function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', projectType: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.')
      } else {
        setSubmitted(true)
      }
    } catch {
      setError('Failed to send. Check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 2.5rem 7rem',
        maxWidth: '760px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <p style={{ ...label, color: C.teal, marginBottom: '1rem' }}>Get in touch</p>
      <h2
        style={{
          ...serif,
          fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
          color: C.cream,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '1rem',
        }}
      >
        Ready to{' '}
        <em style={{ color: C.amber, fontStyle: 'italic' }}>work</em>
        <br />
        <em style={{ color: C.amber, fontStyle: 'italic' }}>together?</em>
      </h2>
      <p
        style={{
          ...sans,
          fontSize: '1rem',
          color: C.cream,
          opacity: 0.55,
          marginBottom: '3rem',
          lineHeight: 1.7,
        }}
      >
        Whether it&apos;s a brand shoot, a road trip doc, or an event — let&apos;s talk
        about your vision.
      </p>

      {submitted ? (
        <div
          style={{
            padding: '2.5rem',
            border: `1px solid rgba(25,100,126,0.3)`,
            borderRadius: '10px',
            backgroundColor: 'rgba(25,100,126,0.08)',
          }}
        >
          <p style={{ ...serif, fontSize: '1.4rem', color: C.cream }}>Message sent ✦</p>
          <p style={{ ...sans, fontSize: '0.9rem', color: C.cream, opacity: 0.5, marginTop: '0.5rem' }}>
            I&apos;ll be in touch soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          {/* Name + Email row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <FormInput
              label="Name"
              type="text"
              value={form.name}
              onChange={v => setForm(f => ({ ...f, name: v }))}
              placeholder="Your name"
              required
            />
            <FormInput
              label="Email"
              type="email"
              value={form.email}
              onChange={v => setForm(f => ({ ...f, email: v }))}
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Project type */}
          <div>
            <label style={{ ...label, color: C.cream, opacity: 0.55, display: 'block', marginBottom: '0.4rem' }}>
              Project Type
            </label>
            <select
              value={form.projectType}
              onChange={e => setForm(f => ({ ...f, projectType: e.target.value }))}
              required
              style={inputStyle}
            >
              <option value="" disabled>Select a category</option>
              {['Brand', 'Lifestyle', 'Portrait', 'Event', 'Travel', 'Other'].map(o => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label style={{ ...label, color: C.cream, opacity: 0.55, display: 'block', marginBottom: '0.4rem' }}>
              Message
            </label>
            <textarea
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              required
              rows={5}
              placeholder="Tell me about your project…"
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          {error && (
            <p
              style={{
                ...sans,
                fontSize: '0.875rem',
                color: '#e57373',
                padding: '0.75rem 1rem',
                backgroundColor: 'rgba(229,115,115,0.08)',
                border: '1px solid rgba(229,115,115,0.2)',
                borderRadius: '6px',
                margin: 0,
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              ...label,
              color: C.cream,
              backgroundColor: loading ? 'rgba(25,100,126,0.5)' : C.teal,
              border: 'none',
              padding: '1rem',
              borderRadius: '6px',
              cursor: loading ? 'not-allowed' : 'pointer',
              width: '100%',
              fontSize: '0.75rem',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => { if (!loading) e.currentTarget.style.backgroundColor = '#1a7a97' }}
            onMouseLeave={e => { if (!loading) e.currentTarget.style.backgroundColor = C.teal }}
          >
            {loading ? 'Sending…' : 'Send message'}
          </button>
        </form>
      )}
    </section>
  )
}

const inputStyle: React.CSSProperties = {
  ...sans,
  width: '100%',
  padding: '0.75rem 1rem',
  backgroundColor: 'rgba(240,242,239,0.05)',
  border: `1px solid rgba(240,242,239,0.12)`,
  borderRadius: '6px',
  color: '#F0F2EF',
  fontSize: '0.9375rem',
  outline: 'none',
  appearance: 'none',
  WebkitAppearance: 'none',
}

type FormInputProps = {
  label: string
  type: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  required?: boolean
}

function FormInput({ label: lbl, type, value, onChange, placeholder, required }: FormInputProps) {
  return (
    <div>
      <label style={{ ...label, color: C.cream, opacity: 0.55, display: 'block', marginBottom: '0.4rem' }}>
        {lbl}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        style={inputStyle}
      />
    </div>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid rgba(240,242,239,0.06)`,
        padding: '2rem 2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <span style={{ fontFamily: "'Starborn', sans-serif", fontSize: '1.1rem', color: C.cream }}>
        oRi<span style={{ color: C.amber }}>✦</span>
      </span>
      <p style={{ ...sans, fontSize: '0.8rem', color: C.cream, opacity: 0.35 }}>
        © {new Date().getFullYear()} Ori. All rights reserved.
      </p>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {[
          { name: 'Instagram', href: '#' },
          { name: 'Email',     href: 'mailto:hello@dreaminwithori.com' },
        ].map(link => (
          <a
            key={link.name}
            href={link.href}
            style={{
              ...label,
              color: C.cream,
              opacity: 0.45,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.45')}
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Showreel />
        <WorkGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
