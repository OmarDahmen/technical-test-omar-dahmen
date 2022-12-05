const express = require("express");
const passport = require("passport");
const router = express.Router();

const TaskObject = require("../models/task");

const SERVER_ERROR = "SERVER_ERROR";
const TASK_ALREADY_EXISTS = "TASK_ALREADY_EXISTS";

router.post("/", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    const data = await TaskObject.create({ ...req.body });
    return res.status(200).send({ data, ok: true });
  } catch (error) {
    if (error.code === 11000) return res.status(409).send({ ok: false, code: TASK_ALREADY_EXISTS });
    console.log(error);
    return res.status(500).send({ ok: false, code: SERVER_ERROR });
  }
});

router.get("/:projectId", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    const data = await TaskObject.find({ ...req.query, projectId: req.params.projectId }).sort("-last_updated_at");
    return res.status(200).send({ ok: true, data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, code: SERVER_ERROR, error });
  }
});

router.put("/:id", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    const obj = req.body;

    const data = await TaskObject.findByIdAndUpdate(req.params.id, obj, { new: true });

    res.status(200).send({ ok: true, data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, code: SERVER_ERROR, error });
  }
});

router.delete("/:id", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    await TaskObject.findOneAndRemove({ _id: req.params.id });
    res.status(200).send({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, code: SERVER_ERROR, error });
  }
});

module.exports = router;
