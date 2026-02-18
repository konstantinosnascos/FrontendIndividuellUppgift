
document.addEventListener("DOMContentLoaded", function () {
    var items = document.querySelectorAll(".add-to-cart");
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            alert("Item added to cart!");
        });
    });

    var newsletterForm = document.querySelector(".newsletter form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for subscribing!");
        });
    }

    if ("PerformanceObserver" in window) {
        var lcpObserver = new PerformanceObserver(function (entryList) {
            var entries = entryList.getEntries();
            var lastEntry = entries[entries.length - 1];
            console.log("LCP element:", lastEntry.element);
            console.log("LCP time:", lastEntry.startTime, "ms");
        });
        lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
    }

    if (typeof axe !== "undefined") {
        axe.run().then(function (results) {
            console.log("axe violations:", results.violations.length);
            results.violations.forEach(function (violation) {
                console.log("Rule:", violation.id);
                console.log("Impact:", violation.impact);
                console.log("Description:", violation.description);
                console.log("Nodes affected:", violation.nodes.length);
            });
            console.log("axe passes:", results.passes.length);
        });
    }
});

