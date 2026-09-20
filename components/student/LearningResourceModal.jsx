import React, { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Play,
  RotateCcw,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { learningCurriculum } from "../../lib/learningCurriculum";

export default function LearningResourceModal({
  resource,
  onClose,
  onUpdateProgress,
  saving,
}) {
  const curriculum = learningCurriculum[resource.id] || {
    modules: [
      { id: 1, title: "Overview & Core Concepts", duration: "25m", summary: resource.description || "Core foundational principles and practical walkthrough." },
      { id: 2, title: "Applied Practical Exercise", duration: "35m", summary: "Step-by-step hands-on challenge with industry standards." },
    ],
    takeaways: [
      "Understand practical application in high-growth companies",
      "Produce interview-ready portfolio evidence",
    ],
    resourceType: resource.resource_type || "course",
    externalUrl: resource.resource_url || "https://google.com",
  };

  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const activeModule = curriculum.modules[activeModuleIndex] || curriculum.modules[0];
  const isCompleted = Number(resource.progress_percentage || 0) >= 100;
  const isPdf = resource.category?.toLowerCase().includes("pdf") || resource.resource_type === "pdf";

  const handleComplete = () => {
    onUpdateProgress(resource.id, 100);
  };

  const handleAdvance = () => {
    if (activeModuleIndex < curriculum.modules.length - 1) {
      const nextIndex = activeModuleIndex + 1;
      setActiveModuleIndex(nextIndex);
      const calculatedPct = Math.round((nextIndex / curriculum.modules.length) * 100);
      onUpdateProgress(resource.id, Math.max(calculatedPct, Number(resource.progress_percentage || 0)));
    } else {
      handleComplete();
    }
  };

  const handleReset = () => {
    onUpdateProgress(resource.id, 0);
  };

  const handleDownload = () => {
    const textContent = `CareerCube Playbook: ${resource.title}\nCategory: ${resource.category}\nDifficulty: ${resource.difficulty}\n\nSummary:\n${resource.description}\n\nCore Chapters:\n${curriculum.modules.map((m) => `• ${m.title} (${m.duration}): ${m.summary}`).join("\n")}\n\nKey Takeaways:\n${curriculum.takeaways.map((t) => `• ${t}`).join("\n")}\n\nDownloaded from CareerCube Student Workspace.`;
    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${resource.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}-guide.txt`;
    link.click();
    URL.revokeObjectURL(url);
    if (!isCompleted) {
      onUpdateProgress(resource.id, 100);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card max-w-3xl overflow-hidden p-0 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`p-6 text-white ${resource.tone || "bg-cobalt"} flex items-start justify-between relative`}>
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white/80">
              <BookOpen size={14} />
              <span>{resource.category}</span>
              <span>·</span>
              <span>{resource.difficulty || resource.level}</span>
            </div>
            <h2 className="mt-2 text-2xl font-black tracking-tight">{resource.title}</h2>
            <p className="mt-1 text-xs text-white/85 max-w-xl line-clamp-2">
              {resource.description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full bg-black/20 p-2 text-white hover:bg-black/40 transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress Bar Header */}
        <div className="border-b border-ink/[0.08] bg-canvas px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-muted">Completion</span>
            <div className="h-2 w-32 rounded-full bg-ink/10 overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${isCompleted ? "bg-jade" : "bg-cobalt"}`}
                style={{ width: `${resource.progress_percentage || 0}%` }}
              />
            </div>
            <span className="text-xs font-extrabold">{resource.progress_percentage || 0}%</span>
          </div>

          <div className="flex items-center gap-2">
            {isCompleted ? (
              <span className="flex items-center gap-1.5 rounded-full bg-jade/10 px-3 py-1 text-xs font-bold text-jade">
                <CheckCircle2 size={14} /> Completed
              </span>
            ) : (
              <button
                disabled={saving}
                onClick={handleComplete}
                className="btn-accent py-1.5 px-3 text-xs"
              >
                Mark as Complete
              </button>
            )}
            {Number(resource.progress_percentage || 0) > 0 && (
              <button
                disabled={saving}
                onClick={handleReset}
                title="Reset progress"
                className="btn-ghost p-1.5 text-muted hover:text-coral"
              >
                <RotateCcw size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Main Module Viewer */}
          <div className="grid gap-6 md:grid-cols-[1.4fr_.9fr]">
            <div className="space-y-4">
              <div className="rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-xs">
                <span className="inline-block rounded-md bg-cobalt/10 px-2.5 py-1 text-[11px] font-extrabold text-cobalt uppercase tracking-wide">
                  Active Lesson
                </span>
                <h3 className="mt-3 text-lg font-extrabold text-ink">{activeModule.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{activeModule.summary}</p>

                <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-ink/[0.06]">
                  {isPdf ? (
                    <button
                      onClick={handleDownload}
                      className="btn-accent flex items-center gap-2 text-xs"
                    >
                      <Download size={14} /> Download Reference Playbook
                    </button>
                  ) : (
                    <button
                      onClick={handleAdvance}
                      disabled={saving}
                      className="btn-accent flex items-center gap-2 text-xs"
                    >
                      {activeModuleIndex < curriculum.modules.length - 1 ? (
                        <>Next Lesson <ChevronRight size={14} /></>
                      ) : (
                        <><CheckCircle2 size={14} /> Finish Course</>
                      )}
                    </button>
                  )}

                  {curriculum.externalUrl && (
                    <a
                      href={curriculum.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-1.5 text-xs"
                    >
                      Open Official Source <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>

              {/* Takeaways Box */}
              <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-5">
                <h4 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-900">
                  <Sparkles size={14} className="text-amber-600" /> Key Skills &amp; Outcomes
                </h4>
                <ul className="mt-3 space-y-2 text-xs leading-5 text-amber-950">
                  {curriculum.takeaways.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modules / Chapters List */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-muted">
                Curriculum ({curriculum.modules.length} modules)
              </h4>
              <div className="space-y-2">
                {curriculum.modules.map((m, index) => {
                  const isActive = activeModuleIndex === index;
                  const isPast = (resource.progress_percentage || 0) >= Math.round(((index + 1) / curriculum.modules.length) * 100);

                  return (
                    <button
                      key={m.id}
                      onClick={() => setActiveModuleIndex(index)}
                      className={`w-full text-left p-3.5 rounded-xl border transition flex items-start gap-3 ${
                        isActive
                          ? "border-cobalt bg-cobalt/[0.06] shadow-xs"
                          : "border-ink/[0.07] bg-white/70 hover:bg-white"
                      }`}
                    >
                      <div className="mt-0.5">
                        {isPast ? (
                          <CheckCircle2 size={16} className="text-jade" />
                        ) : (
                          <div className={`grid h-4 w-4 place-items-center rounded-full text-[10px] font-extrabold ${isActive ? "bg-cobalt text-white" : "bg-ink/10 text-muted"}`}>
                            {index + 1}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className={`text-xs font-bold truncate ${isActive ? "text-cobalt" : "text-ink"}`}>
                            {m.title}
                          </p>
                          <span className="text-[10px] text-muted ml-2 shrink-0">{m.duration}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-ink/[0.08] bg-canvas px-6 py-4 flex items-center justify-between">
          <p className="text-xs text-muted">
            All progress automatically saves to your verified student record.
          </p>
          <button onClick={onClose} className="btn-secondary text-xs">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
