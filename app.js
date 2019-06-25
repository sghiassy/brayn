import express from "express";
import http from "http";
import path from "path";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express()

global.neo4j = require('neo4j-driver').v1

const graphenedbURL = process.env.GRAPHENEDB_BOLT_URL || "bolt://localhost:7687"
const graphenedbUser = process.env.GRAPHENEDB_BOLT_USER || "neo4j"
const graphenedbPass = process.env.GRAPHENEDB_BOLT_PASSWORD || "jolt39"

const driver = neo4j.driver(graphenedbURL, neo4j.auth.basic(graphenedbUser, graphenedbPass))
global.session = driver.session()

const users = require("./routes/users")
const nodes = require("./routes/nodes")

app.use(express.static(__dirname + "/src"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/v0/users", users)
app.use("/v0/nodes", nodes)

app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
