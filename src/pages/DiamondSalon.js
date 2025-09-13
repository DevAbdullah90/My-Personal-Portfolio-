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

const DiamondSalon = ({ toggleMode, mode, spread, setDisableScroll }) => {
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
                    id="diamond-salon"
                    style={{
                        marginBottom: 35,
                        mixBlendMode: 'difference',
                        color: 'white',
                        letterSpacing: '-0.5px',
                        fontSize: '40px',
                        fontWeight: 500,
                    }}
                >
                    Diamond Salon – Modern Salon & Spa Website
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
                            Frontend: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
                            <br/>
                            Backend: Next.js API Routes, MongoDB, Stripe API, SendGrid
                            <br/>
                            Auth & Security: JWT, bcrypt, secure cookies
                            <br/>
                            Deployment: Vercel
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
                            UI/UX Designer
                            <br/>
                            Backend Engineer
                            <br/>
                            DevOps
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
                    Diamond Salon is a full-stack salon booking and management platform that allows clients to easily book services, pay online, and receive confirmations — while giving salon admins full control over services, bookings, and staff.
                </Paragraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="problem-statement" style={{ marginBottom: 24 }}>
                    Problem Statement
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    Many salons and spas still rely on phone calls, walk-ins, or manual scheduling, which leads to double bookings, missed appointments, and poor customer experience. In the digital era, customers expect a smooth online booking system with instant confirmation and integrated payments.
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="goals" style={{ marginBottom: 24 }}>
                    Goals
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Provide a modern, responsive website that reflects a salon's premium brand</li>
                        <li>Enable customers to book services online with real-time availability</li>
                        <li>Integrate secure online payments (Stripe)</li>
                        <li>Add automated email notifications for both customers and admins</li>
                        <li>Provide an admin dashboard for managing bookings, users, and services</li>
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
                        <li>Interviewed small salon owners to understand pain points</li>
                        <li>Researched booking systems used by competitors</li>
                        <li>Created user flows for customers and admins</li>
                    </ul>
                </DarkerParagraph>

                <Heading3 id="development" style={{ marginBottom: 16 }}>
                    2. Development
                </Heading3>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <strong>Frontend (Next.js 14 + TypeScript + Tailwind + Framer Motion)</strong>
                    <ul>
                        <li>Built responsive landing pages & booking forms</li>
                        <li>Added smooth animations for a luxury brand feel</li>
                        <li>Integrated Stripe Elements for checkout</li>
                    </ul>
                    <br/>
                    <strong>Backend (Next.js API Routes + MongoDB + Stripe + SendGrid)</strong>
                    <ul>
                        <li>Booking API with real-time availability checks</li>
                        <li>Secure authentication with JWT & bcrypt</li>
                        <li>Email notifications using SendGrid</li>
                    </ul>
                    <br/>
                    <strong>Admin Panel</strong>
                    <ul>
                        <li>Manage services, bookings, and user profiles</li>
                        <li>Staff management (team member profiles)</li>
                    </ul>
                </DarkerParagraph>

                <Heading3 id="testing-iteration" style={{ marginBottom: 16 }}>
                    3. Testing & Iteration
                </Heading3>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Tested double booking edge cases</li>
                        <li>Validated secure payments with Stripe test mode</li>
                        <li>Ensured mobile-first design worked across devices</li>
                    </ul>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="the-solution" style={{ marginBottom: 24 }}>
                    The Solution
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    Diamond Salon delivers:
                </DarkerParagraph>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>A modern, responsive website for salon discovery</li>
                        <li>A seamless booking flow (service selection → scheduling → payment → confirmation)</li>
                        <li>Stripe integration for secure and instant payments</li>
                        <li>SendGrid-powered email notifications for confirmations & inquiries</li>
                        <li>Admin dashboard for managing salon operations</li>
                    </ul>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="impact-and-results" style={{ marginBottom: 24 }}>
                    Impact and Results
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Transformed the customer booking experience from manual calls → <mark>5-step digital flow</mark></li>
                        <li>Reduced booking errors & double scheduling by automating availability checks</li>
                        <li>Helped salon owners save time managing customers while projecting a premium online presence</li>
                    </ul>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="key-learnings" style={{ marginBottom: 24 }}>
                    Key Learnings
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Real-world booking systems must handle conflicts and concurrency carefully</li>
                        <li>UX is crucial: users expect frictionless checkout similar to e-commerce sites</li>
                        <li>Email & payment integrations require robust error handling to ensure reliability</li>
                    </ul>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="future-scope" style={{ marginBottom: 24 }}>
                    Future Scope
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Add loyalty programs & memberships</li>
                        <li>Enable multi-branch support for salon chains</li>
                        <li>Add push notifications / SMS reminders</li>
                        <li>Build a mobile app companion</li>
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

export { DiamondSalon }; 