import {useState, useEffect } from 'react';
import { getStorage} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = getStorage.ref(file.name);
    storageRef.put(file).on('state_changed', (snap) => { 
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async ()=> {
      const url = await storageRef.getDownloadURL();
      setUrl(url);
    }) 
  }, [file]); // returns this function after a file has been selected

  return { progress, url, error };
}

  // useEffect(() => {
  //   if (!file) {
  //     setProgress(0);
  //     return;
  //   }
  //   const storageRef = projectStorage.ref(file.name);
  //   const uploadTask = storageRef.put(file);
  //   uploadTask.on('state_changed', snapshot => {
  //     const progress = Math.round(
  //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //     );
  //     setProgress(progress);
  //   }, error => {
  //     setError(error);
  //   }, () => {
  //     storageRef.getDownloadURL().then(url => {
  //       setUrl(url);
  //     });
  //   });
  // }, [file]);

  export default useStorage;
