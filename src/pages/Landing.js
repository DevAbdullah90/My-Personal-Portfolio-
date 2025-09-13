import React from 'react';
import {
    Main,
    Midi,
    Heading,
    Paragraph,
    Heading2,
    Heading3,
    LandingMidi,
    ImageProj,
} from '../theming/styles';
import { Link } from 'react-router-dom';
import { Nav, Foot, Experience } from '../components';
import { Spread } from '../components/switch/styles';
import { EiraThumb, InsightMinerThumb, BloodLinkKey, DiamondSalonKey } from '../images';
import { Collage } from '../components/collage';

const experiences = [
    {
        years: '2024 - Present',
        title: 'Full-Stack Developer & AI Enthusiast',
        description: 'Building modern web applications with Next.js, React, and AI integration'
    },
    {
        years: '2023 - 2024',
        title: 'Frontend Developer',
        description: 'Developing responsive web applications with React and TailwindCSS'
    },
    {
        years: '2022 - 2023',
        title: 'Web Developer',
        description: 'Creating interactive UI components and web solutions'
    }
];

const Landing = ({ toggleMode, mode, spread, setDisableScroll }) => {
    const spreadClass =
        spread === 'first'
            ? 'growBlack'
            : spread === 'second'
            ? 'growWhite'
            : '';

    return (
        <Main
            style={{
                position: 'relative',
                height: setDisableScroll ? '100vh' : 'unset',
            }}
        >
            <Spread className={spreadClass} />
            <Nav mode={mode} toggleMode={toggleMode} />
            <LandingMidi style={{ mixBlendMode: 'difference', paddingTop: 64 }}>
                <Heading
                    style={{
                        mixBlendMode: 'difference',
                        color: 'white',
                    }}
                >
                    I'm Abdullah Kashif — a Full-Stack Developer & AI Enthusiast crafting modern digital experiences.
                </Heading>
            </LandingMidi> 

            <LandingMidi style={{ paddingTop: 32 }}>
                <Collage />
            </LandingMidi> 

            <LandingMidi style={{mixBlendMode: 'difference', margin: '0 auto', paddingBottom: 0 }}>
                <Heading2  
                    id="case-studies"
                    style={{
                        mixBlendMode: 'difference',
                        color: 'white',
                    }}>
                    Case studies
                </Heading2>
            </LandingMidi>

            <LandingMidi style={{paddingTop: 20, margin: '0 auto' }}>
                <Link to='diamond-salon'><ImageProj $image={DiamondSalonKey} /></Link>
            </LandingMidi>
            <LandingMidi style={{mixBlendMode: 'difference', color: 'white', paddingTop: 0, margin: '0 auto' }}>
                <Heading3
                    style={{
                        textAlign: 'left',
                        margin: 0,
                        padding: 0,
                        mixBlendMode: 'difference',
                        color: 'white'
                    }}
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}
                >
                    <Link to='diamond-salon'>Diamond Salon – Modern Salon & Spa Website</Link>
                </Heading3>

                <Paragraph style={{ marginTop: '-4px', mixBlendMode: 'difference',
                        color: 'white', opacity: .4 }}>
                    Full-stack salon booking platform with real-time scheduling and payments
                </Paragraph>
            </LandingMidi>

            <LandingMidi style={{paddingTop: 20, margin: '0 auto' }}>
                <Link to='earthquake'><ImageProj $image={EiraThumb} /></Link>
            </LandingMidi>
            <LandingMidi style={{mixBlendMode: 'difference', color: 'white', paddingTop: 0, margin: '0 auto' }}>
                <Heading3
                    style={{
                        textAlign: 'left',
                        margin: 0,
                        padding: 0,
                        mixBlendMode: 'difference',
                        color: 'white'
                    }}
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}
                >
                    <Link to='earthquake'>EIRA – Earthquake Information & Response Assistant</Link>
                </Heading3>

                <Paragraph style={{ marginTop: '-4px', mixBlendMode: 'difference',
                        color: 'white', opacity: .4 }}>
                    AI-powered platform for real-time earthquake data and analysis
                </Paragraph>
            </LandingMidi>

            <LandingMidi style={{paddingTop: 20, margin: '0 auto' }}>
                <Link to='insight-miner'><ImageProj $image={InsightMinerThumb} /></Link>
                </LandingMidi>
                <LandingMidi style={{mixBlendMode: 'difference', color: 'white', paddingTop: 0, margin: '0 auto' }}>
                <Heading3
                    style={{
                        textAlign: 'left',
                        margin: 0,
                        padding: 0,
                        mixBlendMode: 'difference',
                        color: 'white'
                    }}
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}
                >
                    <Link to='insight-miner'>InsightMiner – AI-Powered Market Research</Link>
                </Heading3>

                <Paragraph style={{ marginTop: '-4px', mixBlendMode: 'difference',
                        color: 'white', opacity: .4 }}>
                    A platform leveraging AI to automate market research and competitor analysis
                </Paragraph>
            </LandingMidi>

            <LandingMidi style={{paddingTop: 20, margin: '0 auto' }}>
                <Link to='bloodlink'><ImageProj $image={BloodLinkKey} /></Link>
            </LandingMidi>
            <LandingMidi style={{mixBlendMode: 'difference', color: 'white', paddingTop: 0, margin: '0 auto' }}>
                <Heading3
                    style={{
                        textAlign: 'left',
                        margin: 0,
                        padding: 0,
                        mixBlendMode: 'difference',
                        color: 'white'
                    }}
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}
                >
                    <Link to='bloodlink'>BloodLink – Connecting Donors and Patients</Link>
                </Heading3>

                <Paragraph style={{ marginTop: '-4px', mixBlendMode: 'difference',
                        color: 'white', opacity: .4 }}>
                    A life-saving platform connecting blood donors with patients in real-time
                </Paragraph>
            </LandingMidi>

            <Midi style={{ paddingTop: '84px', margin: '0 auto' }}>
                <Heading2  
                    id="experience"
                >
                    Experience
                </Heading2>
                <Experience experiences={experiences} />
            </Midi>

            <LandingMidi style={{ marginBottom: '10px' }}>
                <Foot />
            </LandingMidi>
        </Main>
    );
};

export { Landing };