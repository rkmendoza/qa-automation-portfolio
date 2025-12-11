# 🚀 QA Automation Portfolio

![GitHub Actions](https://img.shields.io/github/actions/workflow/status/rkmendoza/qa-automation-portfolio/ci-cd.yml?branch=main)
![SonarCloud Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=rkmendoza_qa-automation-portfolio&metric=alert_status)
![SonarCloud Coverage](https://sonarcloud.io/api/project_badges/measure?project=rkmendoza_qa-automation-portfolio&metric=coverage)
![SonarCloud Bugs](https://sonarcloud.io/api/project_badges/measure?project=rkmendoza_qa-automation-portfolio&metric=bugs)
![SonarCloud Security](https://sonarcloud.io/api/project_badges/measure?project=rkmendoza_qa-automation-portfolio&metric=security_rating)

## 📊 Portfolio Overview

Professional QA Automation portfolio showcasing expertise in API testing, UI automation, and DevOps practices. This repository demonstrates industry-standard automation frameworks, CI/CD pipelines, and code quality practices.

## 🛠 Tech Stack

### 🔧 Testing Frameworks
- **JavaScript API Testing**: Cucumber.js + Mocha + Chai
- **TypeScript API Testing**: Coming soon
- **UI Automation**: Playwright, Selenium, Cypress (Coming soon)
- **Mobile Automation**: Appium (Coming soon)

### ⚙️ DevOps & Quality
- **CI/CD**: GitHub Actions
- **Code Quality**: SonarCloud
- **Package Manager**: npm
- **Version Control**: Git

## 📁 Project Structure

```
qa-automation-portfolio/
├── 📂 javascript-api-automation/     # ✅ Current Implementation
│   ├── api-tests/
│   │   ├── features/                 # BDD Feature files
│   │   ├── step_definitions/         # Test implementations
│   │   └── support/                  # Test configuration
│   ├── tests/                        # Mocha test suites
│   ├── reports/                      # Test execution reports
│   └── package.json
├── 📂 typescript-api-automation/     # 🚀 Coming Soon
├── 📂 ui-automation/                # 🚀 Coming Soon
├── 📂 mobile-automation/            # 🚀 Coming Soon
├── 📂 ci-cd-pipelines/              # CI/CD configurations
├── 📂 .github/workflows/            # GitHub Actions
└── 📂 reports/                      # Consolidated reports
```

## 🎯 Implemented Features

### ✅ JavaScript API Automation
- **Restful Booker API Tests** - Complete CRUD operations testing
- **JSONPlaceholder Tests** - Public API validation testing
- **Authentication Tests** - Security and auth flow testing
- **BDD Methodology** - Behavior Driven Development with Cucumber
- **Multiple Report Formats** - HTML, JSON, advanced reporting

### ✅ DevOps & Quality Gates
- **GitHub Actions CI/CD** - Automated testing on every push
- **SonarCloud Integration** - Code quality and security analysis
- **Quality Gates** - Automated quality checks
- **Test Artifacts** - Automated report generation

## 📈 Quality Metrics

| Metric | Status | Target |
|--------|---------|---------|
| **Security Rating** | A | A |
| **Reliability Rating** | A | A |
| **Maintainability** | A | A |
| **Code Coverage** | Monitoring | > 80% |
| **Bugs** | 0 | 0 |
| **Vulnerabilities** | 0 | 0 |
| **Code Smells** | Monitoring | < 10 |

## 🚀 Quick Start

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### Running JavaScript API Tests
```bash
cd javascript-api-automation

# Install dependencies
npm install

# Run BDD tests with Cucumber
npm run test:bdd

# Run Mocha tests
npm test

# Generate test reports
npm run test:bdd:reports

# Run linting
npm run lint
```

### Viewing Reports
After test execution, reports are available in:
- `javascript-api-automation/reports/cucumber/` - Cucumber HTML reports
- `javascript-api-automation/reports/` - Additional test artifacts

## 🔧 CI/CD Pipeline

The GitHub Actions workflow automatically:
- ✅ Runs on every push to main/develop branches
- ✅ Executes tests on Node.js 20.x
- ✅ Performs code quality analysis with SonarCloud
- ✅ Generates and uploads test reports
- ✅ Enforces quality gates

## 🎯 Roadmap

### 🚀 Coming Soon
- [ ] **TypeScript API Automation** - Type-safe API testing
- [ ] **Playwright Integration** - Modern UI testing
- [ ] **Selenium WebDriver** - Enterprise UI automation
- [ ] **Cypress Tests** - Developer-friendly UI testing
- [ ] **Appium Mobile Testing** - Cross-platform mobile automation
- [ ] **Performance Testing** - Load and stress testing
- [ ] **Security Testing** - OWASP security testing

### 🔄 In Progress
- [x] **JavaScript API Automation** - ✅ Complete
- [x] **GitHub Actions CI/CD** - ✅ Complete
- [x] **SonarCloud Integration** - ✅ Complete

## 📊 Live Demos

- **GitHub Actions**: [View Workflow Runs](https://github.com/rkmendoza/qa-automation-portfolio/actions)
- **SonarCloud Analysis**: [View Quality Dashboard](https://sonarcloud.io/project/overview?id=rkmendoza_qa-automation-portfolio)
- **Test Reports**: Available in workflow artifacts

## 🤝 Contributing

This portfolio is continuously evolving. Feel free to:
- Suggest new testing frameworks
- Report issues or improvements
- Share best practices

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Connect with me:** [GitHub](https://github.com/rkmendoza) | [LinkedIn](https://linkedin.com/in/rkmendoza) | [Portfolio](https://rkmendoza.dev)

*Last updated: December 2025*
