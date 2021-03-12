const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const members = require('./Members');
// const logger = require("./middleware/logger");
const app = express();

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Homepage handlebars
app.get("/", (req, res) => {
    res.render('index', {
        title: 'Members App',
        members
    })
})

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Members API route
app.use('/api/members', require("./routes/api/members"))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
