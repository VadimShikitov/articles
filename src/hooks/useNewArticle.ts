import React, { useState, useCallback } from 'react';


/**
 * article hook. Managing article state.
 * @returns title, imageUrl, description and callbacks for controlling state by inputs.
 */
export const useNewArticle = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  return {
    title,
    imageUrl,
    description,
    changeTitleText: useCallback(({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setTitle(value), []),
    changeImageUrl: useCallback(({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setImageUrl(value), []),
    changeDescription: useCallback(({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(value), []),
  }
}