/* eslint-disable */
import React, { useState, useEffect } from 'react';
import endpoints from '../constants/endpoints';

function Resume() {
  const [pdfPath, setPdfPath] = useState('');

  useEffect(() => {
    fetch(endpoints.resume)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched PDF path:', data.pdfPath);
        setPdfPath(data.pdfPath);
      })
      .catch(error => {
        console.error('Error fetching PDF path:', error);
      });
  }, []);

  return (
    <div>
      {pdfPath ? (
        <iframe title="Resume" src={pdfPath} width="100%" height="100%" />
        ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Resume;