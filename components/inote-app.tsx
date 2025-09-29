// components/inote-app.tsx
'use client';

import { useState } from 'react';
import { NotesList } from './notes-list';
import { Note } from '@/types/note';
import { notes as initialNotes } from '@/data/notes';
import Container from '@/components/container';

// Mock initial notes data
const notesInit: Note[] = initialNotes;

export function INoteApp() {
  const [notes, setNotes] = useState(notesInit);
  const [selectedNote, setSelectedNote] = useState<Note | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateNew = () => {
    setSelectedNote(undefined);
  };


  return (
    <div className="flex h-fit bg-background">
      <Container>
      <NotesList
        notes={notes}
        onSelectNote={setSelectedNote}
        onCreateNew={handleCreateNew}
        selectedNoteId={selectedNote?.id}
      />
      </Container>
    </div>
  );
}