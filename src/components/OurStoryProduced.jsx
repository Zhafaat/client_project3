import './OurStoryProduced.css'

import fashFashion from '../assets/ourStory1.svg'

export default function OurStoryProduced() {
    return (
        <div className="ourStoryProduced">
            <p className='heading-2'>Produced with care</p>
            <div className="ourStoryProduced-body">
                <img className='ourStoryProducedImage' src={fashFashion} alt="Produced" />
                <p className='heading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendu. </p>
            </div>
        </div>
    )
}