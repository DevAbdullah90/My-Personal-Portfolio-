import React from 'react';
import { useDarkMode } from './hooks';
import { ThemeProvider } from 'styled-components';
import lightTheme, { darkTheme } from './theming/themeContext';
import GlobalStyles from './theming/global';
import { AppWrapper, Landing, BloodLink, InsightMiner, DiamondSalon, Earthquake } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    const [
        mode,
        toggleMode,
        spread,
        componentMounted,
        setDisableScroll,
    ] = useDarkMode();
    if (!componentMounted) {
        return <div />;
    }

    return (
        <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path='/'
                        element={
                            <AppWrapper>
                                <Landing
                                    setDisableScroll={setDisableScroll}
                                    spread={spread}
                                    mode={mode}
                                    toggleMode={toggleMode}
                                />
                            </AppWrapper>
                        }
                    />
                    <Route
                        path='/bloodlink'
                        element={
                            <AppWrapper>
                                <BloodLink   
                                    setDisableScroll={setDisableScroll}  
                                    spread={spread}
                                    mode={mode}
                                    toggleMode={toggleMode}
                                /> 
                            </AppWrapper>
                        }
                    />
                    <Route
                        path='/insight-miner'
                        element={
                            <AppWrapper>
                                <InsightMiner   
                                    setDisableScroll={setDisableScroll}  
                                    spread={spread}
                                    mode={mode}
                                    toggleMode={toggleMode}
                                /> 
                            </AppWrapper>
                        }
                    />
                    <Route
                        path='/diamond-salon'
                        element={
                            <AppWrapper>
                                <DiamondSalon   
                                    setDisableScroll={setDisableScroll}  
                                    spread={spread}
                                    mode={mode}
                                    toggleMode={toggleMode}
                                /> 
                            </AppWrapper>
                        }
                    />
                    <Route
                        path='/earthquake'
                        element={
                            <AppWrapper>
                                <Earthquake   
                                    setDisableScroll={setDisableScroll}  
                                    spread={spread}
                                    mode={mode}
                                    toggleMode={toggleMode}
                                /> 
                            </AppWrapper>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export { App };
