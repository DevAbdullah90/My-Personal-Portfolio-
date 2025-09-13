import React from 'react';
import QUERIES, {
    Main,
    Midi,
    Heading,
    Heading2,
    Paragraph,
    Label,
    Quote,
} from '../theming/styles';
import styled from 'styled-components';
import { Nav, Foot } from '../components';
import { Spread } from '../components/switch/styles';
import Outline from '../components/Outline';

const FlexGroup = styled.div`
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;
    background-color:rgba(255, 255, 255, 0.02);
    padding: 30px 30px;
    border-radius: 10px;

    div {
        width: 100%;
    
        @media (${QUERIES.medium}) {
            width: 45%;
        }
    }

    @media (${QUERIES.large}) {
        flex-wrap: nowrap;
        gap: 50px;
        padding: 30px 50px;
        margin: 60px 0;
    }
`;

const DarkerParagraph = styled(Paragraph)`
    color: ${({ theme }) => theme.textMain};
    opacity: .8;
    ul {
        margin-top: 10px;
        margin-bottom: 10px;
        list-style-type: disc;
        margin-left: 15px;
        li {
            margin-bottom: 6px;
        }
    }
    mark {
        font-weight: 500;
        color: ${({ theme }) => theme.textMain} !important;
        opacity: 1 !important;
        background-color: rgba(173, 173, 173, 0.1);
        padding: 2px 4px;
        border-radius: 4px;
    }

    strong {
        font-weight: 500;
        color: ${({ theme }) => theme.textMain} !important;
        opacity: 1 !important;
    }
`;

