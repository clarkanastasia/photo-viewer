import '../css/PhotoViewer.css'

export function PhotoViewer(props:any){
    return(
        <div>
            <img src={props.src} alt="placeholder cover image" className="coverImg"/>
        </div>
    );
}