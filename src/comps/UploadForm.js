import React, {useState} from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] =useState(null)

  const types = ['image/png', 'image/jpeg']; //allowed types

  const changeHandler = (e) => {
    let selected = e.target.files[0]; // first file that was selected
    if (selected && types.includes(selected.type)) { // if true, then file was selected
      setFile(selected);
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
    console.log(selected);
  }
  return (
    <form>
      <input type="file" onChange={changeHandler}/>
      <div className = "output">
        {
          error && <div className="error">{error}</div>
        }
      </div>
    </form>
  )

}

export default UploadForm;