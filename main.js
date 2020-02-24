const labels = [
    "Capital + Interest (Investor)",
    "Catch-up (Founders)",
    "Shares (Founders)",
    "Shares (Investor)",
];

const colors = [
    "#eeaaaa",
    "#aaaaff",
    "#aaaaee",
    "#ddaaaa",
];

new Chart(document.getElementById("exit5m-catchup").getContext("2d"), {
    type: "doughnut",
    data: {
        datasets: [{
            data: [1.728, 3.272, 0, 0],
            backgroundColor: colors,
        }],
        labels,
    }
});

new Chart(document.getElementById("exit5m-nocatchup").getContext("2d"), {
    type: "doughnut",
    data: {
        datasets: [{
            data: [1.728, 0, 2.6176, 0.6544],
            backgroundColor: colors,
        }],
        labels,
    }
});

new Chart(document.getElementById("exit10m-catchup").getContext("2d"), {
    type: "doughnut",
    data: {
        datasets: [{
            data: [1.728, 6.912, 1.088, 0.272],
            backgroundColor: colors,
        }],
        labels,
    }
});