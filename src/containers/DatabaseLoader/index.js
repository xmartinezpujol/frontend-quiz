import React, { useCallback, useState, useEffect } from 'react';
import { Button } from 'wasabi-kit/lib';
import { useDropzone } from 'react-dropzone';
import Container, { DbLoaderWrapper } from './styles';

function DatabaseLoader(props) {
  const [file, setFile] = useState([]);
  const onDrop = useCallback((acceptedFile) => {
    const reader = new FileReader();
    reader.onload = (() => (e) => {
      try {
        setFile(JSON.parse(e.target.result));
      } catch (ex) {
        alert(`Error when trying to parse json = ${ex}`);
      }
    })(acceptedFile);
    reader.readAsText(acceptedFile[0]);
  }, []);

  useEffect(() => {
    if (file.length > 0) {
      props.onDatabaseLoaded(file);
    }
  }, [file]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'application/json',
    onDrop,
  });
  return (
    <DbLoaderWrapper justify="center">
      {!!file.length &&
        <Button
          type="sashimi"
          color="white"
          onClick={() => setFile([])}
          iFont="fa"
          icon="trash"
          iconWidth={30}
        >
          Delete Quiz DB
        </Button>
      }
      {file.length === 0 &&
        <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
          <input {...getInputProps()} />
          {isDragActive
            ? <p>Drop the file here <span aria-label="sir" role="img">🧐</span></p>
            :
            <>
              <p>Import your Quiz file here <span aria-label="nerd" role="img">🤓</span></p>
              <strong>(JSON files)</strong>
            </>
          }
        </Container>
      }
    </DbLoaderWrapper>
  );
}

export default DatabaseLoader;
