---
layout: page
title: Smart CPM Parser
description: Smart CPM Parser revolutionizes cargo message processing with a robust parsing tool inspired by Grammarly. It has specific parser based on rules which detects frequent errors and significantly reduces manual effort, enhances data accuracy, and streamlines cargo handling operations.
img: assets/img/solution_overview.jpg
importance: 1
category: Hackathons
related_publications: false
giscus_comments: true
---
The roar of jet engines and the bustle of passengers – these are the usual sights and sounds associated with an airport. But beneath the surface lies another crucial operation: the cargo department. Here, a dedicated team of ground handlers manages a constant flow of goods, meticulously creating "Cargo Palet Messages" (CPMs) for each shipment.

These CPMs are essentially digital passports for cargo which ensure smooth transfer from one airport to another. However, ensuring they adhere to the strict rules set by the International Air Transport Association (IATA) is crucial. Unfortunately, up to 70% of these CPMs are rejected due to human errors, both in syntax (grammatical mistakes) and semantics (meaning-based errors). This not only delays deliveries but also creates unnecessary work for both airlines and ground handlers.

In October 2022, I had the opportunity to participate in the `Amadeus hackathon`, an event where teams brainstorm and build innovative solutions within a limited timeframe. My team and I were particularly drawn to the `Etihad Green Development Challenge`, which focused on tackling a real-world issue faced by the cargo industry. The goal was to create a “Smart Parser” that could analyze these CPM files and identify any errors and mitigates them based on a specific grammar. 

The 48-hour hackathon was a whirlwind of brainstorming, coding, and collaboration. Our team, decided to build a user-friendly parser using `Flask` for the backend and HTML, CSS, and JavaScript for the frontend.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/etihad 1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/etihad 2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/etihad 3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Here are some comprehensive slides from our presentation
</div>

The heart of our creation, however, lay in its "grammar." We meticulously defined the rules based on IATA guidelines which allowing the parser to not only identify syntax errors like missing commas but also semantic errors like incorrect weight values.

Our Smart CPM Parser, a `"Grammarly"` for the cargo industry! It presented errors on a user-friendly dashboard, making it easy for ground handlers to pinpoint and rectify mistakes. Our efforts paid off: we were declared the winners of the challenge! The reward was not just the prestigious title, but also the opportunity to intern at Etihad Aviation Group in Abu Dhabi. This internship provided the invaluable experience of further refining and deploying our Smart CPM Parser within a real-world environment, making a tangible impact on the cargo industry.

<div class="row">
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6988125267739201536"  frameborder="0" allowfullscreen="Yes" height="500px" title="Embedded post" class="w-100  mb-5"></iframe>
    </div>













