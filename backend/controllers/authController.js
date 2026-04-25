exports.getLogin = (req, res) => res.render("login");

exports.getRegister = (req, res) => res.render("register");

exports.postLogin = (req, res) => {
    const { email, password } = req.body;

    if (email && password) return res.redirect("/home");

    res.redirect("/login");
};

exports.postRegister = (req, res) => {
    const { name, email, password } = req.body;

    if (name && email && password) return res.redirect("/home");

    res.redirect("/register");
};