const BloodLink = ({ toggleMode, mode, spread, setDisableScroll }) => {
    const spreadClass =
        spread === 'first'
            ? 'growBlack'
            : spread === 'second'
            ? 'growWhite'
            : '';

    return (
        <Main style={{
            position: 'relative',
            overflow: setDisableScroll ? 'hidden' : 'null',
            height: setDisableScroll ? '100vh' : 'unset',
        }}>
            <Outline />
            <Spread className={spreadClass} />
            <Nav mode={mode} toggleMode={toggleMode} />
            <Midi style={{ mixBlendMode: 'difference' }}>
                <Label
                    style={{
                        mixBlendMode: 'difference',
                        color: 'white',
                    }}
                >
                    Case Study
                </Label>
                
                <Heading
                    id="bloodlink-connecting-donors-and-patients"
                    style={{
                        marginBottom: 35,
                        mixBlendMode: 'difference',
                        color: 'white',
                        letterSpacing: '-0.5px',
                        fontSize: '40px',
                        fontWeight: 500,
                    }}
                >
                    BloodLink – Connecting Donors and Patients in Real Time
                </Heading>
                <FlexGroup>
                    <div>
                        <Label
                            style={{
                                mixBlendMode: 'difference',
                                color: 'white',
                            }}
                        >
                            Timeline
                        </Label>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                                mixBlendMode: 'difference',
                                color: 'white',
                                lineHeight: '32px',
                            }}
                        >
                            January 2024, <span style={{opacity: 0.5}}>Research & Interviews</span>
                            <br/>
                            February 2024, <span style={{opacity: 0.5}}>Prototyping & Testing</span>
                            <br/>
                            March 2024, <span style={{opacity: 0.5}}>Beta Testing</span>
                            <br/>
                            April 2024, <span style={{opacity: 0.5}}>Final MVP Shipped</span>
                        </Paragraph>
                    </div>
                    <div>
                        <Label
                            style={{
                                mixBlendMode: 'difference',
                                color: 'white',
                            }}
                        >
                            My Role
                        </Label>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                                mixBlendMode: 'difference',
                                color: 'white',
                                lineHeight: '32px',
                            }}
                        >
                            Lead Designer – UX/UI, wireframes, prototypes
                            <br/>
                            Lead Researcher – Interviews, testing, insights
                            <br/>
                            Developer – Built MVP with Next.js + Tailwind
                        </Paragraph>
                    </div>
                </FlexGroup>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        mixBlendMode: 'difference',
                        color: 'white',
                        opacity: .8,
                    }}
                >
                    BloodLink is a platform designed to connect blood donors with patients and hospitals in urgent need. Many lives are lost due to delays in finding the right blood type at the right time. This case study shows how I led the research, design, and prototyping of a life-saving application, balancing urgency, trust, and usability.
                </Paragraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="the-challenge" style={{ marginBottom: 24 }}>
                    The Challenge
                </Heading2>
                <Quote>
                    "I needed blood for my relative, but it took hours of calling and posting on WhatsApp groups before we found a donor."
                </Quote>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    This is a common problem in Pakistan and many developing countries. Despite having many willing donors, there is no centralized, efficient way to connect them with patients in real time.
                </DarkerParagraph>
                <DarkerParagraph>
                    The key challenge was: <mark>How can we build a system that ensures fast, reliable, and safe blood donation connections?</mark>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="discovery-phase" style={{ marginBottom: 24 }}>
                    Discovery Phase
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    I started with interviews and surveys of students, hospital staff, and donors. Research revealed several major pain points:
                </DarkerParagraph>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li><strong>Manual Process:</strong> Patients rely on phone calls, social media, or word-of-mouth.</li>
                        <li><strong>Trust Issues:</strong> Donors fear scams or misuse of their personal information.</li>
                        <li><strong>No Real-Time System:</strong> Hospitals don't have direct integration with donors.</li>
                        <li><strong>Urgency Gap:</strong> Every minute matters in emergencies, but current methods waste time.</li>
                    </ul>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="prototype-and-insights" style={{ marginBottom: 24 }}>
                    Prototype & Key Insights
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    I designed a low-fidelity prototype with core flows:
                </DarkerParagraph>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Emergency Request Form → Patients enter details (blood type, location, urgency)</li>
                        <li>Donor Matching System → Notifies nearby verified donors</li>
                        <li>Donor Dashboard → Donors manage availability, history, and badges</li>
                    </ul>
                </DarkerParagraph>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    From testing the prototype with users:
                </DarkerParagraph>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Donors wanted recognition (badges, contribution history)</li>
                        <li>Patients needed speed + trust (verified donors only)</li>
                        <li>Hospitals wanted an admin panel to oversee requests</li>
                    </ul>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="final-solution" style={{ marginBottom: 24 }}>
                    Final Solution
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    The final design included three main components:
                </DarkerParagraph>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li><strong>Patient App</strong> → Simple emergency request with geolocation</li>
                        <li><strong>Donor App</strong> → Notifications for nearby requests, availability toggle, badges</li>
                        <li><strong>Hospital Panel</strong> → Manage donors, approve requests, track history</li>
                    </ul>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="impact-and-results" style={{ marginBottom: 24 }}>
                    Impact and Results
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    The platform showed significant improvements in blood donation efficiency:
                </DarkerParagraph>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Average donor response time dropped from <mark>3+ hours to under 30 minutes</mark> in tests</li>
                        <li>Donors reported higher motivation due to badges + recognition system</li>
                        <li>Hospitals appreciated the verification workflow, which increased trust</li>
                    </ul>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="reflections" style={{ marginBottom: 24 }}>
                    Reflections
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    This project taught me several valuable lessons:
                </DarkerParagraph>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Trust is as important as speed in healthcare apps</li>
                        <li>Gamification can encourage consistent donor participation</li>
                        <li>Collaboration with hospitals is crucial for adoption</li>
                    </ul>
                </DarkerParagraph>
            </Midi>

            <Midi style={{backgroundColor: 'black', borderRadius: 10, padding: 30, marginTop: 64, marginBottom: 64}}>
                <Heading2 id="contact" style={{ color: 'white' }}>
                    Built With ❤️ by Abdullah
                </Heading2>
                <DarkerParagraph style={{ color: 'white' }}>
                    Email: <a href="mailto:devabdulah91@gmail.com" style={{color: 'white'}}>devabdulah91@gmail.com</a>
                    <br/>
                    GitHub: <a href="https://github.com/DevAbdullah90" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>DevAbdullah90</a>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 20 }}>
                <Foot />
            </Midi>
        </Main>
    );
};

export { BloodLink }; 