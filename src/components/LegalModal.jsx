import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

// Popup dialog for legal copy (Terms of Service / Privacy Notice).
// Closes on the X, on outside click, and on Escape. Body scroll is locked
// while open and the content area scrolls inside a capped-height panel.
const LegalModal = ({ title, lastUpdated, sections, onClose }) => {
  const panelRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col outline-none"
      >
        <div className="flex items-start justify-between gap-4 border-b border-gray-200 p-5 md:p-6">
          <div>
            <h2 id="legal-modal-title" className="text-xl font-bold text-gray-900">
              {title}
            </h2>
            <p className="text-xs text-gray-500 mt-1">Last updated: {lastUpdated}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="flex-shrink-0 text-gray-400 hover:text-gray-700 transition p-1 -m-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2A6EBB] rounded"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 md:p-6 space-y-6">
          {sections.map((s) => (
            <div key={s.heading}>
              <h3 className="text-sm font-bold text-gray-900 mb-1.5">{s.heading}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 p-4 md:px-6 text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-md bg-[#2A6EBB] text-white text-sm font-semibold hover:bg-[#1f5aa0] transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
