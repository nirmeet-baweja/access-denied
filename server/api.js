import { Router } from "express";

const knex = require("./knex");
const router = new Router();

router.get("/", (_, res) => {
  res.json({ message: "Hello, world!" });
});

router.get("/test", (_, res) => {
  res.json({ message: "Testing!" });
});

router.get("/cohorts", async (req, res) => {
  const cohorts = await knex("regions")
    .join("cohorts", "regions.id", "=", "cohorts.region_id")
    .select(
      "cohorts.id",
      "regions.name as region_name",
      "cohorts.cohort_number"
    );

  res.send(cohorts);
});

router.get("/cohorts/:cohortId/classes", async (req, res) => {
  const cohortId = req.params.cohortId;
  const classes = await knex("classes")
    .where("cohort_id", cohortId)
    .select("*");
  res.send(classes);
});

// get region's class's student list
router.get("/students", async (req, res) => {
  const students = await knex("users")
    .select("user_name")
    .where("user_name", "like", "Student%")
    .limit(10);

  res.send(students);
});

function fakeLogin(username, password) {
  const logins = [
    {
      username: "admin",
      password: "admin",
      role: "superAdmin",
      id: 1,
    },
  ];
  const userFound = logins.find(
    (x) => x.username === username && x.password === password
  );
  console.log(username, password);

  return userFound;
}

/* All Users Login API */
router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = fakeLogin(username, password);

  if (!user) {
    return res.status(401).send("username and password required");
  }
  req.session.username = user.username;
  req.session.role = user.role;
  req.session.userId = user.id;

  res.send("hello");
});

router.get("/login", (req, res) => {
  req.session.count += 1;
  res.json({
    username: req.session.username,
    count: req.session.count,
  });
});

export default router;
