// Tool Categories Configuration
const TOOL_CATEGORIES = {
    'all': {
        name: 'All Tools',
        icon: 'fas fa-th',
        color: '#6366f1'
    },
    'Writing': {
        name: 'Writing tools',
        icon: 'fas fa-pen-nib',
        color: '#10b981'
    },
    'Text': {
        name: 'Text tools',
        icon: 'fas fa-font',
        color: '#3b82f6'
    },
    'design': {
        name: 'Design',
        icon: 'fas fa-pencil-ruler',
        color: '#f59e0b'
    },
    'Conversion': {
        name: 'Conversion',
        icon: 'fas fa-exchange-alt',
        color: '#ef4444'
    },
    'Date&Time': {
        name: 'Date & Time Tools',
        icon: 'fas fa-calendar-alt',
        color: '#8b5cf6'
    },
  
    'security': {
        name: 'Security',
        icon: 'fas fa-shield-alt',
        color: '#f97316'
    },
    'Health': {
        name: 'Health Tools',
        icon: 'fas fa-heartbeat',
        color: '#ec4899'
    },
    'finance': {
        name: 'Finance',
        icon: 'fas fa-coins',
        color: '#14b8a6'
    },
    'Scanning': {
        name: 'Scanning Tools',
        icon: 'fas fa-barcode',
        color: '#6366f1'
    },
    'audio': {
        name: 'Audio Tools',
        icon: 'fas fa-volume-up',
        color: '#9333ea'
    },
    'Time': {
        name: 'Time Tools',
        icon: 'fas fa-clock',
        color: '#9333ea'
    },
    'Network': {
        name: 'Network Tools',
        icon: 'fas fa-network-wired',
        color: '#9333ea'
    },
    
    'SEO': {
        name: 'SEO Tools',
        icon: 'fas fa-chart-line',
        color: '#9333ea'
    },
    'Legal': {
        name: 'Legal Tools',
        icon: 'fas fa-balance-scale',
        color: '#9333ea'
    },
    
    'Utility': {
        name: 'Utility Tools',
        icon: 'fas fa-tools',
        color: '#9333ea'
    },
    'Math': {
        name: 'Math Tools',
        icon: 'fas fa-square-root-alt',
        color: '#9333ea'
    },
    'Image': {
        name: 'Image Tools',
        icon: 'fas fa-image',
        color: '#9333ea'
    },
    
};

