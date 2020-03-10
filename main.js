const labels = [
    "Capital + Interest (Investor)",
    "Catch-up (Founders)",
    "Shares (Founders)",
    "Shares (Investor)",
];

const colors = [
    "#ffaaaa",
    "#24acf8",
    "#048cd8",
    "#dd8888",
];

const years = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const capital = 1;
const yieldExpectation = 0.2;
const shares = 0.2;
const sharesFounders = 1 - shares;

new Chart(document.getElementById("exponential-growth").getContext("2d"), {
    type: "line",
    data: {
        labels: years.map(y => `Year ${y}`),
        datasets: [{
            label: "The Desired Exponential \"Hockey-Stick\" Growth",
            borderColor: "#24acf8",
            backgroundColor: "#cceeff",
            data: years.map(y => Math.pow(1.5, y)),
        }],
    },
});

new Chart(document.getElementById("yield-expectation").getContext("2d"), {
    type: "bar",
    data: {
        labels: years.map(y => `Year ${y}`),
        datasets: [{
            label: "Capital",
            backgroundColor: colors[0],
            data: years.map(y => capital),
        }, {
            label: "Yield Expectation",
            backgroundColor: colors[3],
            data: years.map(y => capital * Math.pow(1 + yieldExpectation, y) - capital),
        }],
    },
    options: {
        scales: {
            xAxes: [
                {
                    stacked: true,
                }
            ],
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true,
                }
            }],
        }
    }
});

new Chart(document.getElementById("catch-up").getContext("2d"), {
    type: "bar",
    data: {
        labels: years.map(y => `Year ${y}`),
        datasets: [{
            label: "Capital",
            backgroundColor: colors[0],
            data: years.map(y => capital),
        }, {
            label: "Yield Expectation",
            backgroundColor: colors[3],
            data: years.map(y => capital * Math.pow(1 + yieldExpectation, y) - capital),
        }, {
            label: "Catch-up",
            backgroundColor: colors[1],
            data: years.map(y => (sharesFounders / shares) * capital * Math.pow(1 + yieldExpectation, y)),
        }],
    },
    options: {
        scales: {
            xAxes: [
                {
                    stacked: true,
                }
            ],
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true,
                }
            }],
        }
    }
});

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

new Chart(document.getElementById("linear-growth").getContext("2d"), {
    type: "bar",
    data: {
        labels: years.map(y => `Year ${y}`),
        datasets: [{
            type: "line",
            label: "Actual Company Value",
            borderColor: "#55ffaa",
            backgroundColor: "transparent",
            data: years.map(y => y * 0.75),
        }, {
            label: "Capital + Yield Expectation",
            backgroundColor: colors[0],
            data: years.map(y => capital * Math.pow(1 + yieldExpectation, y)),
        }, {
            label: "Catch-up",
            backgroundColor: colors[1],
            data: years.map(y => (sharesFounders / shares) * capital * Math.pow(1 + yieldExpectation, y)),
        },],
    },
    options: {
        scales: {
            xAxes: [
                {
                    stacked: true,
                }
            ],
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true,
                }
            }],
        }
    }
});

new Chart(document.getElementById("linear-growth-profit").getContext("2d"), {
    type: "line",
    data: {
        labels: years.map(y => `Year ${y}`),
        datasets: [{
            label: "Profit for Founders",
            borderColor: "#339955",
            backgroundColor: "transparent",
            data: years.map(y => (y * 0.75) - (capital * Math.pow(1 + yieldExpectation, y))),
        }],
    },
});