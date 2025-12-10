import { 
  Target, 
  Rocket, 
  BarChart3, 
  PenTool, 
  Link2, 
  Briefcase,
  FileUp,
  Settings,
  Bot,
  Mail
} from "lucide-react";

export const APP_NAME = "Applica Smart";

export const FEATURES = [
  {
    id: 1,
    title: "Smart Resume Matching",
    description: "AI-powered technology that tailors your resume to match each job posting perfectly.",
    icon: Target,
  },
  {
    id: 2,
    title: "Auto-Apply System",
    description: "Automatically apply to hundreds of relevant positions while you focus on other tasks.",
    icon: Rocket,
  },
  {
    id: 3,
    title: "Application Tracking",
    description: "Track all your applications in one place with real-time status updates.",
    icon: BarChart3,
  },
  {
    id: 4,
    title: "Custom Cover Letters",
    description: "Generate personalized cover letters for each application using AI.",
    icon: PenTool,
  },
  {
    id: 5,
    title: "Job Board Integration",
    description: "Connect to LinkedIn, Indeed, Glassdoor, and 50+ other job platforms.",
    icon: Link2,
  },
  {
    id: 6,
    title: "Interview Preparation",
    description: "Get AI-powered insights and preparation tips for potential interviews.",
    icon: Briefcase,
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    id: 1,
    title: "Upload Your Resume",
    description: "Start by uploading your current resume and professional information.",
    step: "Step 1",
    icon: FileUp,
  },
  {
    id: 2,
    title: "Set Your Preferences",
    description: "Define your job preferences, target roles, locations, and salary expectations.",
    step: "Step 2",
    icon: Settings,
  },
  {
    id: 3,
    title: "AI Does the Work",
    description: "Our AI scans job boards, customizes applications, and applies on your behalf.",
    step: "Step 3",
    icon: Bot,
  },
  {
    id: 4,
    title: "Track & Interview",
    description: "Monitor your applications and get notified when companies respond.",
    step: "Step 4",
    icon: Mail,
  },
];

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];
