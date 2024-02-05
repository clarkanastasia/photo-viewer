import '../css/ImgSelector.css';
import {useState} from 'react';

export function ImgSelector(){

    const brokenImages = [
        1, 24, 32, 36, 44, 47
    ];
    const urls = getImageUrls();

    const [selectedUrl, setSelectedUrl] = useState("");

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
    const handleClick = (url: any) => {
        setSelectedUrl(url)
    }
    return(
        <div>
            <h2>Select Your Photo</h2>
            <h3>The current url is: {selectedUrl}</h3>
            <div className="imgContainer">
                {urls.map((url, index) => (
                    <img
                    key= {index} 
                    src= {url}
                    className= {`thumbnail ${selectedUrl === url? 'border': ''}`}
                    onClick={() => handleClick(url)}
                    />
                ))}
            </div>
        </div>
    )
}