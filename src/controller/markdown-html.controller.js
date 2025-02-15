import Showdown from "showdown";

const converter = new Showdown.Converter();

class MarkDownToHtmlConverter {
  convertToHTML(req, res) {
    console.log("requesting to convert markdown to html");
    try {
      const { markdown } = req.body;

      if ((!markdown && markdown !== "") || typeof markdown !== "string") {
        res.status(400).json({ error: "please send valid markdown in body" });
        return;
      }

      const html = converter.makeHtml(markdown);
      res.json({ html });
    } catch (error) {
      res.status(500).send({ error: "error converting to html" });
    }
  }
}

export const markDownController = new MarkDownToHtmlConverter();
