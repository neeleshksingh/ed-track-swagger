import React, { useState } from "react";
const Dev = () => {
    const apiLinks = [
        { name: 'Auth', url: 'https://api-dev-auth.bimsr.com/swagger/index.html' },
        { name: 'Tech Support', url: 'https://api-dev-techsupport.bimsr.com/swagger/index.html' },
        { name: 'Masters', url: 'https://api-dev-masters.bimsr.com/swagger/index.html' },
        { name: 'Examinations', url: 'https://api-dev-examinations.bimsr.com/swagger/index.html' },
        { name: 'Academics', url: 'https://api-dev-academics.bimsr.com/swagger/index.html' },
        { name: 'Accounts', url: 'https://api-dev-accounts.bimsr.com/swagger/index.html' },
        { name: 'HR', url: 'https://api-dev-hr.bimsr.com/swagger/index.html' },
        { name: 'Administrations', url: 'https://api-dev-administrations.bimsr.com/swagger/index.html' },
        { name: 'Onboard Student', url: 'https://api-dev-onboardstudent.bimsr.com/swagger/index.html' },
        { name: 'Leads', url: 'https://api-dev-leads.bimsr.com/swagger/index.html' },
        { name: 'Library Management', url: 'https://api-dev-librarymanagement.bimsr.com/swagger/index.html' },
        { name: 'Leave Management', url: 'https://api-dev-leavemanagement.bimsr.com/swagger/index.html' },
        { name: 'Students', url: 'https://api-dev-students.bimsr.com/swagger/index.html' },
    ];

    // Assign a category and icon to each API for visual grouping
    const categoryMapping = {
        'Auth': { category: 'Security', icon: '🔐' },
        'Tech Support': { category: 'Support', icon: '🛠️' },
        'Masters': { category: 'Configuration', icon: '⚙️' },
        'Examinations': { category: 'Academics', icon: '📝' },
        'Academics': { category: 'Academics', icon: '📚' },
        'Accounts': { category: 'Finance', icon: '💰' },
        'HR': { category: 'Human Resources', icon: '👥' },
        'Administrations': { category: 'Administration', icon: '🏢' },
        'Onboard Student': { category: 'Students', icon: '🎓' },
        'Leads': { category: 'Marketing', icon: '📈' },
        'Library Management': { category: 'Library', icon: '📖' },
        'Leave Management': { category: 'Human Resources', icon: '🗓️' },
        'Students': { category: 'Students', icon: '🎓' },
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [hoveredCard, setHoveredCard] = useState(null);

    // Extract unique categories for filter buttons
    const categories = ['All', ...new Set(Object.values(categoryMapping).map(item => item.category))];

    // Filter APIs based on search term and active category
    const filteredApis = apiLinks.filter(api => {
        const matchesSearch = api.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' ||
            (categoryMapping[api.name] && categoryMapping[api.name].category === activeCategory);

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="app-container">
            {/* Header */}
            <header className="app-header">
                <div className="header-content">
                    <h1>Development API Dashboard</h1>
                    <p>Access and manage all your API endpoints in one place</p>
                </div>
            </header>

            {/* Search and Filter */}
            <div className="content-wrapper">
                <div className="controls-container">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search APIs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        <span className="search-icon">🔍</span>
                    </div>

                    <div className="category-filters">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`category-button ${activeCategory === category ? 'active' : ''}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* API Cards Grid */}
                <div className="cards-grid">
                    {filteredApis.map((api, index) => {
                        const { category, icon } = categoryMapping[api.name] || { category: 'Other', icon: '🔗' };
                        const isHovered = hoveredCard === index;

                        return (
                            <a
                                key={index}
                                href={api.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`card ${isHovered ? 'hovered' : ''}`}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="card-progress-bar"></div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <div className="card-title-container">
                                            <span className="card-icon">{icon}</span>
                                            <div>
                                                <h3 className="card-title">{api.name}</h3>
                                                <span className="card-category">{category}</span>
                                            </div>
                                        </div>
                                        <div className="card-arrow">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="card-description">
                                        Access the {api.name} API documentation and endpoints
                                    </p>
                                    <div className="card-footer">
                                        <span>SBU Environment</span>
                                        <div className="status-indicator">
                                            <span className="status-dot"></span>
                                            Active
                                        </div>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>

                {filteredApis.length === 0 && (
                    <div className="empty-state">
                        <div className="empty-icon">🔍</div>
                        <h3>No APIs found</h3>
                        <p>Try adjusting your search or filter criteria</p>
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="app-footer">
                <div className="footer-content">
                    API Dashboard — Access all your SBU APIs in one place
                </div>
            </footer>
        </div>
    );
}

export default Dev;