// Tools Database - All tool content managed here
const TOOLS_DATABASE = [
    // Productivity Tools
    
    
    // Audio Tools
    {
        id: 'text-to-speech-converter',
        name: 'Text to Speech Converter',
        category: 'audio',
        description: 'Converts written text into natural-sounding voice using AI-powered speech synthesis. Supports multiple languages and voices. Perfect for accessibility, presentations, or saving articles as audio. Audio can be downloaded for offline use.',
        icon: 'fa fa-volume-up',
        link: 'tool/2.html',
        rating: 4.7,
        badge: 'new',
        features: ['Text to voice', 'TTS engine', 'Speech output', 'Multiple languages', 'Custom voice speed'],
        pricing: 'Free',
        dateAdded: '2024-01-23'
    },
    
    // Writing tools
{
    id: 'word',
    name: 'word counter',
    category: 'Writing',
    description: 'Instantly count the number of words characters sentences  and paragraphs in your text.Helpful for writers students and professionals who want to stay within limits.This Word Counter also detects average reading time and keyword density.',
    icon: 'fa fa-sort-numeric-up',
    link: 'tool/1.html',
    rating: 4,
    
    features: [
        'Word count',
        'Live counter',
        'Character limit check',
        'Text stats',
        'Writing tool'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-21'
},
{
    id: 'Character',
    name: 'Character Counter',
    category: 'Writing',
    description: 'Quickly count characters in your text including spaces without spaces or only letters.Ideal for social media posts, SMS limits, meta descriptions, and writing tasks with strict character limits.',
    icon: 'fa fa-font',
    link: 'tool/3.html',
    rating: 4.3,
    
    features: [
        'Character count',
        'Live tracker',
        'Limit checker',
        'Whitespace control',
        'Text length'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-22'
},
// Text tools
{
    id: 'Case',
    name: 'Case Converter',
    category: 'Text',
    description: 'Instantly convert your text to uppercase, lowercase, title case, or sentence case.Useful for reformatting text inessays, headlines, coding, or online forms.Just paste your text and choose the desired format with a single click.',
    icon: 'fa fa-text-height',
    link: 'tool/4.html',
    rating: 4.4,
    
    features: [
        'Uppercase & lowercase',
        'Sentence case',
        'Title case',
        'Toggle case',
        'Instant conversion'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-22'
},

{
    id: 'TextRepeater',
    name: 'Text Repeater',
    category: 'Text',
    description: 'Automatically repeat any text multiple times with just one click. Great for social media posts, fun messages, or testing purposes.You can set the number of repetitions and even add separators between them.',
    icon: 'fa fa-redo',
    link: 'tool/6.html',
    rating: 4.6,
    
    features: [
        'Repeat text',
        'Set repeat count',
        'Line or space separator',
        'Instant preview',
        'Copy output'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-22'
},

//Security Tools
{
    id: 'PasswordGenerator',
    name: 'Password Generator',
    category: 'security',
    description: 'Generate strong and secure passwords with customizable length, symbols, numbers, and uppercase letters.Ideal for securing your online accounts, apps, and devices.This tool ensures randomness and helps prevent password-related breaches.',
    icon: 'fa fa-key',
    link: 'tool/5.html',
    rating: 4.2,
    
    features: [
        'Strong password',
        'Random generator',
        'Custom length',
        'Symbols & numbers',
        'One-click copy'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-21'
},
//Conversion Tools


{
    id: 'TexttoBinaryConverter',
    name: 'Text ⇄ Binary Converter',
    category: 'Conversion',
    description: 'Convert text to binary and binary to text instantly.Ideal for encoding messages, learning binary systems, or debugging binary data.Supports real-time conversion with copyable results.',
    icon: 'fa fa-code',
    link: 'tool/27.html',
    rating: 4.5,
    
    features: [
        'Text ↔ Binary',
        'Live conversion',
        'Instant encode/decode',
        'Copy result',
        'Error handling'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-23'
},
{
    id: 'UnitConverter',
    name: 'Unit Converter',
    category: 'Conversion',
    description: 'Convert between various measurement units like length, weight, temperature, volume, and more.Supports metric and imperial systems with real-time results.Perfect for students, engineers, and everyday tasks.',
    icon: 'fa fa-exchange-alt',
    link: 'tool/11.html',
    rating: 4.2,
    
    features: [
        'Length weight time',
        'Live conversion',
        'Multiple units',
        'Quick switch',
        'Easy input'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-22'
},


{
    id: 'NumbertoWordConverter',
    name: 'Number to Word Converter',
    category: 'Conversion',
    description: 'Instantly convert any number into its English word format.Useful for writing cheques, filling forms, and improving number comprehension.Supports small to large numbers with accurate grammar.',
    icon: 'fa fa-sort-alpha-up',
    link: 'tool/7.html',
    rating: 4.5,
    
    features: [
        'Number to text',
        'Spelling numbers',
        'Large number support',
        'Currency format',
        'Simple output'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-22'
},


//Date&Time Tools
{
    id: 'AgeCalculator',
    name: 'Age Calculator',
    category: 'Date&Time',
    description: 'Calculate your exact age in years, months, and days from your birthdate.Useful for official forms, documents, or fun personal tracking. Also shows upcoming birthday and days left.',
    icon: 'fa fa-birthday-cake',
    link: 'tool/8.html',
    rating: 4.4,
    
    features: [
        'Age by DOB',
        'Years months & days',
        'Live result',
        'Date validation',
        'Birthday tracker'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-22'
},
{
    id: 'DaysBetweenDatesCalculator',
    name: 'Days Between Dates Calculator',
    category: 'Date&Time',
    description: 'Calculate the number of days between two selected dates instantly.Useful for planning events, tracking deadlines, or calculating age gaps.Also supports weekends, leap years, and date difference in weeks or months.',
    icon: 'fa fa-calendar-alt',
    link: 'tool/26.html',
    rating: 4.1,
    
    features: [
        'Start & end date',
        'Total days/months/years',
        'Live result',
        'Date validation',
        'Clear layout'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-23'
},

//Health Tools

{
    id: 'BMICalculator',
    name: 'BMI Calculator',
    category: 'Health',
    description: 'Calculate your Body Mass Index (BMI) using your height and weight.Helps determine if you are underweight, normal, overweight, or obese based on standard BMI ranges.Supports both metric and imperial units.',
    icon: 'fa fa-weight',
    link: 'tool/9.html',
    rating: 4.1,
    
    features: [
        'BMI value',
        'Health category',
        'Metric & imperial units',
        'Weight guide',
        'Instant result'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-22'
},

//Finance Tools
{
    id: 'LoanCalculator',
    name: 'Loan Calculator',
    category: 'finance',
    description: 'Calculate your monthly loan payments, total interest, and overall cost.Enter loan amount, interest rate, and repayment period to get instant results. Ideal for personal, car, or home loan planning.',
    icon: 'fa fa-calculator',
    link: 'tool/10.html',
    rating: 4.1,
    
    features: [
        'EMI calculation',
        'Interest breakdown',
        'Monthly schedule',
        'Principal vs Interest',
        'Flexible input'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-22'
},


//Scanning Tools
{
    id: 'QRCodeScanner',
    name: 'QR Code Scanner',
    category: 'Scanning',
    description: 'Instantly scan QR codes using your device’s camera or by uploading an image.Quickly access URLs, text, Wi-Fi credentials, and other encoded data.Works offline and supports saving scan history for future reference.',
    icon: 'fa fa-qrcode',
    link: 'tool/12.html',
    rating: 4.5,
    badge: 'offline Use',
    features: [
        'Text to QR',
        'Live preview',
        'Download image',
        'Instant generation',
        'Scan QR',
        'Camera support',
        'Live result',
        'QR data display',
        'Mobile optimized'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-22'
},

//Design Tools
{
    id: 'ColorPicker',
    name: 'Color Picker',
    category: 'design',
    description: 'Pick any color using a visual selector or enter a HEX, RGB, or HSL code manually.Instantly copy color codes and preview live.Perfect for designers, developers, and UI/UX tasks.',
    icon: 'fa fa-eye-dropper',
    link: 'tool/15.html',
    rating: 4.5,
    
    features: [
        'Pick any color',
        'Hex & RGB',
        'Live preview',
        'Color history',
        'Click to copy'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-22'
},
{
    id: 'ColorCodeConverter',
    name: 'Color Code Converter',
    category: 'design',
    description: 'Convert color values between HEX, RGB, HSL, and CMYK formats.Great for web and graphic designers needing fast and accurate color conversions. Supports live preview with copy-to-clipboard feature.',
    icon: 'fa fa-palette',
    link: 'tool/16.html',
    rating: 4.5,
    
    features: [
        'Hex to RGB',
        'RGB to Hex',
        'Live conversion',
        'Color display',
        'One-click copy'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-22'
},

//Time Tools
{
    id: 'OnlineStopwatch',
    name: 'Online Stopwatch',
    category: 'Time',
    description: 'A simple and accurate stopwatch to track elapsed time.Start, stop, and reset with ease — perfect for workouts, productivity, or timing tasks.Runs smoothly in the background without reloading the page.',
    icon: 'fa fa-stopwatch',
    link: 'tool/17.html',
    rating: 4.1,
    
    features: [
        'Start/Pause/Reset',
        'Digital timer',
        'Accurate count',
        'Simple UI',
        'Responsive design'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-22'
},
{
    id: 'CountdownTimer',
    name: 'Countdown Timer',
    category: 'Time',
    description: 'Set a custom countdown timer for any event or task. Receive alerts when time is up — perfect for studying, cooking, meetings, or workouts.Clean interface with start, pause, and reset options.',
    icon: 'fa fa-hourglass-half',
    link: 'tool/18.html',
    rating: 4.1,
    
    features: [
        'Set time',
        'Countdown display',
        'Alarm finish',
        'Live ticking',
        'Easy control'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-22'
},

//Network


{
    id: 'InternetSpeedTest',
    name: 'Internet Speed Test',
    category: 'Network',
    description: 'Test your internet connection speed including download, upload, ping, and jitter.Real-time results with clean visuals and customizable test settings.Great for checking network stability at home or on mobile.',
    icon: 'fa fa-tachometer-alt',
    link: 'tool/21.html',
    rating: 4.5,
    
    features: [
        'Download/upload speed',
        'Ping test',
        'Live meter',
        'Connection check',
        'Mobile-friendly'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-22'
},
//SEO Tools
{
    id: 'MetaTagGenerator',
    name: 'Meta Tag Generator',
    category: 'SEO',
    description: 'Create optimized meta tags for your website including title, description, keywords, robots and more.Improve your site SEO visibility and social media preview with structured meta data.Copy and paste ready for any HTML project.',
    icon: 'fa fa-code',
    link: 'tool/22.html',
    rating: 4.1,
    
    features: [
        'SEO meta tags',
        'Title & description',
        'Preview output',
        'HTML-ready',
        'Easy copy'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-22'
},
//Legal Tools

{
    id: 'PrivacyPolicyGenerator',
    name: 'Privacy Policy Generator',
    category: 'Legal',
    description: 'Instantly generate a professional privacy policy for your website or app.Just fill in your company details, and get a ready-to-use policy tailored for GDPR, CCPA, and other laws.Ideal for bloggers, developers, and business owners.',
    icon: 'fa fa-user-shield',
    link: 'tool/23.html',
    rating: 4.0,
    
    features: [
        'Auto-generate policy',
        'Customizable inputs',
        'Legal language',
        'HTML output',
        'Copy & download'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-23'
},
//Utility Tools
{
    id: 'RandomNumberGenerator',
    name: 'Random Number Generator',
    category: 'Utility',
    description: 'Generate random numbers within a custom range in a single click.Useful for lotteries, games, simulations, and decision-making tasks.Option to allow duplicates or enforce unique results.',
    icon: 'fa fa-random',
    link: 'tool/24.html',
    rating: 4.2,
    
    features: [
        'Min/max range',
        'Generate instantly',
        'Copy number',
        'Unique values',
        'Simple interface'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-22'
},
//Math Tools

{
    id: 'PercentageCalculator',
    name: 'Percentage Calculator',
    category: 'Math',
    description: 'Quickly calculate percentage values, percentage increase or decrease, and find what percent of a number.Ideal for finance, shopping discounts, and academic use.Simple, accurate, and easy to use.',
    icon: 'fa fa-percent',
    link: 'tool/25.html',
    rating: 4.1,
    
    features: [
        'Find percent',
        'Increase/decrease',
        'Reverse calc',
        'Instant result',
        'Math helper'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-23'
},
//Image Tools
{
    id: 'ImageCompressor',
    name: 'Image Compressor',
    category: 'Image',
    description: 'Compress image files (JPG, PNG, WebP) without losing visible quality.Reduce file size for faster loading websites, email attachments, and mobile storage.Drag & drop supported with instant preview and download.',
    icon: 'fa fa-compress',
    link: 'tool/28.html',
    rating: 4.7,
    
    features: [
        'Reduce file size',
        'Upload & compress',
        'Quality preview',
        'JPG/PNG support',
        'Download optimized'
    ],
    pricing: 'Free',
    dateAdded: '2025-07-23'
},
    
];

// Utility functions for data manipulation
const ToolsData = {
    // Get all categories with tool counts
    getCategories() {
        const categoryCounts = {};
        
        // Initialize all categories with count 0
        Object.keys(TOOL_CATEGORIES).forEach(categoryId => {
            categoryCounts[categoryId] = 0;
        });
        
        // Count tools in each category
        TOOLS_DATABASE.forEach(tool => {
            if (categoryCounts.hasOwnProperty(tool.category)) {
                categoryCounts[tool.category]++;
            }
        });
        
        // Count all tools for 'all' category
        categoryCounts.all = TOOLS_DATABASE.length;
        
        return Object.keys(TOOL_CATEGORIES).map(categoryId => ({
            id: categoryId,
            name: TOOL_CATEGORIES[categoryId].name,
            icon: TOOL_CATEGORIES[categoryId].icon,
            color: TOOL_CATEGORIES[categoryId].color,
            count: categoryCounts[categoryId]
        }));
    },
    
    // Get tools by category
    getToolsByCategory(categoryId = 'all') {
        if (categoryId === 'all') {
            return TOOLS_DATABASE;
        }
        return TOOLS_DATABASE.filter(tool => tool.category === categoryId);
    },
    
    // Search tools by query
    searchTools(query, categoryId = 'all') {
        let tools = this.getToolsByCategory(categoryId);
        
        if (!query || query.trim() === '') {
            return tools;
        }
        
        const searchTerm = query.toLowerCase().trim();
        
        return tools.filter(tool => {
            return (
                tool.name.toLowerCase().includes(searchTerm) ||
                tool.description.toLowerCase().includes(searchTerm) ||
                tool.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
                TOOL_CATEGORIES[tool.category].name.toLowerCase().includes(searchTerm)
            );
        });
    },
    
    // Sort tools
    sortTools(tools, sortBy = 'name') {
        const sortedTools = [...tools];
        
        switch (sortBy) {
            case 'name':
                return sortedTools.sort((a, b) => a.name.localeCompare(b.name));
            case 'category':
                return sortedTools.sort((a, b) => {
                    const categoryA = TOOL_CATEGORIES[a.category].name;
                    const categoryB = TOOL_CATEGORIES[b.category].name;
                    return categoryA.localeCompare(categoryB);
                });
            case 'rating':
                return sortedTools.sort((a, b) => (b.rating || 0) - (a.rating || 0));
            case 'newest':
                return sortedTools.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
            case 'popular':
                // Sort by badge priority: popular > featured > new, then by rating
                const badgePriority = { 'popular': 3, 'featured': 2, 'new': 1, undefined: 0 };
                return sortedTools.sort((a, b) => {
                    const priorityA = badgePriority[a.badge] || 0;
                    const priorityB = badgePriority[b.badge] || 0;
                    
                    if (priorityA !== priorityB) {
                        return priorityB - priorityA;
                    }
                    return (b.rating || 0) - (a.rating || 0);
                });
            default:
                return sortedTools;
        }
    },
    
    // Get tool by ID
    getToolById(id) {
        return TOOLS_DATABASE.find(tool => tool.id === id);
    },
    
    // Get featured tools
    getFeaturedTools(limit = 6) {
        return TOOLS_DATABASE
            .filter(tool => tool.badge === 'featured' || tool.badge === 'popular')
            .sort((a, b) => (b.rating || 0) - (a.rating || 0))
            .slice(0, limit);
    },
    
    // Get tools statistics
    getStats() {
        const totalTools = TOOLS_DATABASE.length;
        const categories = Object.keys(TOOL_CATEGORIES).length - 1; // Exclude 'all'
        const avgRating = TOOLS_DATABASE.reduce((sum, tool) => sum + (tool.rating || 0), 0) / totalTools;
        const newestTool = TOOLS_DATABASE.reduce((newest, tool) => {
            return new Date(tool.dateAdded) > new Date(newest.dateAdded) ? tool : newest;
        });
        
        return {
            totalTools,
            categories,
            averageRating: Math.round(avgRating * 10) / 10,
            newestTool: newestTool.name,
            lastUpdate: newestTool.dateAdded
        };
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TOOL_CATEGORIES, TOOLS_DATABASE, ToolsData };
}
