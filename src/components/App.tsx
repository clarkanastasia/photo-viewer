import '../css/App.css'
import {useState} from 'react';
import PhotoViewer from './PhotoViewer';
import ImgSelector from './ImgSelector';

export function App() {
const [selectedUrl, setSelectedUrl] = useState("https://picsum.photos/id/237/1000/600");
const handleClick = (url : any) => setSelectedUrl(url);

  return (
    <div className= "flexContainer">
      <h1>React Photo Viewer</h1>
      <PhotoViewer selectedUrl= {selectedUrl}/>
      <ImgSelector 
      selectedUrl = {selectedUrl}
      onClick = {handleClick}
      />
      </div>
  )
}
