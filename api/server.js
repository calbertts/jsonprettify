module.exports = (req, res) => {
  const NEWLINE = '\n';
  const DEFAULT_INDENT = 2;

  const indent  = req.query.indent ? Number(req.query.indent) : DEFAULT_INDENT;

  if (!req.body) {
    res.status(400).send('No JSON found\n');
    return;
  }

  try {
    const object = JSON.parse(req.body);
    const result = JSON.stringify(object, null, indent);

    res.status(200).send(result+NEWLINE);
  } catch(err) {
    res.status(400).send(`Not valid JSON input: ${err}\n`);
  }
}
