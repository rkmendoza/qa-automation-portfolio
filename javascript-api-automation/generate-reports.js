import reporter from 'cucumber-html-reporter';
import { readFileSync } from 'fs';

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber/cucumber-report.json',
  output: 'reports/cucumber/cucumber-report-advanced.html',
  reportSuiteAsScenarios: true,
  launchReport: true
};

reporter.generate(options);
console.log('📊 Reporte avanzado generado: reports/cucumber/cucumber-report-advanced.html');