import React, { useState, useEffect } from 'react';

const ReportsQuickLinks = ({ reports }) => {
    const [quickLinks, setQuickLinks] = useState([]);

    useEffect(() => {
        // Simulate fetching user's frequently accessed reports from local storage or a database
        const storedLinks = JSON.parse(localStorage.getItem('quickLinks')) || [];
        setQuickLinks(storedLinks);
    }, []);

    const handleReportAccess = (report) => {
        // Update the access frequency of the report
        const updatedLinks = [...quickLinks];
        const linkIndex = updatedLinks.findIndex(r => r.id === report.id);

        if (linkIndex >= 0) {
            // If report is already in quick links, increase its access count
            updatedLinks[linkIndex].accessCount += 1;
        } else {
            // Add new report to quick links with initial access count
            updatedLinks.push({ id: report.id, title: report.title, accessCount: 1 });
        }

        // Sort reports by access frequency and limit the number of quick links displayed
        updatedLinks.sort((a, b) => b.accessCount - a.accessCount);
        const topReports = updatedLinks.slice(0, 5);

        // Update state and local storage
        setQuickLinks(topReports);
        localStorage.setItem('quickLinks', JSON.stringify(topReports));
    };

    return (
        <div>
            <h3>Frequently Accessed Reports</h3>
            <ul>
                {quickLinks.map(link => (
                    <li key={link.id}>{link.title}</li>
                ))}
            </ul>

            <h3>All Reports</h3>
            <ul>
                {reports.map(report => (
                    <li key={report.id} onClick={() => handleReportAccess(report)}>{report.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ReportsQuickLinks;