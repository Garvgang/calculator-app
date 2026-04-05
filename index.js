const express = require('express');
const path = require('path');

const app = express();

// Middleware to parse JSON body
app.use(express.json());
app.use(express.static('public'));


app.post('/sum', function (req, res) {
    const a = parseFloat(req.body.a);
    const b = parseFloat(req.body.b);

    if (isNaN(a) || isNaN(b)) {
        return res.json({ ans: "❌ Invalid input" });
    }
    const sum = a + b;
    res.json({ ans: sum });
});

// SUB
app.post('/sub', function (req, res) {
    const a = parseFloat(req.body.a);
    const b = parseFloat(req.body.b);

    if (isNaN(a) || isNaN(b)) {
        return res.json({ ans: "❌ Invalid input" });
    }
    res.json({ ans: a - b });
});

// MUL
app.post('/mul', function (req, res) {
    const a = parseFloat(req.body.a);
    const b = parseFloat(req.body.b);

    if (isNaN(a) || isNaN(b)) {
        return res.json({ ans: "❌ Invalid input" });
    }
    res.json({ ans: a * b });
});

// DIV
app.post('/div', function (req, res) {
    const a = parseFloat(req.body.a);
    const b = parseFloat(req.body.b);
    if (b === 0) {
        return res.json({ ans: "❌ Cannot divide by zero" });
    }
    res.json({ ans: a / b });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
