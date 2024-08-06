<script>
    function showSection(sectionId) {
        // Hide both sections
        document.getElementById('about').style.display = 'none';
        document.getElementById('projects').style.display = 'none';

        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        
        // Show the selected section
        document.getElementById(sectionId).style.display = 'block';
        
        // Add active class to the selected nav link
        document.querySelector(`.nav-link[onclick="showSection('${sectionId}')"]`).classList.add('active');

        // Debugging output
        console.log(`Showing section: ${sectionId}`);
    }

    function toggleDetails(detailId) {
        const details = document.getElementById(detailId);
        details.style.display = (details.style.display === 'none' || details.style.display === '') ? 'block' : 'none';
    }

    // Initialize with the About Me section visible
    document.addEventListener('DOMContentLoaded', () => showSection('about'));
</script>
