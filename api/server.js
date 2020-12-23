module.exports = (req, res) => {
  console.log('Starting')
  const NEWLINE = '\n';
  const debug   = false;
  const indent  = req.query.indent ? Number(req.query.indent) : 2;

  if (debug) {
    console.debug('Debug is enabled');
    console.debug('Indent:', indent);
    console.debug('Body received:', req.body);
  }

  let lines;
  if (req.body)
    lines = req.body;
  else {
    res.status(400).send('No JSON found\n');
    return;
  }

  if (debug)
    console.debug('Raw lines:', lines);

  const object = JSON.parse(lines);
  const result = JSON.stringify(object, null, indent);

  if (debug)
    console.debug('Stringified:', result);

  console.log('Finishing')
  res.status(200).send(result+NEWLINE)
}
