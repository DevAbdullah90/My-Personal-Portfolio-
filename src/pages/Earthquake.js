import React from 'react';
import QUERIES, {
    Main,
    Midi,
    Heading,
    Heading2,
    Paragraph,
    Label,
    Heading3,
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

const Earthquake = ({ toggleMode, mode, spread, setDisableScroll }) => {
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
                    id="eira-earthquake-information"
                    style={{
                        marginBottom: 35,
                        mixBlendMode: 'difference',
                        color: 'white',
                        letterSpacing: '-0.5px',
                        fontSize: '40px',
                        fontWeight: 500,
                    }}
                >
                    EIRA – Earthquake Information & Response Assistant
                </Heading>
                <FlexGroup>
                    <div>
                        <Label
                            style={{
                                mixBlendMode: 'difference',
                                color: 'white',
                            }}
                        >
                            Tech Stack
                        </Label>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                                mixBlendMode: 'difference',
                                color: 'white',
                                lineHeight: '32px',
                            }}
                        >
                            Frontend: Streamlit, PyDeck
                            <br/>
                            Backend/Data: Python, Pandas, USGS API
                            <br/>
                            AI: Gemini API
                            <br/>
                            Other Tools: dotenv, Matplotlib
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
                            Full-Stack Developer
                            <br/>
                            AI Integrator
                            <br/>
                            Data Engineer
                            <br/>
                            UX Designer
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
                    EIRA is an AI-powered, Streamlit-based platform that combines real-time earthquake data, interactive analytics, and a natural language assistant. The platform makes earthquake data accessible, easy to understand, and actionable for both individuals and organizations.
                </Paragraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="problem-statement" style={{ marginBottom: 24 }}>
                    Problem Statement
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    Earthquakes are unpredictable and can cause devastating impacts. While real-time seismic data exists, it is often difficult for the public and decision-makers to interpret. Current platforms provide raw numbers and maps but lack interactive insights and AI-powered assistance that can help people quickly understand risks and safety information.
                </DarkerParagraph>
                <DarkerParagraph>
                    The key challenge was: <mark>How can we make earthquake data more accessible and actionable for everyone?</mark>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="goals" style={{ marginBottom: 24 }}>
                    Goals
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Fetch and display real-time earthquake data globally</li>
                        <li>Provide interactive maps & data visualizations for easy understanding</li>
                        <li>Integrate an AI assistant for natural language queries</li>
                        <li>Include safety instructions to guide users during emergencies</li>
                    </ul>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="process-and-approach" style={{ marginBottom: 24 }}>
                    Process & Approach
                </Heading2>
                <Heading3 id="research-planning" style={{ marginBottom: 16 }}>
                    1. Research & Planning
                </Heading3>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Analyzed existing earthquake dashboards and identified gaps</li>
                        <li>Decided on a dual approach: data visualization + AI assistant</li>
                        <li>Designed system architecture integrating USGS API, MapTiler maps, and Gemini AI</li>
                    </ul>
                </DarkerParagraph>

                <Heading3 id="development" style={{ marginBottom: 16 }}>
                    2. Development
                </Heading3>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <strong>Data Layer</strong>
                    <ul>
                        <li>Created functions for structured querying of earthquake data</li>
                        <li>Implemented data processing and analysis pipelines</li>
                    </ul>
                    <br/>
                    <strong>Frontend (Streamlit)</strong>
                    <ul>
                        <li>Built a responsive dashboard with an interactive map</li>
                        <li>Added statistical charts for data visualization</li>
                        <li>Implemented filter controls and real-time updates</li>
                    </ul>
                    <br/>
                    <strong>AI Assistant (EIRA)</strong>
                    <ul>
                        <li>Integrated Gemini API for natural language queries</li>
                        <li>Developed context-aware responses for earthquake data</li>
                        <li>Added safety recommendations based on query context</li>
                    </ul>
                </DarkerParagraph>

                <Heading3 id="testing-iteration" style={{ marginBottom: 16 }}>
                    3. Testing & Iteration
                </Heading3>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Validated accuracy of data fetching from USGS</li>
                        <li>Optimized queries for speed and clarity</li>
                        <li>Refined AI prompts for better, context-aware responses</li>
                    </ul>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="the-solution" style={{ marginBottom: 24 }}>
                    The Solution
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    EIRA provides a comprehensive earthquake intelligence platform with:
                </DarkerParagraph>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Real-time earthquake data feeds (via USGS)</li>
                        <li>Interactive global maps with magnitude-based markers</li>
                        <li>Dynamic analytics: magnitude distribution, depth, and time-series analysis</li>
                        <li>AI-powered chatbot for natural language interaction</li>
                        <li>Built-in earthquake safety tips for quick emergency reference</li>
                    </ul>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="impact-and-results" style={{ marginBottom: 24 }}>
                    Impact and Results
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Turned complex seismic datasets into <mark>actionable insights</mark> for non-experts</li>
                        <li>Enabled users to query earthquake activity conversationally</li>
                        <li>Provided a safety-first approach for emergency preparedness</li>
                        <li>Created an extensible platform for disaster response organizations</li>
                    </ul>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="key-learnings" style={{ marginBottom: 24 }}>
                    Key Learnings
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Combining AI with live data creates highly engaging tools for public use</li>
                        <li>Real-time analytics need efficient data pipelines to avoid delays</li>
                        <li>A good UX ensures users trust and understand critical data</li>
                    </ul>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="future-scope" style={{ marginBottom: 24 }}>
                    Future Scope
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Add push notifications for major earthquakes</li>
                        <li>Integrate SMS/email alerts for local communities</li>
                        <li>Extend AI assistant to provide predictive analytics</li>
                        <li>Multi-language support for global accessibility</li>
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

export { Earthquake }; 