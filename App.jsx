import { Page } from './components/Page.jsx';
import { GridOverlay } from './components/GridOverlay.jsx';
import { BentoGrid } from './components/BentoGrid.jsx';
import { MetricCard } from './components/MetricCard.jsx';
import { DateTimePicker } from './components/DateTimePicker.jsx';
import { Card } from './components/Card.jsx';
import { IconCard } from './components/IconCard.jsx';
import { ConnectionCard } from './components/ConnectionCard.jsx';
import { TaskCard } from './components/TaskCard.jsx';
import { TypewriterText } from './components/TypewriterText.jsx';
import { DisplayTextWithIcons } from './components/DisplayTextWithIcons.jsx';
import './App.css';

function App() {
  return (
    <>
      <GridOverlay />
      <Page>
        <div className="app">
          <header className="app__header">
            <div className="app__header-row">
              <h1 className="app__title">Antrop Digital Moodboard</h1>
              <p className="app__subheader">Style exploration: friendly mechanics</p>
            </div>
          </header>

          <section className="app__bento">
            <BentoGrid>
           
              <div className="bento-grid__item--span-4">
                <Card bare>
                  <DisplayTextWithIcons />
                </Card>
              </div>
              <div className="bento-grid__item--span-2">
                <TaskCard active={false} />
              </div>
              <div className="bento-grid__item">
                <IconCard icon="/assets/animations/time.json" />
              </div>
              <div className="bento-grid__item--span-2 bento-grid__item--datetime-picker">
                <DateTimePicker />
              </div>
              <div className="bento-grid__item">
                <IconCard icon="/assets/animations/filter.json" />
              </div>
              <div className="bento-grid__item">
                <IconCard icon="/assets/mechanics/agents/battery-minus.svg" />
              </div>
              <div className="bento-grid__item--span-3">
                <Card fixedHeight>
                  <TypewriterText className="header-lg" />
                </Card>
              </div>
              <div className="bento-grid__item--span-2">
                <ConnectionCard 
                  name="Canva" 
                  logo="/assets/applogos/logo/canva.png"
                  connected={false}
                />
              </div>
              <div className="bento-grid__item--span-2">
                <ConnectionCard 
                  name="Microsoft Outlook" 
                  logo="/assets/applogos/logo/outlook.png"
                  connected={true}
                />
              </div>

              <div className="bento-grid__item">
                <IconCard icon="/assets/animations/cogwheel.json" />
              </div>
              <div className="bento-grid__item">
                <IconCard icon="/assets/mechanics/agents/battery-plus.svg" />
              </div>
              <div className="bento-grid__item">
                <IconCard icon="/assets/animations/idea.json" />
              </div>
              <div className="bento-grid__item">
                <MetricCard 
                  label="Engagement Rate" 
                  value="4.2%"
                />
              </div>
              <div className="bento-grid__item">
                <MetricCard 
                  label="Response Time" 
                  value="< 1 min"
                />
              </div>
              
         
            </BentoGrid>
          </section>
        </div>
      </Page>
    </>
  );
}

export default App;

