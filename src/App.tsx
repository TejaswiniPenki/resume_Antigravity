import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { MetricsSection } from './components/sections/MetricsSection';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ExtraCurricularSection } from './components/sections/ExtraCurricularSection';

function App() {
  return (
    <Layout>
      <div className="space-y-4 md:space-y-8 max-w-5xl mx-auto">
        <Hero />
        <MetricsSection />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <CertificationsSection />
        <ExtraCurricularSection />
      </div>
    </Layout>
  );
}

export default App;
