import React, { Component } from 'react';
import '../styles/ProjectList.css';
import Project from './Project';
import Wryss from '../resources/wryss.jpg';
import Heartful from '../resources/heartful.png';
import HackNY from '../resources/hackny.png';
import ConUHacks from '../resources/conuhacks_logo.svg';
import Robohacks from '../resources/robohacks.png';
import AdidasMoments from '../resources/adidas_moments_logo.png';
import CaptionThis from '../resources/caption_this.png';
import RefugeeCenter from '../resources/refugee_logo.png';
import YHack from '../resources/yhack.png';
import RUDating from '../resources/rudating.png';

class ProjectList extends Component {
    render() {
        return (
            <div className="project-list-container" id="link-projects">
                <h1 className="project-list-title">Projects</h1>
                <div className="project-list-line"></div>
                <ul className="project-list">
                    <li>
                        <Project 
                            title="Bonjour-Hi" 
                            description="Multilingual video chat rooms, with voice translation for group calls with participants speaking different languages. 1st place winner of Facebook's Mission at YHack 2018."
                            image={YHack}
                            link="https://github.com/ZacharyBys/bonjour-hi"
                        />
                    </li>
                    <li>
                        <Project 
                            title="Heartful" 
                            description="Displays your most stressful locations on a map using Fitbit to prevent heart disease. It also reacts by sending an emergency text if you are having a heart attack."
                            image={Heartful}
                            link="https://devpost.com/software/heartful"
                        />
                    </li>
                    <li>
                        <Project 
                            title="WryssBot" 
                            description="All in one translation chat-bot. Uses IBM Watson to translate images, text, and voice. Won 2nd overall and the IBM prize at ConUHacks III."
                            image={Wryss}
                            link="https://devpost.com/software/wryssbot"
                        />
                    </li>
                    <li>
                        <Project 
                            title="Twitch Plays: Horror House" 
                            description="Interactive haunted house streamed on Twitch, the viewers get to decide how, when, and where to scare the streamer. Won most fun hack at HackNY 2018"
                            image={HackNY}
                            link="https://devpost.com/software/twitch-plays-horror-house"
                        />
                    </li>
                    <li>
                        <Project 
                            title="ConUHacks IV Website" 
                            description="Rebuilt the ConUHacks website for the 2019 iteration of Montreal's largest hackathon. Currently VP Technology for the team."
                            image={ConUHacks}
                            link="https://conuhacks.io/#/"
                        />
                    </li>
                    <li>
                        <Project 
                            title="PeriFold" 
                            description="The PeriFold machine can fold your shirts for you, and displays several emotions based on your interactions with it. Won 1st place at Robohacks 2018"
                            image={Robohacks}
                            link="https://devpost.com/software/perifold-machine-pfm"
                        />
                    </li>
                    <li>
                        <Project 
                            title="Adidas Moments" 
                            description="Allows fans to upload reactions to goals and events during a soccer game, and revisit the moments with the community in a timeline. Built at FCBayern Hackdays in Munich."
                            image={AdidasMoments}
                            link="https://github.com/ZacharyBys/adidas-challenge"
                        />
                    </li>
                    <li>
                        <Project 
                            title="Caption This" 
                            description="Online crowdsourcing caption platform, where users can submit moments, the community helps them find the best caption."
                            image={CaptionThis}
                            link="https://github.com/justin-cotarla/CaptionThis"
                        />
                    </li>
                    <li>
                        <Project 
                            title="RUDating" 
                            description="Web app for speed dating, that uses GCP to analyze conversational success. Users are matched and have 60 seconds to impress."
                            image={RUDating}
                            link="https://github.com/ZacharyBys/rudating"
                        />
                    </li>
                    <li>
                        <Project 
                            title="Avalon" 
                            description="Allows refugee centers to track refugees, update their information when needed, and receive notifications from them. Won 2nd overall at Blochacks 2017."
                            image={RefugeeCenter}
                            link="https://github.com/ZacharyBys/Avalon"
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

export default ProjectList;
/*fuck you jay*/