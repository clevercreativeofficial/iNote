'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { NoteEditorProps } from '@/types/note';
import Container from '@/components/container'


const AddNote = ({ note, onSave, onCancel, isLoading = false }: NoteEditorProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const handleSave = () => {
    onSave({
      title: title.trim(),
      content: content.trim(),
      tags: []
    });
  };

  const hasChanges = note ? title !== note.title || content !== note.content : title || content;

  return (
    <Container>
      <Card className="h-fit w-full max-w-2xl mx-auto border-0 shadow-none mt-4">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="note-title" className="text-sm font-medium text-muted-foreground">
              Title
            </Label>
          </div>
          <Input
            id="note-title"
            placeholder="Note title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-2xl px-3 font-semibold border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </CardHeader>

        <CardContent className="pt-0">
          <Textarea
            placeholder="Start writing your note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[500px] px-3 resize-none border-0 text-lg leading-relaxed focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </CardContent>

        <CardFooter className="flex justify-between pt-4 border-t">
          <div className="flex items-center space-x-2">
              {onCancel && (
                <Button
                  variant="ghost"
                  onClick={onCancel}
                  disabled={isLoading}
                  className="h-8 px-3 text-xs"
                >
                  Cancel
                </Button>
              )}
              <Button
                onClick={handleSave}
                disabled={!hasChanges || isLoading}
                className="h-8 px-3 text-xs"
              >
                {isLoading ? 'Saving...' : 'Save Note'}
              </Button>
            </div>
        </CardFooter>
      </Card>
    </Container>
  );
}

export default AddNote;