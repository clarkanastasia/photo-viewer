import '../css/PhotoViewer.css'

export default function PhotoViewer(props : any){
    return(
        <div>
            <img src={props.selectedUrl} alt="cover image" className="coverImg"/>
        </div>
    );
}