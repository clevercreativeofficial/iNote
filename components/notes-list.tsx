// components/notes-list.tsx
'use client';

import { Note } from '@/types/note';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface NotesListProps {
  notes: Note[];
  onSelectNote: (note: Note) => void;
  onCreateNew: () => void;
  selectedNoteId?: string;
}

export function NotesList({ notes, onSelectNote, onCreateNew, selectedNoteId }: NotesListProps) {
  return (

    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 my-4">
      {notes.map((note) => (
        <Card
          key={note.id}
          className={`cursor-pointer transition-all hover:shadow-sm ${selectedNoteId === note.id ? 'border-black bg-background shadow-sm' : 'border-transparent'
            }`}
          onClick={() => onSelectNote(note)}
        >
          <CardHeader className="pb-2">
            <h3 className="font-semibold text-sm truncate">
              {note.title || 'Untitled'}
            </h3>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-xs text-muted-foreground line-clamp-2">
              {note.content.substring(0, 100)}...
            </p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-muted-foreground">
                {new Date(note.updatedAt).toLocaleDateString()}
              </span>
            </div>
          </CardContent>
          <CardFooter className="pt-4">
            <div className="w-full flex gap-2">
              <Button variant="outline" size="sm" onClick={onCreateNew} className="w-fit">
                Edit Note
              </Button>
              <Button size="sm" onClick={onCreateNew} className="w-fit text-white bg-rose-500">
                Delete Note
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>

  );
}