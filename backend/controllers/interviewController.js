const model = require("../config/gemini");

let userResult = {};

exports.getHome = (req, res) => res.render("index");

exports.getInterview = (req, res) => res.render("interview");

exports.checkAnswer = async (req, res) => {
    try {
        const { question, answer } = req.body;

        const prompt = `Question: "${question}" Answer: "${answer}". Is this correct? Start with Good answer or Wrong answer then explain in one line.`;

        const result = await model.generateContent(prompt);

        res.json({
            feedback: result.response.text()
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "AI Error" });
    }
};

exports.saveResult = (req, res) => {
    userResult = req.body;
    res.sendStatus(200);
};

exports.getResult = (req, res) => {
    res.render("result", { result: userResult });
};