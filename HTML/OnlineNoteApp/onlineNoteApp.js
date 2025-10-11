// Full robust JS for Notes app (fixes Save button issues)
// Paste this inside a <script> tag OR in your external notes.js
// Wrap in DOMContentLoaded to ensure DOM elements exist before running

document.addEventListener("DOMContentLoaded", () => {
  const STORAGE_KEY = "my_notes_app";

  // ---------- Helpers: load / save ----------
  function loadNotes() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error("Failed to parse notes from localStorage:", err);
      return [];
    }
  }

  function saveNotes(notesArray) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notesArray));
    } catch (err) {
      console.error("Failed to save notes to localStorage:", err);
    }
  }

  // ---------- State & Elements ----------
  let notes = loadNotes(); // array of { id: string|number, title, body }

  const notesContainer = document.getElementById("notesContainer");
  const addNoteBtn = document.getElementById("addNoteBtn");
  const themeToggle = document.getElementById("themeToggle");

  if (!notesContainer) {
    console.error("No #notesContainer found in DOM. Aborting notes script.");
    return;
  }
  if (!addNoteBtn) {
    console.error("No #addNoteBtn found in DOM. Aborting notes script.");
    return;
  }

  // ---------- Render ----------
  function renderNotes() {
    notesContainer.innerHTML = "";

    for (const note of notes) {
      const card = document.createElement("div");
      card.className = "note-card";
      card.style.position = "relative"; // allow small inline messages to position absolute
      card.dataset.id = String(note.id);

      // Use innerHTML for the internal structure (safe here because data is controlled)
      card.innerHTML = `
        <input type="text" class="note-title" placeholder="Title" value="${escapeHtml(
          note.title
        )}">
        <textarea class="note-body" placeholder="Your note...">${escapeHtml(
          note.body
        )}</textarea>
        <div class="actions">
          <button type="button" class="save-btn">Save</button>
          <button type="button" class="delete-btn">Delete</button>
        </div>
      `;

      notesContainer.appendChild(card);
    }
  }

  // small helper to avoid injecting raw HTML (escape)
  function escapeHtml(str = "") {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // ---------- Add note ----------
  addNoteBtn.addEventListener("click", () => {
    // create a new note with string id to avoid type mismatch
    const newNote = { id: Date.now().toString(), title: "", body: "" };
    notes.unshift(newNote);
    saveNotes(notes);
    renderNotes();

    // focus the title input of the newly created card
    requestAnimationFrame(() => {
      const firstCard = notesContainer.querySelector(".note-card");
      if (firstCard) {
        const titleInput = firstCard.querySelector(".note-title");
        if (titleInput) titleInput.focus();
      }
    });
  });

  // ---------- Delegated click handler for Save & Delete ----------
  notesContainer.addEventListener("click", (e) => {
    // If click target is inside a note-card, find the card:
    const card = e.target.closest(".note-card");
    if (!card) return; // click was outside note cards

    // normalize id to string
    const noteId = String(card.dataset.id);

    // identify which button was clicked
    if (e.target.matches(".save-btn")) {
      // prevent default form behavior if any
      e.preventDefault();

      const titleEl = card.querySelector(".note-title");
      const bodyEl = card.querySelector(".note-body");
      const title = titleEl ? titleEl.value.trim() : "";
      const body = bodyEl ? bodyEl.value.trim() : "";

      // find note index (coerce both to string to avoid type mismatch)
      const idx = notes.findIndex((n) => String(n.id) === noteId);
      if (idx === -1) {
        console.warn("Save clicked but note not found:", noteId);
        return;
      }

      notes[idx].title = title;
      notes[idx].body = body;
      saveNotes(notes);

      // visual confirmation (non-blocking)
      showTempMessage(card, "Saved ✓", { color: "#2ecc71" });
      return;
    }

    if (e.target.matches(".delete-btn")) {
      e.preventDefault();

      // remove note from array and re-render
      notes = notes.filter((n) => String(n.id) !== noteId);
      saveNotes(notes);
      renderNotes();
      return;
    }
  });

  // ---------- Optional: handle keyboard Enter for saving in title field ----------
  // This lets pressing Enter in the title input trigger save (non-intrusive).
  notesContainer.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const el = e.target;
      if (el && el.classList && el.classList.contains("note-title")) {
        // find containing card and click the save button programmatically
        const card = el.closest(".note-card");
        if (!card) return;
        const saveBtn = card.querySelector(".save-btn");
        if (saveBtn) {
          e.preventDefault(); // avoid newline/submit
          saveBtn.click();
        }
      }
    }
  });

  // ---------- Dark mode toggle (keeps render consistent) ----------
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      renderNotes(); // re-render so cards receive correct dark-mode styles if you rely on server-side class
    });
  }

  // ---------- Utility: temporary inline message ----------
  function showTempMessage(cardEl, text, opts = {}) {
    const msg = document.createElement("div");
    msg.textContent = text;
    msg.style.position = "absolute";
    msg.style.top = "8px";
    msg.style.right = "8px";
    msg.style.padding = "6px 10px";
    msg.style.borderRadius = "6px";
    msg.style.fontSize = "0.85rem";
    msg.style.background = opts.color || "rgba(0,0,0,0.7)";
    msg.style.color = opts.textColor || "#fff";
    msg.style.zIndex = "20";
    cardEl.appendChild(msg);
    setTimeout(() => {
      msg.remove();
    }, 1400);
  }

  // ---------- Initial render ----------
  renderNotes();
});
