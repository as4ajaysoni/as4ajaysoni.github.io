import { useState } from "react";

const tools = [
  {
    emoji: "🧱",
    name: "llama.cpp",
    repo: "ggerganov/llama.cpp",
    tagline: "Run LLMs on CPU/GPU locally",
    useCase: "Inference",
    difficulty: "Medium",
    speed: "⚡⚡⚡⚡",
    cpuFriendly: true,
    gpuSupport: true,
    fineTuning: false,
    uiIncluded: false,
    pythonApi: true,
    bestFor: "Power users wanting raw control",
    rating: 5,
    pros: ["Highly optimized C++", "Runs on CPU", "Wide model support", "Active community"],
    cons: ["CLI-first", "Setup complexity"],
    badge: "MOST VERSATILE",
    badgeColor: "#f59e0b",
  },
  {
    emoji: "🦙",
    name: "Ollama",
    repo: "ollama/ollama",
    tagline: "Easiest local LLM runner",
    useCase: "Inference",
    difficulty: "Easy",
    speed: "⚡⚡⚡",
    cpuFriendly: true,
    gpuSupport: true,
    fineTuning: false,
    uiIncluded: false,
    pythonApi: true,
    bestFor: "Beginners & devs wanting quick setup",
    rating: 5,
    pros: ["One-command install", "Docker-like model management", "REST API built-in"],
    cons: ["Less control than llama.cpp", "Slightly slower"],
    badge: "BEST FOR BEGINNERS",
    badgeColor: "#10b981",
  },
  {
    emoji: "💬",
    name: "FastChat",
    repo: "lm-sys/FastChat",
    tagline: "Vicuna, local model serving",
    useCase: "Serving",
    difficulty: "Medium",
    speed: "⚡⚡⚡",
    cpuFriendly: false,
    gpuSupport: true,
    fineTuning: false,
    uiIncluded: true,
    pythonApi: true,
    bestFor: "Research & OpenAI-compatible APIs",
    rating: 3,
    pros: ["OpenAI-compatible API", "Web UI included", "Multi-model support"],
    cons: ["GPU required", "Less active now", "Heavy dependencies"],
    badge: null,
    badgeColor: null,
  },
  {
    emoji: "🌍",
    name: "GPT4All",
    repo: "nomic-ai/gpt4all",
    tagline: "Local chatbot for everyone",
    useCase: "Inference",
    difficulty: "Easy",
    speed: "⚡⚡",
    cpuFriendly: true,
    gpuSupport: true,
    fineTuning: false,
    uiIncluded: true,
    pythonApi: true,
    bestFor: "Non-technical users wanting a desktop app",
    rating: 4,
    pros: ["Desktop GUI", "No coding needed", "Privacy-first"],
    cons: ["Less cutting-edge models", "Slower than llama.cpp"],
    badge: "BEST GUI",
    badgeColor: "#6366f1",
  },
  {
    emoji: "📄",
    name: "llamafile",
    repo: "Mozilla-Ocho/llamafile",
    tagline: "Single-file LLM executables",
    useCase: "Inference",
    difficulty: "Easy",
    speed: "⚡⚡⚡",
    cpuFriendly: true,
    gpuSupport: true,
    fineTuning: false,
    uiIncluded: true,
    pythonApi: false,
    bestFor: "Zero-install, portable LLM distribution",
    rating: 4,
    pros: ["Single executable", "No install needed", "Cross-platform"],
    cons: ["Large file sizes", "Limited model range"],
    badge: "MOST PORTABLE",
    badgeColor: "#ec4899",
  },
  {
    emoji: "💨",
    name: "mistral-src",
    repo: "mistralai/mistral-src",
    tagline: "Mistral model source code",
    useCase: "Reference",
    difficulty: "Hard",
    speed: "⚡⚡⚡⚡",
    cpuFriendly: false,
    gpuSupport: true,
    fineTuning: false,
    uiIncluded: false,
    pythonApi: true,
    bestFor: "Researchers studying Mistral architecture",
    rating: 2,
    pros: ["Official reference impl", "Clean PyTorch code"],
    cons: ["Not for production use", "GPU only", "Minimal tooling"],
    badge: null,
    badgeColor: null,
  },
  {
    emoji: "⚡",
    name: "Unsloth",
    repo: "unslothai/unsloth",
    tagline: "2x faster fine-tuning",
    useCase: "Fine-tuning",
    difficulty: "Medium",
    speed: "⚡⚡⚡⚡⚡",
    cpuFriendly: false,
    gpuSupport: true,
    fineTuning: true,
    uiIncluded: false,
    pythonApi: true,
    bestFor: "Fine-tuning on consumer GPUs",
    rating: 5,
    pros: ["2x faster training", "Lower VRAM usage", "Easy Colab integration"],
    cons: ["GPU required", "Fine-tuning only"],
    badge: "BEST FINE-TUNER",
    badgeColor: "#f97316",
  },
  {
    emoji: "🪓",
    name: "Axolotl",
    repo: "OpenAccess-AI-Collective/axolotl",
    tagline: "Fine-tuning framework",
    useCase: "Fine-tuning",
    difficulty: "Hard",
    speed: "⚡⚡⚡⚡",
    cpuFriendly: false,
    gpuSupport: true,
    fineTuning: true,
    uiIncluded: false,
    pythonApi: true,
    bestFor: "Advanced fine-tuning with full control",
    rating: 4,
    pros: ["YAML config", "Multi-GPU support", "Many training methods"],
    cons: ["Steep learning curve", "GPU only"],
    badge: null,
    badgeColor: null,
  },
  {
    emoji: "🚀",
    name: "vLLM",
    repo: "vllm-project/vllm",
    tagline: "Fast LLM inference server",
    useCase: "Serving",
    difficulty: "Medium",
    speed: "⚡⚡⚡⚡⚡",
    cpuFriendly: false,
    gpuSupport: true,
    fineTuning: false,
    uiIncluded: false,
    pythonApi: true,
    bestFor: "High-throughput production serving",
    rating: 5,
    pros: ["PagedAttention", "Fastest serving", "OpenAI-compatible API"],
    cons: ["GPU only", "No consumer use case"],
    badge: "FASTEST SERVER",
    badgeColor: "#ef4444",
  },
  {
    emoji: "🐍",
    name: "llama-cpp-python",
    repo: "abetlen/llama-cpp-python",
    tagline: "Python bindings for llama.cpp",
    useCase: "Inference",
    difficulty: "Easy",
    speed: "⚡⚡⚡⚡",
    cpuFriendly: true,
    gpuSupport: true,
    fineTuning: false,
    uiIncluded: false,
    pythonApi: true,
    bestFor: "Python devs integrating local LLMs",
    rating: 4,
    pros: ["Pure Python API", "OpenAI-compatible", "Lightweight"],
    cons: ["Depends on llama.cpp", "Slightly behind upstream"],
    badge: "BEST PYTHON SDK",
    badgeColor: "#3b82f6",
  },
  {
    emoji: "🐉",
    name: "KoboldCpp",
    repo: "LostRuins/koboldcpp",
    tagline: "Local LLM with great UI",
    useCase: "Inference",
    difficulty: "Easy",
    speed: "⚡⚡⚡",
    cpuFriendly: true,
    gpuSupport: true,
    fineTuning: false,
    uiIncluded: true,
    pythonApi: true,
    bestFor: "Creative writing & roleplay enthusiasts",
    rating: 4,
    pros: ["Rich web UI", "Story/roleplay features", "Single executable"],
    cons: ["Niche audience", "Less dev-friendly"],
    badge: "BEST FOR CREATIVE",
    badgeColor: "#8b5cf6",
  },
];

