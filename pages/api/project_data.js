import * as fs from "fs";
const path = require('path');

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const filePath = path.join("project_data", "local_db.json");
      const data = await fs.promises.readFile(filePath, "utf-8");
      const myProject = await JSON.parse(data);
      // Process a POST request - Example:
      res.status(200).json(myProject);
    } catch (err) {
      console.log(err);
      res.status(400).json({error:err.message});
    }
  }
};

export default handler
