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

const InsightMiner = ({ toggleMode, mode, spread, setDisableScroll }) => {
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
                    id="insightminer-ai-powered-market-research"
                    style={{
                        marginBottom: 35,
                        mixBlendMode: 'difference',
                        color: 'white',
                        letterSpacing: '-0.5px',
                        fontSize: '40px',
                        fontWeight: 500,
                    }}
                >
                    InsightMiner – AI-Powered Market Research Platform
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
                            Frontend: Next.js, Tailwind CSS, ShadCN UI
                            <br/>
                            Backend: FastAPI, Python, AI Agents
                            <br/>
                            Other Tools: TypeScript, Pydantic, Uvicorn
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
                            System Architect
                            <br/>
                            UI/UX Designer
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
                    InsightMiner is an AI-powered platform that makes market research accessible, fast, and intelligent. It leverages AI agents to automate competitor analysis, generate industry reports, and provide actionable insights with minimal user input.
                </Paragraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="problem-statement" style={{ marginBottom: 24 }}>
                    Problem Statement
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    Businesses, especially startups and SMEs, struggle with time-consuming and expensive market research. Traditional methods often require manual data collection, hiring consultants, or buying costly reports — all of which can slow decision-making and drain resources.
                </DarkerParagraph>
                <DarkerParagraph>
                    The key challenge was: <mark>How can we make comprehensive market research accessible, fast, and affordable for businesses of all sizes?</mark>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="goals" style={{ marginBottom: 24 }}>
                    Goals
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Automate market research & competitor analysis</li>
                        <li>Provide real-time insights with clear visualizations</li>
                        <li>Enable businesses to make smarter decisions faster</li>
                        <li>Build a system that is scalable, modern, and user-friendly</li>
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
                        <li>Studied how businesses currently conduct market research</li>
                        <li>Defined what AI agents should handle: market trends, TAM, competitor insights, SWOT</li>
                        <li>Designed a modular architecture to allow future improvements</li>
                    </ul>
                </DarkerParagraph>

                <Heading3 id="development" style={{ marginBottom: 16 }}>
                    2. Development
                </Heading3>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <strong>Backend (FastAPI + Python)</strong>
                    <ul>
                        <li>Created specialized AI agents (Market Agent, Competitor Agent, SWOT Agent)</li>
                        <li>Built endpoints for data processing and communication</li>
                    </ul>
                    <br/>
                    <strong>Frontend (Next.js + TailwindCSS)</strong>
                    <ul>
                        <li>Developed a modern dashboard with interactive components</li>
                        <li>Integrated charts and data visualizations</li>
                        <li>Added PDF export for reports</li>
                    </ul>
                </DarkerParagraph>

                <Heading3 id="testing-iteration" style={{ marginBottom: 16 }}>
                    3. Testing & Iteration
                </Heading3>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Tested real-time performance of AI agents</li>
                        <li>Improved accuracy of insights by refining prompts & logic</li>
                        <li>Optimized UI for usability and responsiveness</li>
                    </ul>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="the-solution" style={{ marginBottom: 24 }}>
                    The Solution
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    InsightMiner delivers:
                </DarkerParagraph>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>AI-powered market analysis reports</li>
                        <li>Insights on top competitors</li>
                        <li>Auto-generated SWOT analysis</li>
                        <li>Interactive, responsive dashboard with PDF export</li>
                        <li>Real-time updates with modern UI</li>
                    </ul>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="impact-and-results" style={{ marginBottom: 24 }}>
                    Impact and Results
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Reduced the time to generate a comprehensive market report from <mark>weeks to minutes</mark></li>
                        <li>Enabled small businesses to access affordable insights without hiring external consultants</li>
                        <li>Scalable design allows the platform to expand into new industries and datasets</li>
                    </ul>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="key-learnings" style={{ marginBottom: 24 }}>
                    Key Learnings
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Building AI-driven tools requires balancing automation with clarity — users need both intelligence and simple explanations</li>
                        <li>Designing for scalability early helps when expanding features later</li>
                        <li>User experience is as important as AI power — clean UI builds trust in the insights</li>
                    </ul>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="future-scope" style={{ marginBottom: 24 }}>
                    Future Scope
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Integration with real-world APIs (Google Trends, Crunchbase, etc.)</li>
                        <li>Multi-language support for global businesses</li>
                        <li>Adding predictive analytics (forecasting market trends)</li>
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

export { InsightMiner }; 