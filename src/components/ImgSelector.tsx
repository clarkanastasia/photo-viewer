import '../css/ImgSelector.css';

export function ImgSelector(){

    const brokenImages = [
        1, 24, 32, 36, 44, 47
    ];
    const urls = getImageUrls();
    
    function getImageUrls() {
        const urls = [];
    
        for (let i = 0; i < 50; i++) {
            if (!brokenImages.includes(i)) {
                const imageNumberString = i.toString().padStart(2, '0');
                urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
            }
        }
        return urls;
    }

    return(
        <div>
            <h2>Select Your Photo</h2>
            <div className="imgContainer">
                {urls.map((url) =>
                    <img 
                    src={url}
                    className="thumbnail" 
                    />
                )}
            </div>
        </div>
    )
}