const difficultyColor = { Easy: "#10b981", Medium: "#f59e0b", Hard: "#ef4444" };

export default function App() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Inference", "Serving", "Fine-tuning", "Reference"];
  const filtered = filter === "All" ? tools : tools.filter((t) => t.useCase === filter);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      fontFamily: "'Courier New', monospace",
      color: "#e2e8f0",
      padding: "2rem 1rem",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; }
        .tool-row { transition: background 0.15s; cursor: pointer; }
        .tool-row:hover { background: rgba(255,255,255,0.04) !important; }
        .tool-row.active { background: rgba(255,255,255,0.07) !important; }
        .filter-btn { transition: all 0.15s; border: 1px solid #2d2d3d; background: transparent; color: #94a3b8; padding: 0.35rem 1rem; cursor: pointer; font-family: 'Courier New', monospace; font-size: 0.75rem; letter-spacing: 0.05em; }
        .filter-btn:hover { border-color: #4f4f6f; color: #e2e8f0; }
        .filter-btn.active { background: #1e1e2e; border-color: #6366f1; color: #a5b4fc; }
        .pill { display: inline-block; padding: 0.15rem 0.5rem; border-radius: 2px; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; }
        .detail-panel { animation: slideIn 0.2s ease; }
        @keyframes slideIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: #2d2d3d; }
      `}</style>

      {/* Header */}
      <div style={{ maxWidth: 1100, margin: "0 auto 2.5rem" }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "1rem", marginBottom: "0.5rem" }}>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            margin: 0,
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Local LLM Tools</h1>
          <span style={{ color: "#4f4f6f", fontSize: "0.75rem", marginBottom: "0.5rem", letterSpacing: "0.1em" }}>
            {tools.length} TOOLS COMPARED
          </span>
        </div>
        <p style={{ color: "#64748b", fontSize: "0.8rem", margin: 0, letterSpacing: "0.05em" }}>
          Click any row to expand details · Filter by use case
        </p>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Filter bar */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {categories.map((c) => (
            <button key={c} className={`filter-btn${filter === c ? " active" : ""}`} onClick={() => setFilter(c)}>
              {c}
            </button>
          ))}
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          {/* Header row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr",
            gap: "0.5rem",
            padding: "0.5rem 1rem",
            borderBottom: "1px solid #1e1e2e",
            fontSize: "0.65rem",
            color: "#4f4f6f",
            letterSpacing: "0.12em",
            fontWeight: 700,
            minWidth: 700,
          }}>
            <span>TOOL</span>
            <span>TYPE</span>
            <span>DIFFICULTY</span>
            <span>SPEED</span>
            <span>CPU ✓</span>
            <span>FINE-TUNE</span>
            <span>HAS UI</span>
            <span>BEST FOR</span>
          </div>

          {filtered.map((tool) => (
            <div key={tool.repo}>
              <div
                className={`tool-row${selected === tool.repo ? " active" : ""}`}
                onClick={() => setSelected(selected === tool.repo ? null : tool.repo)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr",
                  gap: "0.5rem",
                  padding: "0.75rem 1rem",
                  borderBottom: "1px solid #13131f",
                  alignItems: "center",
                  fontSize: "0.8rem",
                  minWidth: 700,
                }}
              >
                {/* Name */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "1.1rem" }}>{tool.emoji}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: "#e2e8f0", fontSize: "0.85rem" }}>{tool.name}</div>
                    {tool.badge && (
                      <span className="pill" style={{ background: tool.badgeColor + "20", color: tool.badgeColor, marginTop: "0.15rem" }}>
                        {tool.badge}
                      </span>
                    )}
                  </div>
                </div>
                {/* Type */}
                <span style={{ color: "#94a3b8", fontSize: "0.75rem" }}>{tool.useCase}</span>
                {/* Difficulty */}
                <span className="pill" style={{
                  background: difficultyColor[tool.difficulty] + "18",
                  color: difficultyColor[tool.difficulty],
                  width: "fit-content",
                }}>
                  {tool.difficulty}
                </span>
                {/* Speed */}
                <span style={{ fontSize: "0.7rem", letterSpacing: "0.05em" }}>{tool.speed}</span>
                {/* CPU */}
                <span style={{ color: tool.cpuFriendly ? "#10b981" : "#4f4f6f" }}>
                  {tool.cpuFriendly ? "✓" : "—"}
                </span>
                {/* Fine-tune */}
                <span style={{ color: tool.fineTuning ? "#10b981" : "#4f4f6f" }}>
                  {tool.fineTuning ? "✓" : "—"}
                </span>
                {/* UI */}
                <span style={{ color: tool.uiIncluded ? "#10b981" : "#4f4f6f" }}>
                  {tool.uiIncluded ? "✓" : "—"}
                </span>
                {/* Best for */}
                <span style={{ color: "#64748b", fontSize: "0.72rem" }}>{tool.bestFor}</span>
              </div>

              {/* Expanded detail */}
              {selected === tool.repo && (
                <div className="detail-panel" style={{
                  background: "#0f0f1a",
                  borderBottom: "1px solid #1e1e2e",
                  padding: "1.25rem 1rem 1.25rem 3rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  minWidth: 700,
                }}>
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "#4f4f6f", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>PROS</div>
                    {tool.pros.map((p) => (
                      <div key={p} style={{ display: "flex", gap: "0.5rem", marginBottom: "0.3rem", fontSize: "0.78rem", color: "#94a3b8" }}>
                        <span style={{ color: "#10b981" }}>+</span> {p}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "#4f4f6f", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>CONS</div>
                    {tool.cons.map((c) => (
                      <div key={c} style={{ display: "flex", gap: "0.5rem", marginBottom: "0.3rem", fontSize: "0.78rem", color: "#94a3b8" }}>
                        <span style={{ color: "#ef4444" }}>−</span> {c}
                      </div>
                    ))}
                  </div>
                  <div style={{ gridColumn: "1/-1", marginTop: "0.5rem" }}>
                    <span style={{ fontSize: "0.65rem", color: "#4f4f6f", letterSpacing: "0.1em" }}>REPO → </span>
                    <span style={{ fontSize: "0.75rem", color: "#6366f1" }}>{tool.repo}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legend / Verdict */}
        <div style={{
          marginTop: "2.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}>
          {[
            { title: "🏆 Run locally, zero hassle", pick: "Ollama", why: "One command, works everywhere, great API" },
            { title: "🔬 Fine-tune a model", pick: "Unsloth", why: "2× faster, less VRAM, easy Colab notebooks" },
            { title: "🚀 Production inference", pick: "vLLM", why: "PagedAttention, highest throughput" },
            { title: "🖥️ Desktop chat app", pick: "GPT4All", why: "Polished GUI, no code needed" },
            { title: "🐍 Python integration", pick: "llama-cpp-python", why: "Drop-in OpenAI-compatible Python client" },
            { title: "✍️ Creative writing", pick: "KoboldCpp", why: "Rich story/roleplay UI built-in" },
          ].map((v) => (
            <div key={v.pick} style={{
              background: "#0f0f1a",
              border: "1px solid #1e1e2e",
              padding: "1rem",
              borderRadius: "4px",
            }}>
              <div style={{ fontSize: "0.65rem", color: "#4f4f6f", letterSpacing: "0.1em", marginBottom: "0.4rem" }}>{v.title}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#e2e8f0", marginBottom: "0.3rem" }}>{v.pick}</div>
              <div style={{ fontSize: "0.72rem", color: "#64748b" }}>{v.why}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
