import '../css/ImgSelector.css';

export default function ImgSelector(props : any){

    const brokenImages = [
        1, 24, 32, 36, 44, 47
    ];
    const getImageUrls = () =>{
        const urls = [];
    
        for (let i = 0; i < 50; i++) {
            if (!brokenImages.includes(i)) {
                const imageNumberString = i.toString().padStart(2, '0');
                urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
            }
        }
        return urls;
    }

    const urls = getImageUrls();
    
    return(
        <div>
            <h2>Select Your Photo</h2>
            <h3>The current url is: {props.selectedUrl}</h3>
            <div className="imgContainer">
                {urls.map((url, index) => (
                    <img
                    key= {index} 
                    src= {url}
                    className= {`thumbnail ${props.selectedUrl === url? 'border': ''}`}
                    onClick={()=> props.onClick(url)}
                    />
                ))}
            </div>
        </div>
    )
}