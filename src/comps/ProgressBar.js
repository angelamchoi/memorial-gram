import React, {useEffect} from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file); //fires the useEffect inside useStorage
  console.log(progress, url)

  useEffect(() => {
    if(url) {
      setFile(null); //progress will not show up anymore
    }
  }, [setFile, url])
  
  return (
    <div className="progress-bar" style={{ width: progress + '%'}}>
    </div>
  )
}

  export default ProgressBar;