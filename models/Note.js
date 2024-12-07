// models/Note.js
import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String },
  course: { type: String, required: true },
  uploadedBy: { type: String, required: true },
  fileUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Note = mongoose.models.Note || mongoose.model('Note', NoteSchema);

export default Note;