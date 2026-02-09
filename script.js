const spotlight = document.querySelector('.spotlight');
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

// 1. Mouse Interaction Tracking
window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Background Spotlight Follow
    spotlight.style.setProperty('--x', `${x}px`);
    spotlight.style.setProperty('--y', `${y}px`);

    // Custom Cursor Dot
    dot.style.transform = `translate(${x}px, ${y}px)`;
    
    // Smooth Outline Follow
    outline.animate({
        left: `${x - 20}px`,
        top: `${y - 20}px`
    }, { duration: 450, fill: "forwards" });
});

// 2. Robot Dog Scroll Interaction
const robot = document.getElementById('robot-guide');
const status = document.querySelector('.status-bubble');

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    // Robot travels from left to right based on scroll
    robot.style.left = `${scrollPercent - 10}%`;

    // Status updates based on page progress
    if (scrollPercent < 15) status.innerText = "System: Initializing...";
    else if (scrollPercent < 45) status.innerText = "Founding Vision: Vikramjot Singh";
    else if (scrollPercent < 85) status.innerText = "Accessing Arsenal...";
    else status.innerText = "Audit: Optimal";
});

// 3. Live Terminal Audit System
const terminalBody = document.getElementById('terminal-output');
const auditLines = [
    "> SQC Kernel 5.0 Booting...",
    "> Software Standards: NITJ CSE Verified.",
    "> Robotic Dog Link: [STABLE]",
    "> Quality Control Check: 100% Passed.",
    "> Founding Visionary: Vikramjot Singh [ADMIN]",
    "> Status: Super Quant Coders Ready.",
    "> Ready for deployment..."
];

let lineIndex = 0;
function runAuditLogs() {
    if (lineIndex < auditLines.length) {
        let p = document.createElement('p');
        p.innerText = auditLines[lineIndex];
        p.style.marginBottom = "8px";
        terminalBody.appendChild(p);
        lineIndex++;
        setTimeout(runAuditLogs, 1200);
    }
}
runAuditLogs();

// 4. Global Hover Interaction for Cursor
document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        outline.style.transform = 'scale(1.8)';
        outline.style.backgroundColor = 'rgba(0, 243, 255, 0.05)';
    });
    el.addEventListener('mouseleave', () => {
        outline.style.transform = 'scale(1)';
        outline.style.backgroundColor = 'transparent';
    });
});