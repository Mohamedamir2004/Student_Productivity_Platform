document.addEventListener("DOMContentLoaded", () => {
    const breadcrumbLast = document.querySelector(".pathofdestinations > span:last-of-type");
    const tabRadios = document.querySelectorAll('input[name="calculations-tab"]');

    const tabNames = {
        "calculator-tab": "Calculator",
        "age-tab": "Age Calculator",
        "bmi-tab": "BMI Calculator"
    };

    function updateBreadcrumb() {
        const selectedTab = document.querySelector('input[name="calculations-tab"]:checked');
        if (!selectedTab || !breadcrumbLast) return;

        breadcrumbLast.textContent = tabNames[selectedTab.id] || "Calculators";
    }

    tabRadios.forEach((radio) => {
        radio.addEventListener("change", updateBreadcrumb);
    });

    if (!document.querySelector('input[name="calculations-tab"]:checked')) {
        const defaultTab = document.querySelector("#calculator-tab");
        if (defaultTab) {
            defaultTab.checked = true;
        }
    }

    updateBreadcrumb();
});

document.querySelectorAll('.navitem').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.navitem').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});