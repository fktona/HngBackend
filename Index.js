const express = require('express');
const app = express();

// Define a route for your endpoint
app.get('/api', (req, res) => {
  // Retrieve query parameters
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Get the current date and time
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const utcTime = currentDate.toISOString();

  // Construct the JSON response
  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: 'https://github.com/fktona/HngBackend/blob/master/Index.js',
    github_repo_url: 'https://github.com/fktona/HngBackend',
    status_code: 200,
  };

  // Send the JSON response
  res.json(response);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
