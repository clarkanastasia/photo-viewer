// import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {App} from './components/App';
import * as renderer from 'react-test-renderer';

describe('The app component', () => {
    test('should match snapshot with default state', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})

describe('The photo viewer component', () => {
    test('renders React Photo Viewer heading', () => {
        const { getByText } = render(<App />);
        const textElement = getByText(/React Photo Viewer/i);
        expect(textElement).toBeInTheDocument();
    });
})

describe('The image selector component', () => {
    test('first image URL as expected', () => {
        const { getByAltText } = render(<App/>);
        const img = getByAltText(/(Image 1$)/i);
        expect(img).toHaveAttribute('src', 'https://picsum.photos/id/600/1600/900.jpg');
    });

    test('changes cover image on click', () =>{
        const {getByAltText} = render(<App />)
        const img = getByAltText(/(cover image)/i);
        const otherImg = getByAltText(/(Image 1$)/i);
        fireEvent.click(otherImg);
        expect(img).toHaveAttribute('src', 'https://picsum.photos/id/600/1600/900.jpg')
    });

    test('URLs do not include broken images', () => {
        const { getAllByAltText } = render(<App/>);
        const img = getAllByAltText(/(Image)/i);
        img.forEach(image => {
        expect(image).not.toHaveAttribute('src', 'https://picsum.photos/id/601/1600/900.jpg');
        expect(image).not.toHaveAttribute('src', 'https://picsum.photos/id/624/1600/900.jpg');
        expect(image).not.toHaveAttribute('src', 'https://picsum.photos/id/632/1600/900.jpg');
        expect(image).not.toHaveAttribute('src', 'https://picsum.photos/id/636/1600/900.jpg');
        expect(image).not.toHaveAttribute('src', 'https://picsum.photos/id/644/1600/900.jpg');
        expect(image).not.toHaveAttribute('src', 'https://picsum.photos/id/647/1600/900.jpg');
        })
    });
})
