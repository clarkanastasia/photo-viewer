import '../css/App.css'
import {PhotoViewer} from './PhotoViewer';

export function App() {
  return (
    <div className= "flexContainer">
      <h1>React Photo Viewer</h1>
      <PhotoViewer src="https://picsum.photos/id/237/1000/600"/>
      </div>
  )
}
