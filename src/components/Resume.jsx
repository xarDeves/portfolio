import React, { useState, useEffect } from 'react';
import endpoints from '../constants/endpoints';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  pdfFrame: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    border: 'none',
    zoom: 3.5,
  },
};

function Resume() {
  const [pdfPath, setPdfPath] = useState('');

  const baseUrl = process.env.PUBLIC_URL;
  const jsonUrl = `${baseUrl}/${endpoints.resume}`;

  useEffect(() => {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((data) => {
        setPdfPath(data.pdfPath);
      });
  }, []);

  return (
    <div style={styles.container}>
      {pdfPath ? (
        <iframe
          title="Resume"
          src={pdfPath}
          style={styles.pdfFrame}
          allowFullScreen
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Resume;
