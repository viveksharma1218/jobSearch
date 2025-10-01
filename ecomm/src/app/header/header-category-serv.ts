import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderCategoryServ {
  jobTitles :string[]= [
      "Senior Software Engineer", "Mid-Level Web Developer", "Junior Frontend Developer",
      "Backend API Developer", "Full Stack Engineer", "Cloud Solutions Architect",
      "DevOps Specialist", "Mobile Application Developer", "UI Developer",
      "UX Engineer", "Technical Lead", "Software Architect", "QA Automation Engineer",
      "Security Analyst", "Data Engineer", "Machine Learning Engineer",
      "Systems Administrator", "Database Developer", "API Developer",
      "Integration Specialist", "Platform Engineer", "Infrastructure Engineer",
      "Site Reliability Engineer", "Frontend Architect", "Backend Specialist",
      "Full Stack Developer", "JavaScript Engineer", "TypeScript Developer",
      "React Specialist", "Angular Expert", "Vue.js Developer", "Node.js Engineer",
      "Python Developer", "Java Developer", "C# .NET Developer", "PHP Developer",
      "Ruby Developer", "Go Developer", "Rust Developer", "Swift Developer",
      "Kotlin Developer", "Flutter Developer", "React Native Developer",
      "WordPress Developer", "Shopify Expert", "Magento Developer",
      "Drupal Developer", "Joomla Developer", "Laravel Developer",
      "Django Developer", "Spring Boot Developer", "Express.js Developer",
      "Next.js Developer", "Nuxt.js Developer", "Svelte Developer",
      "Ember.js Developer", "Backbone.js Developer", "Meteor Developer"
    ];
    companies:string[] = [
      "TechCorp", "InnovateLabs", "DigitalCraft", "WebSolutions", "AppFactory",
      "CodeMasters", "DevHub", "SoftwareHouse", "TechGiant", "StartUpZone",
      "FutureTech", "NextGen Systems", "CloudFirst", "DataDriven", "AIWorks",
      "BlockchainTech", "MobileFirst", "WebInnovations", "DigitalTransformation",
      "TechPioneers", "SoftwareCrafters", "DevStudio", "CodeFactory", "AppBuilders",
      "WebWizards", "TechSolutions", "DigitalExperts", "CloudNative", "APISpecialists",
      "FullStackPros", "FrontendMasters", "BackendExperts", "MobileDevs", "UXHeroes"
    ];
    locations:string[] = [
      "San Francisco, CA", "New York, NY", "Remote", "Austin, TX", "Seattle, WA",
      "Boston, MA", "Denver, CO", "Chicago, IL", "Los Angeles, CA", "Portland, OR",
      "Atlanta, GA", "Miami, FL", "Dallas, TX", "Phoenix, AZ", "Las Vegas, NV",
      "Salt Lake City, UT", "Nashville, TN", "Raleigh, NC", "Washington, DC",
      "Philadelphia, PA", "Minneapolis, MN", "Detroit, MI", "Houston, TX",
      "San Diego, CA", "Orlando, FL", "Charlotte, NC", "Columbus, OH", "Indianapolis, IN"
    ];
}
