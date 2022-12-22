import './OurStory.css'

import OurStoryHead from "../components/OurStoryHead";
import OurStoryTopTrends from '../components/OurStoryTopTrends';
import OurStoryProduced from '../components/OurStoryProduced';

export default function OurStory() {
    return (
        <div className="ourStory">
            <OurStoryHead></OurStoryHead>
            <OurStoryTopTrends></OurStoryTopTrends>
            <OurStoryProduced></OurStoryProduced>
        </div>
    )
}